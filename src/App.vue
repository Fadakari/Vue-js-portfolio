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
  
  // وضعیت اولیه زیر کاپوت: همه عناصر ابتدا مخفی و کمی پایین‌تر قرار می‌گیرند
  gsap.set(elements, { 
    opacity: 0, 
    y: 40, 
    willChange: 'transform, opacity' 
  });

  // استفاده از ساختار قدرتمند batch برای مدیریت اختصاصی تک‌تک عناصر
  ScrollTrigger.batch(elements, {
    start: 'top 75%', // ورود به منطقه وضوح (عنصر وارد ۳/۴ پایینی صفحه می‌شود)
    end: 'top 25%',   // خروج از منطقه وضوح (عنصر وارد ۱/۴ بالایی صفحه می‌شود)
    
    // ۱. اسکرول به پایین: ورود عناصر به بخش میانی صفحه (ظاهر شدن روان)
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    },
    
    // ۲. اسکرول به پایین: خروج عناصر از بالای صفحه (کاربر دقیقاً محو شدن آن را در ۱/۴ بالایی می‌بیند)
    onLeave: (batch) => {
      gsap.to(batch, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.in',
        overwrite: 'auto'
      });
    },
    
    // ۳. اسکرول به بالا: بازگشت عناصر از بالای صفحه به بخش میانی
    onEnterBack: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: { each: 0.15, from: 'end' }, // معکوس کردن جهت آبشار برای طبیعی بودن حرکت از بالا
        ease: 'power2.out',
        overwrite: 'auto'
      });
    },
    
    // ۴. اسکرول به بالا: خروج عناصر از پایین صفحه (محو شدن روان در ۱/۴ پایینی)
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: { each: 0.1, from: 'end' },
        ease: 'power2.in',
        overwrite: 'auto'
      });
    }
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