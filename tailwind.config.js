/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      outfit: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#373BD7',
        primaryLight: '#5C4EFF',
        secondary: '#FAB110',
        background: '#F2EFE8',
        gradient: 'linear-gradient(95deg, rgba(0, 65, 55, 0.80) -4.38%, #FAB110 -4.38%, #373BD7 103.95%);'
      },
    },
  },
  plugins: [],
}