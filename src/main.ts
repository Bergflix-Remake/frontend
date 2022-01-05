import { createApp } from 'vue'
import App from './App.vue'
import './assets/font/stylesheet.css'
import './index.css'
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from './router';
import { store } from './store';
import Markdown from 'vue3-markdown-it'
import axios from 'axios';

const app = createApp(App);

// App.use thingys
app.use(VuePlyr, {
  plyr: {}
});
app.use(router)
app.use(store)

// Global Functions
const loginDebug = (name?: any, image?: any) => {
  store.commit("login", {
		name: name ? name : "Test",
		image: image ? image : "https://picsum.photos/200",
  });
}
const logoutDebug = () => {
  store.commit('logout');
}

const getUserDebug = () => {
  return store.getters.getUser;
}

app.use(Markdown)

app.mount('#app')

declare global {
  interface Window {
    DebugNamespace: any;
  }
}

window.DebugNamespace = window.DebugNamespace || {};
window.DebugNamespace.login = loginDebug;
window.DebugNamespace.logout = logoutDebug;
window.DebugNamespace.getUser = getUserDebug;

// if there is a token in localStorage, login the user
if (localStorage.getItem("token")) {
  axios
    .get('https://api.bergflix.de/api/users/me', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("User logged in:", response.data);
      store.commit("login", response.data);
    }
  )
    .catch(error => {
      console.log(error);
    });
}