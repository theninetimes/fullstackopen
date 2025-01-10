import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 目标后端服务器的地址
        changeOrigin: true, // 是否改变请求的源地址
      },
    },
  },
  plugins: [react()]
});