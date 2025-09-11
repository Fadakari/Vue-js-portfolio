<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import HeroSection from './components/sections/HeroSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import Header from './components/Header.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';
import ContactSection from './components/sections/ContactSection.vue';
import AboutSection from './components/sections/AboutSection.vue';

const sections = ref<HTMLElement[]>([]);
let currentSectionIndex = 0;
let isAnimating = false;
const animationDuration = 1.2;

const changeSection = (newIndex: number) => {
  if (isAnimating || newIndex < 0 || newIndex >= sections.value.length || newIndex === currentSectionIndex) {
    return;
  }
  isAnimating = true;
  const currentSection = sections.value[currentSectionIndex];
  const nextSection = sections.value[newIndex];
  const currentElements = gsap.utils.toArray(currentSection.querySelectorAll('.section-content > *'));
  const nextElements = gsap.utils.toArray(nextSection.querySelectorAll('.section-content > *'));
  const direction = newIndex > currentSectionIndex ? 1 : -1;

  gsap.set(nextSection, { autoAlpha: 1 });
  gsap.from(nextElements, { y: direction * 60, autoAlpha: 0, stagger: 0.1, duration: animationDuration * 0.6, ease: 'power3.out' });
  gsap.to(currentElements, {
    y: -direction * 60, autoAlpha: 0, stagger: 0.05, duration: animationDuration * 0.5, ease: 'power3.in',
    onComplete: () => {
      gsap.set(currentSection, { autoAlpha: 0 });
      gsap.set(currentElements, { y: 0, autoAlpha: 1 });
      currentSectionIndex = newIndex;
      setTimeout(() => { isAnimating = false; }, 300);
    }
  });
};

const handleWheel = (event: WheelEvent) => {
  if (isAnimating) {
    event.preventDefault();
    return;
  }
  const targetElement = event.target as HTMLElement;
  const scrollableContent = targetElement.closest('.internal-scroll');
  const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

  if (scrollableContent) {
    const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
    const epsilon = 1.5;
    if (scrollDirection === 'down' && scrollHeight - clientHeight - scrollTop > epsilon) return;
    if (scrollDirection === 'up' && scrollTop > epsilon) return;
  }
  event.preventDefault();
  if (scrollDirection === 'down') {
    changeSection(currentSectionIndex + 1);
  } else {
    changeSection(currentSectionIndex - 1);
  }
};

let touchStartY = 0;
// ★★★ متغیر برای ذخیره عنصر لمس شده
let touchTarget: HTMLElement | null = null; 

const handleTouchStart = (event: TouchEvent) => {
  touchStartY = event.touches[0].clientY;
  // ★★★ ذخیره عنصری که لمس از آنجا شروع شده
  touchTarget = event.touches[0].target as HTMLElement;
};

// ★★★ تابع handleTouchEnd با منطق جدید و هوشمند ★★★
const handleTouchEnd = (event: TouchEvent) => {
  if (isAnimating || !touchTarget) return;

  const touchEndY = event.changedTouches[0].clientY;
  const deltaY = touchEndY - touchStartY;

  // فقط اگر کشیدن انگشت به اندازه کافی بلند بود، عمل کن
  if (Math.abs(deltaY) > 50) {
    const scrollableContent = touchTarget.closest('.internal-scroll');

    // اگر در حال لمس یک محتوای قابل اسکرول داخلی هستیم
    if (scrollableContent) {
      const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
      // تلورانس را برای موبایل کمی بیشتر در نظر می‌گیریم
      const epsilon = 5; 

      // اگر انگشت به سمت بالا کشیده شده (رفتن به بخش بعدی)
      // و هنوز به انتهای اسکرول نرسیده‌ایم، تابع را متوقف کن
      if (deltaY < 0 && scrollHeight - clientHeight - scrollTop > epsilon) {
        return;
      }

      // اگر انگشت به سمت پایین کشیده شده (رفتن به بخش قبلی)
      // و هنوز در ابتدای اسکرول نیستیم، تابع را متوقف کن
      if (deltaY > 0 && scrollTop > epsilon) {
        return;
      }
    }

    // اگر کد به اینجا رسید، یعنی باید سکشن را عوض کنیم
    if (deltaY < 0) { // کشیدن به سمت بالا (رفتن به بخش بعدی)
      changeSection(currentSectionIndex + 1);
    } else { // کشیدن به سمت پایین (رفتن به بخش قبلی)
      changeSection(currentSectionIndex - 1);
    }
  }
  // ★★★ پاک کردن متغیر در انتها
  touchTarget = null;
};

const handleNavigation = (event: Event) => {
  const customEvent = event as CustomEvent;
  const sectionId = customEvent.detail.sectionId;
  const newIndex = sections.value.findIndex(sec => sec.id === sectionId);
  if (newIndex !== -1) {
    changeSection(newIndex);
  }
};

onMounted(() => {
  sections.value = gsap.utils.toArray<HTMLElement>('main > section');
  gsap.set(sections.value, { autoAlpha: 0 });
  gsap.set(sections.value[0], { autoAlpha: 1 });

  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('touchstart', handleTouchStart, { passive: false });
  window.addEventListener('touchend', handleTouchEnd, { passive: false });
  window.addEventListener('navigateToSection', handleNavigation);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
  window.removeEventListener('touchstart', handleTouchStart);
  window.removeEventListener('touchend', handleTouchEnd);
  window.removeEventListener('navigateToSection', handleNavigation);
});
</script>

<template>
  <AnimatedGradientBackground />
  <Header />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<style>
/* استایل‌های عمومی App.vue (بدون تغییر) */
html, body {
  overflow: hidden;
  height: 100%;
}
main {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
main > section {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden; 
  opacity: 0;
}
.section-content {
  width: 100%;
}
</style>