import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zingcontrol.github.io',
  base: '/Website-Intake-Framework/coolbreeze-hvac',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
});
