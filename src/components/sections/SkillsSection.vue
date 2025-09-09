<template>
  <section id="skills" class="skills-section">
    <div class="section-content" ref="sectionContentRef">
      <div class="container">
        <div class="skills-content w-full pt-20">
          <h2 class="section-title">My Tech Stack</h2>
          <p class="section-description">
            I specialize in creating modern, responsive, and high-performance web applications using cutting-edge technologies.
          </p>
        </div>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
            <span class="skill-name">{{ skill.name }}</span>
            <p class="skill-discription" :style="skill.style">{{ skill.discription }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import vueIcon from '@/assets/icons/vue.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import javascriptIcon from '@/assets/icons/javascript.svg';
import pythonIcon from '@/assets/icons/python.svg';
import viteIcon from '@/assets/icons/vitejs.svg';
import flaskIcon from '@/assets/icons/flask_dark.svg';
import tailwindIcon from '@/assets/icons/tailwindcss.svg';
import githubIcon from '@/assets/icons/GitHub_dark.svg';
import mysqlIcon from '@/assets/icons/mysql.svg';

// ★ ref برای دسترسی به عنصر در اسکریپت
const sectionContentRef = ref<HTMLElement | null>(null);

// لیست مهارت‌ها
const skills = ref([
  // از متغیرهای وارد شده به جای رشته استفاده کنید
  { name: 'Vue.js', icon: vueIcon, discription: 'Advanced', style: 'border: 1px solid #00ca33' },
  { name: 'TypeScript', icon: typescriptIcon, discription: 'Moderately', style: 'border: 1px solid #00aeff' },
  { name: 'JavaScript', icon: javascriptIcon, discription: 'Advanced', style: 'border: 1px solid #00ca33' },
  { name: 'Python', icon: pythonIcon, discription: 'Moderately', style: 'border: 1px solid #00aeff' },
  { name: 'Vite', icon: viteIcon, discription: 'Beginner', style: 'border: 1px solid #ff0800' },
  { name: 'Flask', icon: flaskIcon, discription: 'Moderately', style: 'border: 1px solid #00aeff' },
  { name: 'Tailwind', icon: tailwindIcon, discription: 'Beginner', style: 'border: 1px solid #ff0800' },
  { name: 'Github', icon: githubIcon, discription: 'Moderately', style: 'border: 1px solid #00aeff' },
  { name: 'Mysql', icon: mysqlIcon, discription: 'Moderately', style: 'border: 1px solid #00aeff' },
]);



</script>


<style scoped>
.skills-section {
  position: relative;
  display: block !important;
  height: 100vh;
}

/* ★★★ تغییر کلیدی برای اسکرول داخلی ★★★ */
.section-content {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  /* ★★★ حذف شد: دیگر نیازی به این خط نیست ★★★ */
  /* overscroll-behavior-y: contain; */

  /* برای جلوگیری از تکرار، فقط از یک پدینگ استفاده کنید */
  padding: 8rem 2rem 4rem;
}

/* مخفی کردن ظاهر اسکرول‌بار داخلی برای زیبایی */
.section-content::-webkit-scrollbar {
  display: none;
}
.section-content {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* ★★★ پایان تغییرات ★★★ */


.container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 400px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* بقیه استایل‌ها بدون تغییر باقی می‌مانند... */
.skill-card {
  background-color: rgba(30, 41, 59, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease ,border 0.3s ease ;
  scale: 1;
}

.skill-card:hover {
  transform: translateY(-5px);
  background-color: #1e293bd0;
  border: 1px solid #0099ff93;
}

.skill-icon {
  width: 40px;
  height: 40px;
}

.skill-name {
  color: #cbd5e1;
  font-size: 0.9rem;
  font-weight: bolder;
  font-size: 1.5rem;
}

.skill-discription{
  border-radius: 2rem;
  padding: .25rem 0.5rem;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .skills-content {
    padding-top: 0;
  }
  .section-description {
    margin: 0 auto 3rem auto;
  }
}
</style>