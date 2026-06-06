<template>
  <section id="projects" class="projects-section" ref="projectsSectionRef">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">{{ $t('projects.title') }}</h2>
        
        <div class="projects-grid">
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="project-card anim-stagger"
            @click="openModal(project)"
          >
            <img :src="project.image" :alt="project.title" class="card-bg-image" />
            
            <div class="card-gradient-overlay"></div>
            
            <div class="card-content-overlay">
              <h3 class="card-title">{{ project.title }}</h3>
              
              <div class="card-tags-minimal">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="minimal-tag">{{ tag }}</span>
              </div>
              
              <button class="view-details-btn">
                <span>{{ $t('projects.view_details') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <!-- پاپ‌آپ (Modal) جزئیات پروژه -->
      <Transition name="modal">
        <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-content glass-panel">
            <button class="close-modal" @click="closeModal">&times;</button>

            <div class="modal-image-wrapper">
              <img :src="selectedProject.image" :alt="selectedProject.title + ' - Developed by Erfan Fadakar'" class="modal-image" />
            </div>

            <div class="modal-body">
              <h3 class="modal-title">{{ selectedProject.title }}</h3>

              <div class="modal-tags">
                <span v-for="tag in selectedProject.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>

              <p class="modal-description">{{ selectedProject.description }}</p>

              <div class="modal-actions">
                <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" class="modal-btn primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="btn-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {{ $t('projects.live_demo') }}
                </a>
                <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" class="modal-btn secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .08 1.53 1.04 1.53 1.04.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clip-rule="evenodd" />
                  </svg>
                  {{ $t('projects.source_code') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import projectStockImage from '@/assets/image.webp';
import projectBioImage from '@/assets/Screenshot 2025-12-01 125428.webp';
import digitalMenu from '@/assets/-2147483648_-210034.webp';
import yazdMobile from '@/assets/-2147483648_-210038.webp';
import pwaApp from '@/assets/pwaApp.webp';
import steelsara from '@/assets/steelsaraprg.webp';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const { t } = useI18n();

// متون ارتقا یافته به سبک Case Study
const projects = computed<Project[]>(() => [
  {
    id: 'p1',
    title: t('projects.steelsara_pwa_title'),
    description: t('projects.steelsara_pwa_desc'),
    image: pwaApp,
    tags: ['Vue 3', 'Service Worker', 'PWA'],
    liveUrl: 'https://steelsara.com/%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%87-%D8%AF%D9%82%DB%8C%D9%82-%D9%88%D8%B2%D9%86-%D8%A7%D8%B3%D8%AA%DB%8C%D9%84/',
  },
  {
    id: 'p2',
    title: t('projects.menu_title'),
    description: t('projects.menu_desc'),
    image: digitalMenu,
    tags: ['Nuxt.js', 'Supabase', 'Nitro', 'Vue'],
    liveUrl: 'https://nuxt-nitro-motor-flrrimsiz-projects.vercel.app',
    githubUrl: 'https://github.com/Fadakari/nuxt-nitro-motor',
  },
  {
    id: 'p3',
    title: t('projects.yazd_title'),
    description: t('projects.yazd_desc'),
    image: yazdMobile,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://yazd-mobile.ir',
  },
  {
    id: 'p4',
    title: t('projects.stock_title'), 
    description: t('projects.stock_desc'),
    image: projectStockImage,
    tags: ['Vue.js', 'Python', 'Flask', 'Kotlin'],
    liveUrl: 'https://stockdivar.ir',
    githubUrl: 'https://github.com/Fadakari/stock_app',
  },
  {
    id: 'p5',
    title: t('projects.bio_title'), 
    description: t('projects.bio_desc'),
    image: projectBioImage,
    tags: ['Vue.js', 'Nuxt 3', 'GSAP', 'Tailwind'],
    liveUrl: 'https://behzadheydari.ir/',
    githubUrl: 'https://github.com/Fadakari/bio-site',
  },
  {
    id: 'p6',
    title: t('projects.steelsara_seo_title'),
    description: t('projects.steelsara_seo_desc'),
    image: steelsara,
    tags: ['Elementor', 'Html & Css', 'SEO', 'PHP & JS'],
    liveUrl: 'https://steelsara.com/',
  },
]);

const selectedProjectId = ref<string | null>(null);

const selectedProject = computed(() => {
  return projects.value.find(p => p.id === selectedProjectId.value) || null;
});

const openModal = (project: Project) => {
  selectedProjectId.value = project.id;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedProjectId.value = null;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.section-content {
  width: 100%;
  padding: 6rem 2rem 8rem 2rem;
  position: relative;
  z-index: 2;
}

.container {
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
}

.project-card {
  position: relative;
  height: 400px; /* ارتفاع بلندتر برای کارت */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px -12px rgba(56, 189, 248, 0.25);
  border-color: rgba(56, 189, 248, 0.3);
}

/* تصویر که کل کارت را پر می‌کند */
.card-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  z-index: 1;
}

.project-card:hover .card-bg-image {
  transform: scale(1.08); /* زوم نرم روی عکس هنگام هاور */
}

/* گرادیانت تیره پایین کارت که روی عکس می‌افتد */
.card-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom, 
    transparent 0%, 
    rgba(9, 14, 25, 0.595) 30%, 
    rgba(15, 23, 42, 0.95) 100%
  );
  z-index: 2;
  transition: background 0.5s ease;
}

.project-card:hover .card-gradient-overlay {
  background: linear-gradient(
    to bottom, 
    transparent 0%, 
    rgba(15, 23, 42, 0.3) 30%, 
    rgba(15, 23, 42, 1) 100%
  );
}

/* محفظه نگهدارنده متن‌ها و دکمه در پایین کارت */
.card-content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 1.5rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  transition: color 0.3s ease;
}

.project-card:hover .card-title {
  color: #38bdf8;
}

/* تگ‌های مینیمال روی عکس */
.card-tags-minimal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.minimal-tag {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  color: #e2e8f0;
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* دکمه قشنگ و جدید (Glassmorphism + Primary Hover) */
.view-details-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem;
}

.project-card:hover .view-details-btn {
  background: #38bdf8;
  color: #0f172a;
  border-color: #38bdf8;
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.project-card:hover .arrow-icon {
  transform: translateX(4px);
}
/* ========================================= */
/* استایل‌های Modal (پاپ‌آپ شیشه‌ای) */
/* ========================================= */

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* اسکرول‌بار ظریف برای پاپ‌آپ */
.glass-panel::-webkit-scrollbar {
  width: 6px;
}
.glass-panel::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.close-modal:hover {
  background: #ef4444;
  border-color: #ef4444;
  transform: rotate(90deg);
}

.modal-image-wrapper {
  width: 100%;
  height: 300px;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2.5rem;
  text-align: left;
}

.modal-title {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}

.modal-description {
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

.modal-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.modal-btn.primary {
  background-color: #38bdf8;
  color: #0f172a;
}
.modal-btn.primary:hover {
  background-color: #7dd3fc;
  transform: translateY(-2px);
}

.modal-btn.secondary {
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.modal-btn.secondary:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* انیمیشن باز و بسته شدن پاپ‌آپ */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .glass-panel {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-enter-from .glass-panel {
  transform: scale(0.95) translateY(20px);
}

@media (max-width: 768px) {
  .modal-actions {
    flex-direction: column;
  }
  .modal-body {
    padding: 1.5rem;
  }
  .modal-image-wrapper {
    height: 200px;
  }
}
</style>