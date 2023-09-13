/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cover-image': "url('./src/images/icecover.jpg')",
       
      }
    },
  },
  plugins: [],
}

