module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      blue: {
        dark: '#45A29E',
        light: '#66FCF1'
      },
      dark: {
        dark: '#0B0C10',
        light: '#1F2833'
      },
      gray: '#C5C6C7'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
