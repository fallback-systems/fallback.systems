import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
      server: {
      allowedHosts: ['fallback.systems', '.fallback.systems'],
    }
  },
  site: "https://fallback.systems",
  server: {
    host: '127.0.0.1',
    port: 4321
  },
  devToolbar: {
    enabled: false
  },
  compressHTML: true,
  integrations: [sitemap()]
});
