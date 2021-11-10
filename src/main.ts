import { createApp } from "vue";
import App from "./App.vue";
// import VuePlyr from "vue-plyr";
// import "vue-plyr/dist/vue-plyr.css";
import router from "./router/router";

const app = createApp(App);
app.use(router);
// app.use(VuePlyr, {
// 	plyr: {},
// });

app.mount("#app");

// Language: typescript
// when the document is ready, get the "dark" element from LocalStorage.
// if it exists, add the "dark" class to the body.
// if it doesn't exist, remove the "dark" class from the body.
document.addEventListener("DOMContentLoaded", () => {
  const dark = localStorage.getItem("dark");
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
