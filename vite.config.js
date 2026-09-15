import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Change this to match your GitHub Pages repo name, e.g. '/Portfolio/'
  base: "/Portfolio/",
  plugins: [react()],
})
