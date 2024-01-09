/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: theme => ({
      'pacBg': "url(../img/pacbg.png)",
    }),
    fontFamily: {
      'cursive': ['Merienda', 'cursive']
    }
  },
  plugins: [],
}

