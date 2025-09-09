<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const target = ref(null);
const isVisible = ref(false);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true;
    }
  },
  {
    threshold: 0.1, // وقتی ۱۰٪ از المان دیده شد، انیمیشن اجرا شود
  }
);
</script>

<template>
  <div ref="target" class="animated-section" :class="{ 'is-visible': isVisible }">
    <slot></slot>
  </div>
</template>

<style scoped>
.animated-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animated-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>