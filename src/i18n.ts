import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fa from './locales/fa.json';
import ru from './locales/ru.json';

const i18n = createI18n({
  legacy: false,
  globalInjection: true, // این خط باعث می‌شود $t در تمام تمپلیت‌ها شناخته شود
  locale: localStorage.getItem('user-locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fa,
    ru
  }
});

export default i18n;