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
      boxShadow: {
        'around': '60px 60px 60px -15px rgba(0, 0, 0, 0.3)'
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
      },
      backgroundImage: {
        'firm': 'url(\'/assets/firma.JPG\')',
      }
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
      // 'xs': {'min': '320px', 'max': '639px'},
      // 'sm': {'min': '640px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px', 'max': '1535px'},
      // '2xl': {'min': '1536px'}
    },
    container: {
      'center': true,
    }
  },
  plugins: [],
};
