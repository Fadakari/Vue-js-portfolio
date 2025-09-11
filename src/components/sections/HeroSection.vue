<script setup lang="ts">
import AnimatedGradientBackground from '../AnimatedGradientBackground.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ★ ScrollTrigger را وارد کنید

// gsap.registerPlugin(ScrollTrigger); // ★ ScrollTrigger را رجیستر کنید

const yourname = "Erfan Hoseini Fadakar";
const yourtitle = "Fullstack Developer(vue.js, python)";

// const name = ref(null);
// const title = ref(null);
// const description = ref(null);
// const heroContainerRef = ref(null); // ★ یک ref برای کل سکشن

// onMounted(() => {
//   // انیمیشن اولیه برای بارگذاری صفحه (مثل قبل)
//   const onLoadTl = gsap.timeline();
//   onLoadTl.from(name.value, { y: 30, opacity: 0, duration: 0.6 })
//     .from(title.value, { y: 30, opacity: 0, duration: 0.5 }, "-=0.4")
//     .from(description.value, { y: 30, opacity: 0, duration: 0.5 }, "-=0.3");
  
//   // ★ انیمیشن جدید و قدرتمند برای اسکرول
//   const onScrollTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: heroContainerRef.value, // ماشه: خود سکشن هیرو
//       start: 'top top', // انیمیشن از وقتی شروع شود که بالای سکشن به بالای صفحه برسد
//       end: '+=500', // انیمیشن در طول 500 پیکسل اسکرول اجرا شود
//       scrub: 1, // ★ انیمیشن را به اسکرول گره بزن (با نرمی 1 ثانیه)
//       pin: true, // ★ سکشن هیرو را در طول انیمیشن در صفحه "سنجاق" کن
//     }
//   });

//   // تعریف انیمیشن محو شدن برای عناصر هیرو در حین اسکرول
//   onScrollTl.to([name.value, title.value, description.value], {
//     opacity: 0,
//     y: -50, // کمی هم به بالا حرکت کنند تا حس بهتری بدهد
//     stagger: 0.1
//   });
// });
</script>

<template>
  <section class="hero-container" id="hero" ref="heroContainerRef">
    <div class="section-content internal-scroll">
      <h1 class="hero-name" ref="name">{{ yourname }}</h1>
      <p class="hero-title" ref="title">{{ yourtitle }}</p>
      <p class="hero-description" ref="description">
        A creative developer with a passion for building dynamic and engaging user interfaces.
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
  color: #94a3b8; /* خاکستری کمی تیره‌تر */
  margin: auto;
}
</style>