import './assets/styles/main.css'
import 'uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@unocss/reset/tailwind.css'
import App from './App.vue'
import rippleDirective from '../v-ripple';

const app = createApp(App)

app.directive('ripple', rippleDirective);

app.use(createPinia())

app.mount('#app')

const preloader = document.getElementById('app-preloader')
if (preloader) {
  preloader.classList.add('hidden')
}