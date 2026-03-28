/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#1E6CB8',
          orange: '#F5A623',
          navy:   '#0A2540',
          light:  '#EBF4FF',
          gray:   '#F7F8FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.25rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
};
