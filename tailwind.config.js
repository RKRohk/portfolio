module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        900:"#1A202C"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
