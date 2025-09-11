<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const mainScroller = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  if (mainScroller.value) {
    isScrolled.value = mainScroller.value.scrollTop > 50;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  mainScroller.value = document.querySelector('main');
  if (mainScroller.value) {
    mainScroller.value.addEventListener('scroll', handleScroll);
  }

  gsap.from('.main-header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
  gsap.from('.nav-links li, .brand-name', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 });
});

onUnmounted(() => {
  if (mainScroller.value) {
    mainScroller.value.removeEventListener('scroll', handleScroll);
  }
});

const scrollToSection = (event: MouseEvent, id: string) => {
  event.preventDefault();

  const customEvent = new CustomEvent('navigateToSection', { detail: { sectionId: id } });
  window.dispatchEvent(customEvent);

  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};
const props = defineProps({
  currentSectionIndex: {
    type: Number,
    required: true,
  }
});

const isDeepScrolled = computed(() => props.currentSectionIndex > 0);

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
        <a href="#" @click.prevent="scrollToSection($event, 'hero')" class="brand-name">FADAKAR</a>
      </div>
      
      <nav class="header-right desktop-nav">
        <ul class="nav-links">
          <li><a @click="scrollToSection($event, 'hero')" href="#hero">Home</a></li>
          <li><a @click="scrollToSection($event, 'about')" href="#about">About</a></li>
          <li><a @click="scrollToSection($event, 'skills')" href="#skills">Skills</a></li>
          <li><a @click="scrollToSection($event, 'projects')" href="#projects">Projects</a></li>
          <li><a @click="scrollToSection($event, 'contact')" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button class="hamburger-button" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
    </div>

    <div class="mobile-menu-panel">
        <nav>
            <ul class="mobile-nav-links">
              <li><a @click="scrollToSection($event, 'hero')" href="#hero">Home</a></li>
              <li><a @click="scrollToSection($event, 'about')" href="#about">About</a></li>
              <li><a @click="scrollToSection($event, 'skills')" href="#skills">Skills</a></li>
              <li><a @click="scrollToSection($event, 'projects')" href="#projects">Projects</a></li>
              <li><a @click="scrollToSection($event, 'contact')" href="#contact">Contact</a></li>
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
</style>