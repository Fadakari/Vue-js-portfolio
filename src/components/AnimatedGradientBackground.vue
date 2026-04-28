<template>
  <div class="gradient-bg">
    <div class="gradients-container">
      <div v-for="n in 4" :key="n" :class="`blob color-${n}`"></div>
    </div>
  </div>
  
  </template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  const blobs = gsap.utils.toArray(".blob");
  const container = document.querySelector(".gradients-container");

  function moveBlob(blob) {
    gsap.to(blob, {
      xPercent: gsap.utils.random(-60, 60),
      yPercent: gsap.utils.random(-60, 60),
      
      duration: gsap.utils.random(1, 3),
      ease: "power1.inOut",
      
      onComplete: () => moveBlob(blob)
    });
  }

  blobs.forEach(blob => moveBlob(blob));
});
</script>

<style scoped>
.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.gradients-container {
  width: 100%;
  height: 100%;
  position: relative;
  filter: blur(100px);
}

.blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  top: 60%;
  left: 40%;
  will-change: transform;
  filter: blur(80px);
}


.blob {
  width: 600px;
  height: 600px;
}


.color-1 {
  top: 0;
  left: 0;
  background-color: #ff7231bd;
  top: 30%;
  left: 40% !important;
}

.color-2 {
  top: 0;
  right: 0;
  background-color: #cc00ff85;
  top: 10%;
  left: 30% !important;
}

.color-3 {
  bottom: 0;
  left: 0;
  background-color: #f831ff00;
  left: 20% !important;
}

.color-4 {
  bottom: 0;
  right: 0;
  background-color: #1ca0f88e;
  top: 30%;
  left: 40% !important;
}

</style>
