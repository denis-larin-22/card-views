/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bcg': "url('../../public/assets/images/main-bcg.jpg')",
      },
      colors: {
        'white-0.1': 'rgba(255, 255, 255, 0.1)',
        'white-0.2': 'rgba(255, 255, 255, 0.2)',
        'white-0.6': 'rgba(255, 255, 255, 0.6)',
      },
      transitionTimingFunction: {
        'transition-slow':  'transition: ease 1s'
      },
      screens: {
        exsm: '576px',
        md: '940px'
      },
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        '2xl': '1280px'
      },
    },
    fontSize: {
      cardText: ['17px', '22px'],
      'cardNav-md': ['17px', '23px'],
      'cardNav-sm': ['13px', '15px'],
      cardBtn: ['20px', '22px'],
    },
  },
  plugins: [],
}

