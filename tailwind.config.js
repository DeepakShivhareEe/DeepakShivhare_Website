/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neonCyan: '#00f5ff',
        neonPurple: '#a855f7',
        background: {
          light: '#0f172a',
          dark: '#020617',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.45)',
        glow: '0 0 30px rgba(0,245,255,0.35)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
