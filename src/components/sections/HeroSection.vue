<script setup lang="ts">
import AnimatedGradientBackground from '../AnimatedGradientBackground.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const yourname = "Erfan Hoseini Fadakar";
const yourtitle = "Senior Full-Stack Engineer | Python & Vue.js Expert";
const descriptionText = "I build scalable, high-performance web applications tailored to streamline business processes. Bridging the gap between elegant UI and robust backend logic.";
</script>

<template>
  <section class="hero-container" id="hero" ref="heroContainerRef">
    <div class="section-content internal-scroll">
      <h1 class="hero-name anim-stagger" ref="name">{{ yourname }}</h1>
      <p class="hero-title anim-stagger" ref="title">{{ yourtitle }}</p>
      <p class="hero-description anim-stagger" ref="description">
        {{ descriptionText }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  height: 100vh;
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
</style>
