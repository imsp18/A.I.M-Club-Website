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
        background: '#F2EFE8'
      },
    },
  },
  plugins: [],
}