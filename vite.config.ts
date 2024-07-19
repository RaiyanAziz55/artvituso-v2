import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/artvituso-v2/', // This should match your repository name
  plugins: [react()],
})
