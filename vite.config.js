import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    copyFileSync(resolve('public/404.html'), resolve('dist/404.html'))
  }
})

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5176
  }
})
