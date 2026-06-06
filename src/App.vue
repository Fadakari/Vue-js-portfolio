<script setup lang="ts">
import { onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
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

const { locale } = useI18n();

// تابعی برای ساخت متمرکز انیمیشن‌های اسکراب
const createScrollAnimations = () => {
  const elements = document.querySelectorAll('.anim-stagger');
  
  elements.forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",   
        end: "bottom 25%",   
        scrub: 0.8,         
      }
    });

    tl.fromTo(el, 
      { opacity: 0, scale: 0.8, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "none" }
    )
    .to(el, { 
      opacity: 1, 
      scale: 1.03,        
      y: -10, 
      duration: 1.5, 
      ease: "none" 
    })
    .to(el, { 
      opacity: 0, 
      scale: 0.8, 
      y: -50, 
      duration: 1, 
      ease: "none" 
    });
  });
};

onMounted(() => {
  createScrollAnimations();
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

// ترفند اصلی: گوش دادن به تغییرات زبان برای رفرش کردن تمام تریگرهای اسکرول
watch(locale, async () => {
  await nextTick(); // صبر برای رندر کامل متون زبان جدید
  setTimeout(() => {
    ScrollTrigger.refresh(); // ریفرش و محاسبه مجدد مختصات انیمیشن‌ها روی اسکرول
  }, 100);
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
