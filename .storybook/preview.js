import "../src/index.css";
import "../src/three-dots.css"
import "../src/assets/font.css"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
}

import { app } from "@storybook/vue3";
import { VueQueryPlugin } from 'vue-query';

app.use(VueQueryPlugin)
