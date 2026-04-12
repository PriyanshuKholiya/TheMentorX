/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A', // Near-black for depth 
        gold: {
          DEFAULT: '#C9A84C', // Warm, champagne gold 
          light: '#E8C97A', // Hover states 
          dark: '#8B6914', // Borders, dividers 
        },
        charcoal: '#1A1A1A', // Card backgrounds 
        'mid-gray': '#555555', // Meta text 
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // Conveys heritage and trust 
        sans: ['Arial', 'Inter', 'sans-serif'], // Clean, legible body text 
      },
      maxWidth: {
        'site': '1280px', // 12-column grid max width [cite: 35]
      }
    },
  },
  plugins: [],
}