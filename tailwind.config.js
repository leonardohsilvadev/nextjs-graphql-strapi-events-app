const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        body: colors.blueGray['100'],
        gray: colors.blueGray,
        primary: colors['indigo'],
        secondary: colors['teal'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
