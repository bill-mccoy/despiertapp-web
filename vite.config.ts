import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/despiertapp-web/',
  plugins: [react(), tailwindcss()],
})
