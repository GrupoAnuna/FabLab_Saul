/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#30e87a',
        'background-light': '#f6f8f7',
        'background-dark': '#112117',
        'surface-dark': '#1c2620',
        'surface-light': '#ffffff',
      },
      fontFamily: {
        display: ['"Spline Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
