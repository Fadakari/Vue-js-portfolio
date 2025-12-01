
<template>
  <section id="about" class="about-section">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">About Me</h2>
        <div class="content-wrapper">
          <div class="profile-image-container anim-stagger">
            <img :src="profileImage" alt="Your Name" class="profile-image">
          </div>
          <div class="about-text-content">
            <p class="about-me-text anim-stagger">
              I am a Full-Stack Engineer with a relentless focus on performance and scalability. My expertise lies in crafting seamless digital experiences using <strong>Vue.js</strong> for reactive frontends and <strong>Python</strong> for powerful backend logic. I don't just write code; I engineer solutions that help businesses grow and streamline their operations.
            </p>

            <p class="about-me-text anim-stagger">
              With a strong foundation in <strong>Linux server management</strong> and <strong>database optimization</strong>, I ensure that the applications I build are not only visually striking but also robust and secure. I specialize in designing architectures that can handle scale, ensuring your digital infrastructure remains resilient as your business expands.
            </p>

            <p class="about-me-text anim-stagger">
              I treat every project as a strategic partnership, aiming for pixel-perfect implementation and long-term reliability. I thrive on complex problem-solving, dedicating myself to delivering clean, maintainable code that stands the test of time and delivers a superior user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import profileImage from '@/assets/me.jpg';
</script>
<style scoped>
.section-content {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
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
  text-align: left;
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
