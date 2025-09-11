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
  
  const currentElements = gsap.utils.toArray(currentSection.querySelectorAll('.anim-stagger'));
  const nextElements = gsap.utils.toArray(nextSection.querySelectorAll('.anim-stagger'));
  const direction = newIndex > currentSectionIndex ? 1 : -1;

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(currentSection, { autoAlpha: 0 });
      gsap.set(currentElements, { clearProps: 'all' });
      currentSectionIndex = newIndex;
      isAnimating = false;
    }
  });

  gsap.set(nextSection, { autoAlpha: 1 });

  tl.to(currentElements, {
    y: -direction * 50,
    autoAlpha: 0,
    stagger: 0.07,
    duration: animationDuration * 0.4,
    ease: 'power3.in',
  });

  tl.from(nextElements, {
    y: direction * 50,
    autoAlpha: 0,
    stagger: 0.12,
    duration: animationDuration * 0.6,
    ease: 'power3.out',
  }, "-=0.4");
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
let touchTarget: HTMLElement | null = null; 

const handleTouchStart = (event: TouchEvent) => {
  touchStartY = event.touches[0].clientY;
  touchTarget = event.touches[0].target as HTMLElement;
};

const handleTouchEnd = (event: TouchEvent) => {
  if (isAnimating || !touchTarget) return;

  const touchEndY = event.changedTouches[0].clientY;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaY) > 50) {
    const scrollableContent = touchTarget.closest('.internal-scroll');

    if (scrollableContent) {
      const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
      const epsilon = 5; 

      if (deltaY < 0 && scrollHeight - clientHeight - scrollTop > epsilon) {
        return;
      }

      if (deltaY > 0 && scrollTop > epsilon) {
        return;
      }
    }

    if (deltaY < 0) {
      changeSection(currentSectionIndex + 1);
    } else {
      changeSection(currentSectionIndex - 1);
    }
  }
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