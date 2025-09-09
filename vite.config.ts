import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/Vue-js-portfolio/',
  plugins: [
    vue(),
    vueDevTools(),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          collections: {
            mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
          }
        }),
      ]
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
