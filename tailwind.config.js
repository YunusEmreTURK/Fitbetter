/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],//all html and cc files in all folders on public
  theme: {
    container: {
      center: true, // to center a container
      screens: {
        lg: '1040px',
        xl: '1040px',
        '2xl': '1040px',
      }
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7'
      },
    },
  },
  plugins: [],
}

