/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sora: ["Sora"],
      Volkhov: ["Volkhov"],
    },
    extend: {
      screens: {
        mobile: "340px",
        // => @media (min-width: 640px) { ... }

        desktop: "768px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1100px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "gray-300": "#999999",
        "white-700": "#F7F8FC",
        "gray-900": "#D9D9D9",
        "orange-500": "#FA7436",
        "white-500": "#FFFFFF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
        72: "72px",
        102: "102px",
      },
      boxShadow: {
        md: "6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      },
    },
  },
  plugins: [],
};
