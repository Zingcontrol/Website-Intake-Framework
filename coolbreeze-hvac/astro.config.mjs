import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://zingcontrol.github.io',
  base: '/Website-Intake-Framework',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
