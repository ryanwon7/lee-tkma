/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fffdea',  // pale ivory highlight
          100: '#fff5c2',
          200: '#ffeb8a',
          300: '#ffe066',
          400: '#ffd23c',  // bright gold
          500: '#ffca1a',  // vibrant accent
          600: '#f5c400',  // ← main yellow-gold (use for text-primary-600)
          700: '#d4a800',  // deeper gold, great for hover
          800: '#a87f00',  // muted bronze
          900: '#705400',  // deep gold-brown shadow
          950: '#382a00',  // almost black with gold warmth
        },
        secondary: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          50:  '#eaf2ff',
          100: '#d0e0ff',
          200: '#a6c4ff',
          300: '#7aa7ff',
          400: '#4b86ff',
          500: '#1d4ed8', // royal blue
          600: '#153fa8',
          700: '#103280',
          800: '#0b2559',
          900: '#081a3d',
        },
        card: {
          1: '#1f1f1f',
          2: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['"Bebas Neue"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};