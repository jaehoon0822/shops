/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        DEFAULT: 'black',
        primaryGray: '#555555',
        primaryRed: '#F65656',
        secondary: 'white',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    '@tailwindcss/typography',
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}
