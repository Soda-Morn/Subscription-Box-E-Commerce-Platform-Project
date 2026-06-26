import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ = src folder — use @/components/Foo.vue instead of ../../components/Foo.vue
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
