/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'yellow-poke-500': '#ffcb05',
        'yellow-poke-700': '#c7a008' 
      }
    },
  },
  plugins: [],
}
