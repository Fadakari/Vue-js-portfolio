<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import Header from './components/Header.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = document.querySelectorAll('main > section');
  
  sections.forEach((section) => {
    const elements = section.querySelectorAll('.anim-stagger');
    if (elements.length === 0) return;

    // حالت اولیه: همه المان‌ها مخفی و پایین‌تر (برای ورود عادی)
    gsap.set(elements, { 
      opacity: 0, 
      y: 40, 
      willChange: 'transform, opacity' 
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',     // وقتی لبه بالایی سکشن به 80% ارتفاع viewport رسید
      end: 'bottom 20%',    // برای تعیین محدوده خروج
      // ========== ورود عادی (اسکرول به پایین) ==========
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          overwrite: true,
        });
      },
      // ========== خروج به سمت بالا (اسکرول به پایین و سکشن دارد از بالای صفحه خارج می‌شود) ==========
      onLeave: () => {
        gsap.to(elements, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.in',
          overwrite: true,
        });
      },
      // ========== ورود معکوس (اسکرول به بالا) ==========
      onEnterBack: () => {
        // ابتدا آن‌ها را از بالا بیاوریم
        gsap.set(elements, { y: -40, opacity: 0 });
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'back.out(0.6)',  // افکت فنری خوشگل برای بازگشت
          overwrite: true,
        });
      },
      // ========== خروج به سمت پایین (اسکرول به بالا و سکشن دارد از پایین صفحه خارج می‌شود) ==========
      onLeaveBack: () => {
        gsap.to(elements, {
          opacity: 0,
          y: -40,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.in',
          overwrite: true,
        });
      },
    });
  });

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  });
});

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <AnimatedGradientBackground />
  <Header :scroll-to-section="scrollToSection" />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<style>
/* استایل‌های پایه مثل قبل */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto !important;
  height: auto;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main > section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;   /* اضافه کن */
  z-index: 1;           /* اضافه کن */
  background: transparent; /* تضمین شفافیت */
}
.section-content {
  width: 100%;
  padding: 4rem 2rem;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .section-content {
    padding: 3rem 1.5rem;
  }
}
</style>