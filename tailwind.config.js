/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#559EA8',
        white_opacity: '#F7F7F7',
        dark_primary: '#498A93',
        b_gray: '#E0E0E0',
        btn_orange: '#FF530B',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}