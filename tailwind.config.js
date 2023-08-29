/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        'purple-1': "#cc2b5e",
        'purple-2': "#753a88",
      }),
      
    },
    theme: {
      colors: {
        "primary-theme-color": "#1c1b1c",
        "white": "#EFEBE0",
      },
     
    }
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

