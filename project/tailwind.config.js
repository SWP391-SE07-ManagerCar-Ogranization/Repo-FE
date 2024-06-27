/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'parallax': 'url("D:/fpt/SWP/fcar/front-end/project/src/assets/images/car1.png")'
      }
    },
  },
  plugins: [],
})