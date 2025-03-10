// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brandRed: '#ff0000',
        brandBlue: '#252de6',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};