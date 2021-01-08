module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          weird:"#152945"
        },
        gray: {
          900:"#1A202C"
        }
      },
      fontFamily: {
        "yellowtail":["cursive"]
      }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
