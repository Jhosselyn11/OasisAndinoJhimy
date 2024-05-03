/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary':"#D8B47A",
        'secondary':"#8FA206",
        'tertiary':"#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
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
    },
  },
  plugins: [],
}

