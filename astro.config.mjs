import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";


import vercel from '@astrojs/vercel';


export default defineConfig({
  vite: {
   plugins: [tailwindcss()],
   server: {
    allowedHosts: true
   }
 },

  site: 'https://yourdomain.com',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  
});