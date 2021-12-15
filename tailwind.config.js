const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FF0230',
        'nice-red': '#FF0230',
        'clean-white': '#FFFFFF',
        'darkest-dark': '#000000',
        'clean-dark': '#111111',
        'delorean': '#6B6B6B',
        'concrete': '#989898',
        'gray': colors.neutral
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
    ],
  }
};
