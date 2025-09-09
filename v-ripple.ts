// src/directives/v-ripple.ts
import type { Directive } from 'vue';

const rippleDirective: Directive<HTMLElement> = {
  mounted(el) {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.addEventListener('click', (e: MouseEvent) => {
      const circle = document.createElement('span');
      const diameter = Math.max(el.clientWidth, el.clientHeight);
      const radius = diameter / 2;
      
      const buttonRect = el.getBoundingClientRect();

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - buttonRect.left - radius}px`;
      circle.style.top = `${e.clientY - buttonRect.top - radius}px`;
      circle.classList.add('ripple'); // شما باید استایل این کلاس را در CSS خود تعریف کنید

      el.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  }
};

export default rippleDirective;