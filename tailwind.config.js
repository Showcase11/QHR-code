/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Microbe", "cursive"],
        rubikD: ["Rubik Distressed", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
