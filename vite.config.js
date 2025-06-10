import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'pwa-192x192.png', 'pwa-512x512.png'],
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      //   maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,  // Increase file size limit to 15MB
      // },
      manifest: {
        name: 'My Vite React App',
        short_name: 'ViteApp',
        description: 'A Vite + React PWA!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/'
      },
    }),
  ],
});
