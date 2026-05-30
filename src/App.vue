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
  const elements = document.querySelectorAll('.anim-stagger');
  
  elements.forEach((el) => {
    // ایجاد یک تایم‌لاین اختصاصی متصل به اسکرول برای تک‌تک عناصر
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 95%",   // شروع انیمیشن به محض ورود لبه‌ی بالای عنصر از پایین ویوپورت
        end: "bottom 5%",   // پایان انیمیشن وقتی لبه‌ی پایین عنصر از بالای ویوپورت خارج می‌شود
        scrub: 0.8,         // اتصال مستقیم و بسیار نرم به اسکرول (عدد 0.8 یک لختی و روانی جذاب ایجاد می‌کند)
      }
    });

    // گام اول: ورود از پایین صفحه (کم‌کم ظاهر و بزرگ می‌شود و بالا می‌آید)
    tl.fromTo(el, 
      { opacity: 0, scale: 0.85, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "none" }
    )
    
    // گام دوم: حضور در محدوده طلایی وسط صفحه (تمرکز تصویری و بزرگ‌نمایی ملایم)
    .to(el, { 
      opacity: 1, 
      scale: 1.03,        // ایجاد افکت بزرگ شدن و زوم ملایم در مرکز صفحه
      y: -10, 
      duration: 1.5, 
      ease: "none" 
    })
    
    // گام سوم: خروج از بالای صفحه (کم‌کم کوچک و محو می‌شود و به سمت بالا می‌رود)
    .to(el, { 
      opacity: 0, 
      scale: 0.85, 
      y: -50, 
      duration: 1, 
      ease: "none" 
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