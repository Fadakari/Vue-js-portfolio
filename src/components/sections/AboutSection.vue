
<template>
  <section id="about" class="about-section">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="content-wrapper">
          <div class="profile-image-container">
            <img :src="profileImage" alt="Your Name" class="profile-image">
          </div>
          <div class="about-text-content">
             <p class="about-me-text">
              Hello! I'm a passionate Full-Stack Developer driven by a core belief: that the most powerful digital experiences are born from the intersection of modern aesthetics and intuitive design. My journey into programming was sparked by a fascination with transforming complex ideas into clean, user-centric web applications that people genuinely enjoy using.
            </p>
            <p class="about-me-text">
              My philosophy centers on a dual commitment to elegance and precision. I believe in crafting UI/UX that is not only visually striking but also exceptionally clear and accessible. This principle is matched by my dedication to technical excellence; I take a meticulous approach to development, striving to deliver robust, pixel-perfect, and reliable products through rigorous testing and a deep commitment to quality assurance.
            </p>
            <p class="about-me-text">
              Specializing in the Vue.js ecosystem and Python, I architect seamless, full-featured applications. I thrive on complex problem-solving, often entering a state of deep focus or "flow," where I can fully immerse myself in a challenge to deliver elegant and efficient solutions. I see code not just as a set of instructions, but as a craft.
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
/* ریسپانسیو */
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