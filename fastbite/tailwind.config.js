/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pacBg': "url(../img/pacbg3.png)",
      }),
    },
    backgroundRepeat: {
      'no-repeat': 'no-repeat',
    },
    backgroundSize: {
      'cover': 'cover',
    },
    fontFamily: {
      'cursive': ['Merienda', 'cursive']
    }
  },
  plugins: [],
}
