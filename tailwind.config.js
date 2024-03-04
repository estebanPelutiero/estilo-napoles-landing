const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: '#009247',
      red: '#B42129',
      white: '#FFFFFF',
      blue: '#73ADDD',
      black: '#24272B',
      gray: '#84898D'
    },  

    extend: {},
  },
  plugins: [],
});

