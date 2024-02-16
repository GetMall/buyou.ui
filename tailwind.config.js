/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC401',
        secundary: '#692fa3',
        white_opacity: '#F7F7F7',
        dark_primary: '#642fb0',
        b_gray: '#E0E0E0',
        btn_orange: '#B51BF2',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}