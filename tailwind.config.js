/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Oswald', 'sans-serif'],
      },
      colors: {
        bgk: '#ece7e1',
      },
    },
  },
  plugins: [],
};
