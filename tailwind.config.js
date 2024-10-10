/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
      colors: {
        'primary-theme-color': "#1c1b1c",
        'white': "#EFEBE0",
        'gray-border': '#D9DDDC',
        'purple-1': "#cc2b5e",
        'purple-2': "#753a88",
        'normal-white': '#FFFFFF'
      },

    },
    

  },
  plugins: [
    require('tailwindcss-gradients'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    transform: true, // Enable transform utilities
  },
}

