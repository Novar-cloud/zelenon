import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Zelenon Docs',
      description: 'AI-driven Shopify frontend guides and Q&A',
      
    }),
  ],
});
