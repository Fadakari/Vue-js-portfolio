<template>
  <section id="contact" class="contact-section">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">Get in Touch</h2>
        <p class="section-subtitle anim-stagger">
          I'm always open to discussing new projects or partnership opportunities. Feel free to send me a message.
        </p>
        
        <div class="contact-wrapper anim-stagger">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" id="name" name="name" required placeholder="Your Name">
              <label for="name">Your Name</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" required placeholder="Your Email">
              <label for="email">Your Email</label>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
              <label for="message">Your Message</label>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>

          <div class="contact-info">
            <div class="info-item">
              <h3 class="info-title">Email Me</h3>
              <a href="mailto:hoseni.erfan85@gmail.com" class="info-link">hoseni.erfan85@gmail.com</a>
            </div>
            <div class="info-item">
              <h3 class="info-title">Let's Connect</h3>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/erfan-fadakar-207a03320" target="_blank" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.16 3.1 3.99z"></path></svg>
                </a>
                <a href="https://github.com/Fadakari" target="_blank" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"></path></svg>
                </a>
              </div>
            </div>
            <div class="info-item">
              <h3 class="info-title">Phone Number</h3>
              <a href="mailto:your-email@example.com" class="info-link">+98 991 068 9541</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleSubmit = (event: Event) => {
  alert('Thank you for your message! I will get back to you soon.');
  (event.target as HTMLFormElement).reset();
};
</script>

<style scoped>
/*
.contact-section {
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 7rem;
  padding-bottom: 7rem;
}
*/

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
  width: 100%;
  text-align: center;
  margin: auto;
}

.section-title {
  font-size: 2.8rem;
  color: white;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto 3rem auto;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  background-color: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  text-align: left;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  position: relative;
  margin-bottom: 2rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 0;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.form-group textarea {
  resize: none;
}

.form-group label {
  position: absolute;
  top: 0.75rem;
  left: 0;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  pointer-events: none;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -1rem;
  font-size: 0.8rem;
  color: #7dd3fc;
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: #7dd3fc;
}

.submit-button {
  background-color: #38bdf8;
  color: #020617;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  align-self: flex-start;
}

.submit-button:hover {
  background-color: #7dd3fc;
  transform: translateY(-3px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.info-title {
  color: #7dd3fc;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  word-break: break-all;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  color: #cbd5e1;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #7dd3fc;
  transform: scale(1.1);
}

@media (max-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  .contact-info {
    border-left: none;
    padding-left: 0;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 2rem;
  }
}
</style>
