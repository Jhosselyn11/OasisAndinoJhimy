/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        'primaryy':"#657A38",
        'secondary':"#8FA206",
        'tertiary':"#61AEC9",
      },
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        Montserrat: ["Montserrat", "sans-serif"],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'sanFrancisco': "url('./img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('./img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('./img/LA.jpg')",
			  'seattle': "url('img/seattle.jpg')",
			  'new_york': "url('./src/img/new_york.jpg')",
			  'norway': "url('src/img/norway.jpg')",
			  'sydney': "url('../src/img/sydney.jpg')",
			  'miami': "url('/src/img/miami.jpg')",
			  'switzerland': "url('/src/img/switzerland.jpg')",
			  'bali': "url('/src/img/bali.jpg')",
			  'norway': "url('/src/img/norway.jpg')",
			  'chicago': "url('/src/img/chicago.jpg')",
			  'europe': "url('/src/img/europe.jpg')",
			  'iceland': "url('/src/img/iceland.jpg')",
      },
      fontSize:{
        'xl-plus': '75px',
        '2xl-plus':'88px', // Personaliza el tamaño del texto a 1.25rem

      },
      height:{
        'jhimy': '77%',

      },
      screens: {
        'xs': {'max': '640px'}, // Nueva pantalla personalizada
      },
      
    },
  },
  plugins: [],
}

