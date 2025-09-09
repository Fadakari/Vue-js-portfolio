<template>
  <section id="projects" class="projects-section" ref="projectsSectionRef">
    <div class="section-content">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <div class="card-image-container">
              <img :src="project.image" :alt="project.title" class="card-image" />
            </div>
            <img src="" alt="">
            <div class="card-content">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="card-footer">
                <a :href="project.liveUrl" target="_blank" class="card-button primary">Live Demo</a>
                <a :href="project.githubUrl" target="_blank" class="card-button secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectStockImage from '@/assets/image.png';

// gsap.registerPlugin(ScrollTrigger);

// const projectsSectionRef = ref(null);

// ★ لیست پروژه‌های خود را اینجا وارد کنید
const projects = ref([
  {
    title: 'Stock platform development', 
    description: 'Development of the Android Stock platform and application for buying and selling goods at Hilti Heydari Company',
    image: projectStockImage,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python/Flask', 'Kotlin'],
    liveUrl: 'https://stockdivar.ir',
    githubUrl: 'https://github.com/Fadakari/stock_app',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing real-time data using GSAP and Chart.js.',
    image: '/projects/project-2.jpg',
    tags: ['Vue.js', 'GSAP', 'REST API', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with a focus on animations and user experience.',
    image: '/projects/project-3.jpg',
    tags: ['Vue.js', 'GSAP', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
  },
]);

</script>

<style scoped>
.projects-section {
  position: relative;
  display: block !important;
  /* ★ پس‌زمینه با افکت پارالکس */
  background-image: url('/path/to/your/dark-background.jpg'); /* ★ آدرس عکس پس‌زمینه خود را قرار دهید */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* ★ این خط جادوی پارالکس را ایجاد می‌کند */
}
.section-content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  /* ★ تغییر ۲: پدینگ‌ها به اینجا منتقل شدند */
  padding: 6rem 2rem 8rem 2rem;
  position: relative;
  z-index: 2;
}

/* مخفی کردن ظاهر اسکرول‌بار داخلی */
.section-content::-webkit-scrollbar {
  display: none;
}
.section-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}


/* لایه پوششی برای خوانایی بهتر متن روی عکس */

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* ★ استایل کارت‌های شیشه‌ای */
.project-card {
  background-color: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* باعث می‌شود فوتر کارت به پایین بچسبد */
}

.card-title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-tags {
  margin-bottom: 1.5rem;
}

.tag {
  display: inline-block;
  background-color: rgba(56, 189, 248, 0.1);
  color: #7dd3fc;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-footer {
  margin-top: auto; /* ★ فوتر را به پایین کارت هل می‌دهد */
  display: flex;
  gap: 1rem;
}

.card-button {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.card-button.primary {
  background-color: #38bdf8;
  color: #1e293b;
}
.card-button.primary:hover {
  background-color: #7dd3fc;
}

.card-button.secondary {
  background-color: transparent;
  color: #e2e8f0;
  border: 1px solid #334155;
}
.card-button.secondary:hover {
  background-color: #334155;
}
</style>