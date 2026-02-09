import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        border:
          "border-width, border-bottom-width, border-left-width, border-right-width, border-top-width",
      },
    },
  },
  plugins: [forms, aspectRatio, typography],
//   safelist: [
//     {
//       pattern: /(bg|border|text)-.+-(500|400)/,
//       variants: ["hover"],
//     },
//   ],
};
