import './assets/styles/main.css'
import 'uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@unocss/reset/tailwind.css'
import App from './App.vue'
import i18n from './i18n'
import rippleDirective from '../v-ripple';

const app = createApp(App)

app.directive('ripple', rippleDirective);
app.use(createPinia())
app.use(i18n)
app.mount('#app')

// فقط preloader را حذف می‌کند (اگر وجود داشته باشد)
const preloader = document.getElementById('app-preloader')
if (preloader) {
  preloader.classList.add('hidden')
}