import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sutric.co',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
