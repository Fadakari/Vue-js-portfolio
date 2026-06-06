<template>
  <section id="contact" class="contact-section" :class="{ 'rtl-mode': locale === 'fa' }">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle anim-stagger">{{ $t('contact.subtitle') }}</p>
        
        <div class="contact-wrapper anim-stagger centered-contact">
          <div class="contact-info">
            <div class="info-item">
              <h3 class="info-title">{{ $t('contact.email_me') }}</h3>
              <a href="mailto:hoseni.erfan85@gmail.com" class="info-link">hoseni.erfan85@gmail.com</a>
            </div>
            
            <div class="info-item">
              <h3 class="info-title">{{ $t('contact.phone') }}</h3>
              <a href="tel:+989228192173" class="info-link">+989228192173</a>
            </div>
            
            <div class="info-item">
              <h3 class="info-title">{{ $t('contact.connect') }}</h3>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/erfan-fadakar-207a03320/" target="_blank" class="social-icon" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/Fadakari" target="_blank" class="social-icon" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://t.me/THE_FADAKAR" target="_blank" class="social-icon" title="Telegram">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/phadakary" target="_blank" class="social-icon" title="Instagram">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
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
import { useI18n } from 'vue-i18n';

// دریافت زبان فعلی سایت
const { locale } = useI18n();
</script>

<style scoped>
.section-content {
  width: 100%;
  padding: 8rem 2rem;
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 4rem auto;
}

.centered-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 41, 59, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  width: 100%;
}

.info-title {
  color: #7dd3fc;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.info-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  word-break: break-all;
  transition: color 0.3s;
}

.info-link:hover {
  color: #38bdf8;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.social-icon {
  color: #cbd5e1;
  transition: color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: #7dd3fc;
  transform: scale(1.15) translateY(-2px);
}

@media (max-width: 768px) {
  .centered-contact {
    padding: 2rem;
  }
}

/* ========================================= */
/* تنظیمات ۱۰۰٪ مطمئن برای حالت راست‌چین (فارسی) */
/* ========================================= */
.rtl-mode .contact-info {
  text-align: center; /* چون در مرکز است، در فارسی هم وسط چین بماند زیباتر است */
}
</style>