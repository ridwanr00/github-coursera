import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/ridwanr00/github-coursera.git",
  plugins: [react()],
})
