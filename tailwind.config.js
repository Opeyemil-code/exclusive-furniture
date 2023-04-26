/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        darkblue: '#112B3C',
        orange: '#F66B0E',
        whit: '#FFF8F0',
      },
      fontFamily:{
        Inter:['Inter', 'sans-serif'],
        Poppins:['Poppins, sans-serif'],
        Rochester:['Rochester', 'cursive'],
        Roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

