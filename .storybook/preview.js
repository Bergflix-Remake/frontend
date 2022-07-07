import "../src/index.css";
import "../src/three-dots.css"
import "../src/assets/font/stylesheet.css"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}