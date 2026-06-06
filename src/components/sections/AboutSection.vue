
<template>
  <section id="about" class="about-section">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">{{ $t('about.title') }}</h2>
        <div class="content-wrapper">
          <div class="profile-image-container anim-stagger">
            <img :src="profileImage" alt="Erfan Fadakar | My pictur" class="profile-image">
          </div>
          <div class="about-text-content">
            <p class="about-me-text anim-stagger">{{ $t('about.p1') }}</p>
            <p class="about-me-text anim-stagger">{{ $t('about.p2') }}</p>
            <p class="about-me-text anim-stagger">{{ $t('about.p3') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import profileImage from '@/assets/IMG_20260316_115902_768.webp';
</script>
<style scoped>
.section-content {
  width: 100%;
  box-sizing: border-box;
  padding: 8rem 2rem 4rem;
}

.section-content::-webkit-scrollbar {
  display: none;
}
.section-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.section-title {
  font-size: 2.8rem;
  color: white;
  margin-bottom: 3rem;
}
.content-wrapper {
  display: flex;
  align-items: center;
  gap: 3rem;
  text-align: start;
}
.profile-image-container {
  flex-shrink: 0;
}
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
}
.about-me-text {
  font-size: 1.1rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
  }
  .section-title {
    margin-bottom: 2rem;
  }
}
</style>
