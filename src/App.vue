<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // ★ GSAP ScrollToPlugin را وارد می‌کنیم
import HeroSection from './components/sections/HeroSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import Header from './components/Header.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';
import ContactSection from './components/sections/ContactSection.vue';
import AboutSection from './components/sections/AboutSection.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // ★ ScrollToPlugin را هم رجیster می‌کنیم

// ★ --- شروع منطق جدید برای اسکرول دسکتاپ --- ★
const mainScroller = ref<HTMLElement | null>(null);
let sections: HTMLElement[] = [];
let isScrolling = false; // برای جلوگیری از اجرای همزمان انیمیشن‌ها
let currentSectionIndex = 0;

const handleDesktopWheel = (event: WheelEvent) => {
  // اگر انیمیشن در حال اجراست یا روی یک بخش با اسکرول داخلی هستیم، خارج شو
  if (isScrolling) return;

  // اگر موس روی بخش‌هایی است که خودشان اسکرول داخلی دارند، اجازه می‌دهیم اسکرول عادی کار کند
  const targetElement = event.target as HTMLElement;
  if (targetElement.closest('.skills-section .section-content') || targetElement.closest('.projects-section .section-content')) {
    return;
  }
  
  // برای جلوگیری از اسکرول عادی مرورگر
  event.preventDefault();

  const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

  if (scrollDirection === 'down' && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    scrollToSection(currentSectionIndex);
  } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
    currentSectionIndex--;
    scrollToSection(currentSectionIndex);
  }
};

const scrollToSection = (index: number) => {
  isScrolling = true; // ★ اسکرول را قفل می‌کنیم
  gsap.to(mainScroller.value, {
    duration: 1, // ★ می‌توانیم کمی سرعت انیمیشن را بیشتر کنیم برای حس بهتر
    scrollTo: { y: sections[index], autoKill: false },
    ease: 'power3.inOut',
    onComplete: () => {
      // ★★★ تغییر کلیدی: ما دیگر از setTimeout استفاده نمی‌کنیم.
      // قفل اسکرول دقیقاً زمانی باز می‌شود که انیمیشن تمام شده باشد.
      isScrolling = false;
    }
  });
};

// تابع برای فعال/غیرفعال کردن منطق اسکرول بر اساس اندازه صفحه
const setupDesktopScroll = () => {
  if (window.innerWidth > 1024 && mainScroller.value) {
    // در حالت دسکتاپ، scroll-snap را سخت‌گیرانه‌تر می‌کنیم
    mainScroller.value.style.scrollSnapType = 'y mandatory';
    // شنونده رویداد wheel را اضافه می‌کنیم
    mainScroller.value.addEventListener('wheel', handleDesktopWheel, { passive: false });
  } else if (mainScroller.value) {
    // در موبایل، به حالت قبل برمی‌گردیم
    mainScroller.value.style.scrollSnapType = 'y proximity';
    // شنونده رویداد را حذف می‌کنیم
    mainScroller.value.removeEventListener('wheel', handleDesktopWheel);
  }
};
// ★ --- پایان منطق جدید برای اسکرول دسکتاپ --- ★


onMounted(() => {
  sections = gsap.utils.toArray<HTMLElement>('main > section');

  sections.forEach((section) => {
    const content = section.querySelector('.section-content');
    if (!content) return;

    gsap.set(content, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      scroller: 'main',
      trigger: section,
      start: 'top 20%',
      end: 'bottom 80%', 
      onEnter: () => gsap.to(content, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
      onLeave: () => gsap.to(content, { opacity: 0, y: -50, duration: 0.8, ease: 'power3.in' }),
      onEnterBack: () => gsap.to(content, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(content, { opacity: 0, y: 50, duration: 0.8, ease: 'power3.in' }),
    });
  });

  const firstSectionContent = document.querySelector('main > section .section-content');
  if (firstSectionContent) {
    gsap.to(firstSectionContent, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
  }
  
  // ★ --- فعال‌سازی منطق اسکرول دسکتاپ --- ★
  mainScroller.value = document.querySelector('main');
  setupDesktopScroll();
  window.addEventListener('resize', setupDesktopScroll); // برای واکنش به تغییر سایز پنجره
});

onUnmounted(() => {
  // ★ --- حذف شنونده‌ها برای جلوگیری از نشت حافظه --- ★
  window.removeEventListener('resize', setupDesktopScroll);
  if (mainScroller.value) {
      mainScroller.value.removeEventListener('wheel', handleDesktopWheel);
  }
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
/* این استایل برای قرار گرفتن پس‌زمینه در زیر محتوا ضروری است */
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  -ms-overflow-style: none; /* برای Internet Explorer و Edge */
  scrollbar-width: none;
}
/* App.vue -> <style> */
main {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  /* ★★★ تغییر کلیدی: از mandatory به proximity ★★★ */
  scroll-snap-type: y proximity; /* این باعث می‌شود اسنپ کمتر سخت‌گیر باشد */
}

main::-webkit-scrollbar {
  display: none; /* کاملاً مخفی کردن */
}


/* تمام سکشن‌های داخل main باید تمام صفحه باشند */
main > section {
  width: 100%;
  scroll-snap-align: start; /* ★ هر سکشن به بالای صفحه می‌چسبد */
  display: flex; /* برای وسط‌چین کردن محتوای داخلی */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.section-content{
  width: 100%;
}

</style>