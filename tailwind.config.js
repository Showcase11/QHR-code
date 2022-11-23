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
  },
  plugins: [],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
