// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pricesaparketa.netlify.app',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '',
        },
      },
    },
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['/node_modules/'],
          },
        },
      },
    },
  },
});
