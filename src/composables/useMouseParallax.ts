// src/composables/useMouseParallax.ts
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { Ref } from 'vue';

export function useMouseParallax(intensity: number = 30) {
  const mouseX = ref(0);
  const mouseY = ref(0);

  // این تابع موقعیت موس را نسبت به مرکز صفحه محاسبه می‌کند (بین -۰.۵ تا +۰.۵)
  const handleMouseMove = (event: MouseEvent) => {
    mouseX.value = (event.clientX / window.innerWidth) - 0.5;
    mouseY.value = (event.clientY / window.innerHeight) - 0.5;
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });

  // ما مقادیر را در یک عدد (intensity) ضرب می‌کنیم تا شدت حرکت قابل کنترل باشد
  const parallaxX = computed(() => -mouseX.value * intensity);
  const parallaxY = computed(() => -mouseY.value * intensity);

  return { parallaxX, parallaxY };
}