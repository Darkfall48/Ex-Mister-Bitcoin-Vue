//? Libraries
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Ex-Mister-Bitcoin/',
  //? For Backend
  // build: {
  //   outDir: '../backend/public',
  //   emptyOutDir: true,
  //   assestsDir: './dist',
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
