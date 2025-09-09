<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const particlesLoaded = ref(false);

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const options = {
  background: {
    color: {
      value: 'transparent', // پس‌زمینه شفاف باشد تا رنگ اصلی body نمایش داده شود
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse', // ذرات از موس فرار کنند
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#475569', // رنگ ذرات
    },
    links: {
      color: '#475569', // رنگ خطوط بین ذرات
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.5, // سرعت حرکت ذرات
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // تعداد ذرات
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

onMounted(() => {
  // این یک ترفند کوچک برای اطمینان از بارگذاری صحیح است
  particlesLoaded.value = true;
});
</script>

<template>
  <vue-particles
    v-if="particlesLoaded"
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="options"
  />
</template>