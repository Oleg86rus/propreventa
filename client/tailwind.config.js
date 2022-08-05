/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'amber': '0 20px 20px rgba(231, 184, 177, 0.75)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        'mainMenu': '#BD7048',
        'footerBG': '#BC3A27'
      },
      keyframes: {
        translate: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-7px)' }
        },
        translateOff: {
          '0%': { transform: 'translateY(-7px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'card-up': 'translate 0.3s forwards',
        'card-down': 'translateOff 0.3s forwards'
      }
    },
  },
  plugins: [],
};
