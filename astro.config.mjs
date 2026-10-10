import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://docs.fajjjar.my.id',
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
