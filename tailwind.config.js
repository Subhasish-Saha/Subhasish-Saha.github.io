module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          100 : '#020617',
          200 : '#020617',
          300 : '#020617'
        },
        secondary: {
          100: '#020617',
          200: '#020617', 
        } 
      },
      // backgroundImage: {
      //   'hero-pattern': "url('./static/back.png')",
      // },
      fontFamily: {
        body: ['Hind'],
        head: ['Montserrat'],
        // special: ['Sacramento']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
