/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Dark neutral background
        surface: '#121212', // Slightly lighter for cards
        primary: '#00ffff', // Cyan accent (default from thought process)
        secondary: '#ff00ff', // Magenta accent (backup/secondary)
        text: '#f3f4f6', // Off-white for readability
        muted: '#9ca3af', // Gray for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional sans-serif
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
