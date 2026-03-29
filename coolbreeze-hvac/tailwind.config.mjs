/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       '#1E6CB8',
          'blue-dark':'#155A9C',
          'blue-light':'#3B82C9',
          orange:     '#F5A623',
          'orange-dark':'#E09010',
          navy:       '#0A2540',
          'navy-light':'#0D3060',
          light:      '#EBF4FF',
          gray:       '#F7F8FA',
          'warm-gray':'#F9F7F4',
        },
        success: '#16A34A',
        warning: '#F59E0B',
        error:   '#DC2626',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':       ['3.75rem', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.02em' }],
        'hero-sm':    ['2.75rem', { lineHeight: '1.1',  fontWeight: '800', letterSpacing: '-0.01em' }],
        'display':    ['3rem',    { lineHeight: '1.1',  fontWeight: '800', letterSpacing: '-0.015em' }],
        'section':    ['2.25rem', { lineHeight: '1.15', fontWeight: '800' }],
        'card-title': ['1.25rem', { lineHeight: '1.3',  fontWeight: '700' }],
        'label':      ['0.75rem', { lineHeight: '1.4',  fontWeight: '600', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'card':    '1rem',
        'button':  '0.625rem',
        'badge':   '9999px',
        'section': '1.5rem',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(10,37,64,0.06), 0 1px 2px rgba(10,37,64,0.04)',
        'card-hover': '0 10px 25px rgba(10,37,64,0.08), 0 4px 10px rgba(10,37,64,0.04)',
        'card-lifted':'0 20px 40px rgba(10,37,64,0.1)',
        'cta':        '0 4px 14px rgba(245,166,35,0.4)',
        'cta-hover':  '0 6px 20px rgba(245,166,35,0.5)',
        'nav':        '0 4px 20px rgba(10,37,64,0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.6s ease both',
        'fade-in':     'fade-in 0.6s ease both',
        'slide-left':  'slide-left 0.6s ease both',
        'slide-right': 'slide-right 0.6s ease both',
        'bounce-subtle':'bounce-subtle 2s ease-in-out infinite',
        'pulse-soft':  'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
