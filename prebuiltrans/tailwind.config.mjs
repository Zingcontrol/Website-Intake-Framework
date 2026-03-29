/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          steel: '#1B2838',
          'steel-light': '#2A3A4A',
          orange: '#E86B00',
          'orange-dark': '#C55A00',
          'orange-light': '#FF8C2A',
          silver: '#A8B2BC',
          light: '#F5F6F7',
          gray: '#F0F1F3',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
