/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#30e87a",
        "background-dark": "#111814",
        "surface-dark": "#1E2923",
      },
    },
  },
  plugins: [],
};
