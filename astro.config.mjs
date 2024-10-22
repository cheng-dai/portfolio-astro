import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
   vite: {
    plugins: [tailwindcss()],
  },
   site: 'https://yourdomain.com',
  integrations: [sitemap()]
});