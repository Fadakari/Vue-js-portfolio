<template>
  <section id="projects" class="projects-section" ref="projectsSectionRef">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">Featured Projects</h2>
        
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card anim-stagger">
            
            <div class="card-image-container">
              <div class="image-overlay"></div>
              <img :src="project.image" :alt="project.title" class="card-image" />
            </div>

            <div class="card-content">
              <h3 class="card-title">{{ project.title }}</h3>
              <!-- توضیحات کوتاه شده با محدودیت ۳ خط -->
              <p class="card-description">{{ project.description }}</p>
              
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              
              <div class="card-footer">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="card-button primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="btn-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="card-button secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .08 1.53 1.04 1.53 1.04.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clip-rule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import projectStockImage from '@/assets/image.png';
import projectBioImage from '@/assets/Screenshot 2025-12-01 125428.jpg'
import digitalMenu from '@/assets/-2147483648_-210034.jpg'
import yazdMobile from '@/assets/-2147483648_-210038.jpg'

// متون کوتاه‌تر و خلاصه‌تر شدند تا فضای عمودی را نجات دهیم
const projects = ref([
  {
    title: 'Stock Management Platform', 
    description: 'Developed an Android stock platform and web application for tracking and trading goods efficiently at Hilti Heydari Company.',
    image: projectStockImage,
    tags: ['HTML5', 'Python', 'Flask', 'Kotlin'],
    liveUrl: 'https://stockdivar.ir',
    githubUrl: 'https://github.com/Fadakari/stock_app',
  },
  {
    title: 'Personal Biography Site', 
    description: 'A high-performance personal portfolio website redefining personal branding, built from the ground up using Nuxt 3 & GSAP.',
    image: projectBioImage,
    tags: ['Vue.js', 'Nuxt 3', 'GSAP', 'Tailwind'],
    liveUrl: 'https://behzadheydari.ir/',
    githubUrl: 'https://github.com/Fadakari/bio-site',
  },
  {
    title: 'Serverless Digital Menu',
    description: 'A blazing fast digital menu for a music school. Completely serverless, powered by Nuxt Nitro engine and Supabase.',
    image: digitalMenu,
    tags: ['Nuxt.js', 'Supabase', 'Nitro', 'Vue'],
    liveUrl: 'https://nuxt-nitro-motor-flrrimsiz-projects.vercel.app',
    githubUrl: 'https://github.com/Fadakari/nuxt-nitro-motor',
  },
  {
    title: 'Yazd Mobile Storefront', 
    description: 'Complete frontend rebuild using React & Next.js. Integrated custom APIs to ensure a fast, SEO-friendly eCommerce experience.',
    image: yazdMobile,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://yazd-mobile.ir',
  }
]);
</script>

<style scoped>
.section-content {
  width: 100%;
  padding: 6rem 2rem 8rem 2rem;
  position: relative;
  z-index: 2;
}
.section-content::-webkit-scrollbar {
  display: none;
}
.section-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
  /* حداقل عرض کارت‌ها رو کمی کمتر کردم تا تو دسکتاپ بهتر جا بشن */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  /* ظاهر Glassmorphism مدرن‌تر */
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  will-change: transform;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-image-container {
  position: relative;
  width: 100%;
  height: 220px; /* کاهش ارتفاع عکس */
  overflow: hidden;
}

/* افکت تاریکی ملایم روی عکس برای خوانایی بیشتر کل کارت */
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(15, 23, 42, 0.9) 100%);
  z-index: 1;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .card-image {
  transform: scale(1.08);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}

.card-description {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  
  /* محدود کردن متن به 3 خط برای جلوگیری از بلند شدن کارت */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.card-footer {
  margin-top: auto;
  display: flex;
  gap: 0.75rem;
  width: 100%;
}

.card-button {
  flex: 1; /* دکمه‌ها عرض برابر می‌گیرند */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.card-button.primary {
  background-color: #38bdf8;
  color: #0f172a;
}

.card-button.primary:hover {
  background-color: #7dd3fc;
  transform: translateY(-2px);
}

.card-button.secondary {
  background-color: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}
</style>