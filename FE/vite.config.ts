import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_BASE_URL = env.VITE_API_BASE_URL;

  return {
  plugins: [react(), tailwindcss()],
  base: '/Delta-Transport/',
  server: {
    proxy: {
      "/api": {
        target: API_BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
  }
})

