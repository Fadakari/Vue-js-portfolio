<script setup lang="ts">
import AnimatedGradientBackground from '../AnimatedGradientBackground.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const yourname = "Erfan Hoseini Fadakar";
const yourtitle = "Full-Stack Software Engineer | Vue.js & Python Expert";
const descriptionText = "I build scalable, high-performance web applications tailored to streamline business processes. Bridging the gap between elegant UI and robust backend logic.";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <section class="hero-container" id="hero" ref="heroContainerRef">
    <div class="section-content internal-scroll">
      <h1 class="hero-name anim-stagger" ref="name">{{ $t('hero.name') }}</h1>
      <p class="hero-title anim-stagger" ref="title">{{ $t('hero.title') }}</p>
      <p class="hero-description anim-stagger" ref="description">{{ $t('hero.description') }}</p>
    </div>

    <div @click="scrollToContact" class="contact-scroll-indicator">
      <span class="indicator-text">{{ $t('hero.connect') }}</span>
      <div class="indicator-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.hero-name {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 600px;
  color: #94a3b8;
  margin: auto;
}

.contact-scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  z-index: 10;
}

.indicator-text {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
  transition: color 0.3s ease;
  user-select: none;
}

/* یک خط عمودی مینیمال که انیمیشن رفت و برگشتی ظریفی به سمت پایین دارد */
.indicator-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--primary-color), transparent);
  position: relative;
  overflow: hidden;
}

.indicator-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  background: #fff;
  animation: scan-down 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-scroll-indicator:hover .indicator-text {
  color: var(--primary-color);
}

@keyframes scan-down {
  0% { transform: translateY(-15px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(40px); opacity: 0; }
}
</style>
