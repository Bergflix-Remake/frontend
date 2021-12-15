import { createApp } from 'vue'
import App from './App.vue'
import './assets/font/stylesheet.css'
import './index.css'
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from './router';
import { store } from './store';

const app = createApp(App);

// App.use thingys
app.use(VuePlyr, {
  plyr: {}
});
app.use(router)
app.use(store)

app.mount('#app')
