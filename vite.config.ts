import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path: relative './' works for ANY repository name on GitHub Pages.
// To force an absolute path, set VITE_BASE_PATH=/YOUR_REPOSITORY/ when building.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    base: env.VITE_BASE_PATH || '/profile/',
    plugins: [react(), tailwindcss()],
    build: { chunkSizeWarningLimit: 1200, rollupOptions: { output: { manualChunks: { three: ['three', '@react-three/fiber', '@react-three/drei'] } } } },
  }
})
