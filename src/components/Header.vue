<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watchEffect } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isLangMenuOpen = ref(false);

const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('user-locale', lang);
  isLangMenuOpen.value = false;
  
  // تغییر هوشمند جهت سایت (RTL برای فارسی)
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
};

// اعمال تنظیمات جهت متن در همان لحظه اول لود سایت
watchEffect(() => {
  document.documentElement.dir = locale.value === 'fa' ? 'rtl' : 'ltr';
});

gsap.registerPlugin(ScrollToPlugin);

const mainScroller = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {  isScrolled.value = window.scrollY > 50;};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  gsap.from('.main-header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
  gsap.from('.nav-links li, .brand-name', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSectionHandler = (id: string) => {
  props.scrollToSection(id);
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};
const props = defineProps<{
  scrollToSection: (id: string) => void;
}>();

const isDeepScrolled = computed(() => isScrolled.value);




const generatePDF = () => {
  window.print();
};
</script>

<template>
  <header :class="{ 
      'main-header': true, 
      'scrolled': isScrolled, 
      'menu-open': isMobileMenuOpen,
      'deep-scrolled': isDeepScrolled 
    }">
    <div class="header-content">
      <div class="header-left">
        <a href="#" @click.prevent="scrollToSectionHandler('hero')" class="brand-name">FADAKAR</a>
      </div>
      
      <nav class="header-right desktop-nav">
        <ul class="nav-links">
          <li><a @click="scrollToSectionHandler('hero')" href="#hero">{{ $t('nav.home') }}</a></li>
          <li><a @click="scrollToSectionHandler('about')" href="#about">{{ $t('nav.about') }}</a></li>
          <li><a @click="scrollToSectionHandler('skills')" href="#skills">{{ $t('nav.skills') }}</a></li>
          <li><a @click="scrollToSectionHandler('projects')" href="#projects">{{ $t('nav.projects') }}</a></li>
          <li><a @click="scrollToSectionHandler('contact')" href="#contact">{{ $t('nav.contact') }}</a></li>
        </ul>
      </nav>

      <div class="lang-switcher-container relative">
        <button @click="isLangMenuOpen = !isLangMenuOpen" class="lang-btn" title="Change Language">
          <span class="uppercase text-sm font-semibold">{{ locale }}</span>
        </button>

        <Transition name="fade">
          <div v-if="isLangMenuOpen" class="lang-dropdown">
            <button @click="changeLanguage('en')" :class="{'active-lang': locale === 'en'}">English</button>
            <button @click="changeLanguage('fa')" :class="{'active-lang': locale === 'fa'}">فارسی</button>
            <button @click="changeLanguage('ru')" :class="{'active-lang': locale === 'ru'}">Русский</button>
          </div>
        </Transition>
      </div>

      <button @click="generatePDF" class="pdf-btn" title="Download CV as PDF">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>

      <button class="hamburger-button" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
    </div>


    <div class="mobile-menu-panel">
        <nav>
            <ul class="mobile-nav-links">
              <li><a @click="scrollToSectionHandler('hero')" href="#hero">Home</a></li>
              <li><a @click="scrollToSectionHandler('about')" href="#about">About</a></li>
              <li><a @click="scrollToSectionHandler('skills')" href="#skills">Skills</a></li>
              <li><a @click="scrollToSectionHandler('projects')" href="#projects">Projects</a></li>
              <li><a @click="scrollToSectionHandler('contact')" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease;
  color: #e0e0e0;
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(15px);
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  transition: padding 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.main-header.scrolled .header-content {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.main-header.deep-scrolled .header-content {
  padding-left: 15rem;
  padding-right: 15rem;
}

.main-header.scrolled {
  background-color: rgba(10, 10, 20, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.brand-name:hover {
  color: #8a2be2;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0; padding: 0;
}

.nav-links li a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  cursor: pointer;
}

.nav-links li a:hover { color: #fff; }

.nav-links li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #8a2be2;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.nav-links li a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.hamburger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1010;
  padding: 10px;
}
.hamburger-button .line {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-menu-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 10, 20, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 999;
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  text-align: center;
}
.mobile-nav-links li {
  margin-bottom: 2rem;
}
.mobile-nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
}


.main-header.menu-open .mobile-menu-panel {
  transform: translateX(0);
}
.main-header.menu-open .line1 {
  transform: rotate(45deg) translate(6px, 6px);
}
.main-header.menu-open .line2 {
  opacity: 0;
}
.main-header.menu-open .line3 {
  transform: rotate(-45deg) translate(6px, -6px);
}


@media (max-width: 768px) {
  .header-content {
    padding: 1rem 1.5rem;
  }
  .main-header.deep-scrolled .header-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .desktop-nav {
    display: none;
  }
  .hamburger-button {
    display: block;
  }
}





/* استایل‌های مربوط به دکمه PDF */
.pdf-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.pdf-btn:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-1px);
}

.pdf-btn svg {
  width: 1.25rem;
  height: 1.25rem;
}



/* استایل دکمه و دراپ‌داون زبان */
.lang-switcher-container {
  position: relative;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 50px;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.lang-dropdown {
  position: absolute;
  top: 120%;
  right: 0; /* در نسخه فارسی سمت چپ باز می‌شود به دلیل RTL */
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 100px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  z-index: 1000;
}

.lang-dropdown button {
  background: transparent;
  border: none;
  color: #cbd5e1;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
}

/* تغییر تراز متن برای زبان فارسی در دراپ‌داون */
html[dir="rtl"] .lang-dropdown button {
  text-align: right;
}

.lang-dropdown button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.lang-dropdown button.active-lang {
  color: #38bdf8;
  font-weight: 600;
  background: rgba(56, 189, 248, 0.1);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-5px); }
</style>