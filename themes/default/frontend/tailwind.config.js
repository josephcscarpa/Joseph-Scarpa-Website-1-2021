module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
          'main-sans': ['Roboto', 'sans-serif'],
        },
        colors: {
          'regal-blue': {
            100: '#cdd5d9',
            200: '#b3bfc7',
            300: '#9aaab4',
            400: '#8195a1',
            500: '#68808e',
            600: '#4f6b7b',
            700: '#355569',
            800: '#1c4056',
            900: '#032b43',
          },
          'spritely-teal': {
            100: '#d6fbdb',
            200: '#cefad3',
            300: '#c6f9cc',
            400: '#bdf9c5',
            500: '#b5f8bd',
            600: '#adf7b6',
            700: '#9cdea4',
            800: '#8ac692',
            900: '#79ad7f',
          },
          'misty-lavender': {
            100: '#d4d6e2',
            200: '#cdcfdd',
            300: '#c6c8d9',
            400: '#bfc1d4',
            500: '#b8bacf',
            600: '#a6a7ba',
            700: '#9395a6',
            800: '#818291',
            900: '#6e707c',
          },
        },
        
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}