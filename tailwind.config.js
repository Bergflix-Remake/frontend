const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffccd6",
          200: "#ff9aac",
          300: "#ff6783",
          400: "#ff3559",
          500: "#ff0230",
          600: "#cc0226",
          700: "#99011d",
          800: "#660113",
          900: "#33000a"
        },
        // 'primary': '#FF0230',
        // 'nice-red': '#FF0230',
        'clean-white': '#FFFFFF',
        'darkest-dark': '#000000',
        // 'clean-dark': '#111111',
        'clean-dark': {
          100: "#cfcfcf",
          200: "#a0a0a0",
          300: "#707070",
          400: "#414141",
          500: "#111111",
          600: "#0e0e0e",
          700: "#0a0a0a",
          800: "#070707",
          900: "#030303"
},
        // 'delorean': '#6B6B6B',
        delorean: {
          100: "#e1e1e1",
          200: "#c4c4c4",
          300: "#a6a6a6",
          400: "#898989",
          500: "#6b6b6b",
          600: "#565656",
          700: "#404040",
          800: "#2b2b2b",
          900: "#151515"
},
        // 'concrete': '#989898',
        concrete: {
          100: "#eaeaea",
          200: "#d6d6d6",
          300: "#c1c1c1",
          400: "#adadad",
          500: "#989898",
          600: "#7a7a7a",
          700: "#5b5b5b",
          800: "#3d3d3d",
          900: "#1e1e1e"
},
        gray: colors.neutral
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans']
      },
      transitionProperty: {
        'border': 'border-width, border-bottom-width, border-left-width, border-right-width, border-top-width',
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
    ],
  },
  safelist: [{
    pattern: /(bg|border|text)-.+-(500|400)/,
    variants: ['hover']
  }],
};
