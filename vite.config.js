import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/macros/s/AKfycbxH3Zt9HG4vgG8Hfk51DDEAELN5iH-YsudfTPyLbKRt9Yrw8iEZlIJsf2ipVpPKC2_e/exec')
      }
    }
  }
});