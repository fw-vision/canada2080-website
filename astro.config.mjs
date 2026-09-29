import { defineConfig } from 'astro/config';

// @ts-check
export default defineConfig({
  site: 'https://canada2080.org',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  vite: {
    optimizeDeps: {
      // Keep the card PNG exporter available in `astro dev`. Without this,
      // Vite can omit the prebundle and the page script fails to load, so
      // Download PNG buttons never attach.
      include: ['html-to-image'],
    },
  },
});
