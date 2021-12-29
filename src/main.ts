import { createApp } from 'vue'
import App from './App.vue'
import './assets/font/stylesheet.css'
import './index.css'
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from './router';
import { store } from './store';
import Markdown from 'vue3-markdown-it'

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
