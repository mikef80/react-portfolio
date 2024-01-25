/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto']
    },
    extend: {
      colors: { "dark-grey": "#121219" },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
