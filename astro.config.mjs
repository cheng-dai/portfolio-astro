import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";


import vercel from '@astrojs/vercel';


import icon from 'astro-icon';


export default defineConfig({
  vite: {
   plugins: [tailwindcss()],
   server: {
    allowedHosts: true
   }
 },

  
  integrations: [sitemap(), icon()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  
});