import { createApp, reactive } from 'vue'
import App from './App.vue'
import './assets/font/stylesheet.css'
import './index.css'
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from './router';
import { store } from './store';
import Markdown from 'vue3-markdown-it'
import { VueQueryPlugin, useQuery, UseQueryOptions } from "vue-query";
import './three-dots.css'


const app = createApp(App);

// App.use thingys
app.use(VuePlyr, {
  plyr: {}
});
app.use(router)
app.use(store)

import Strapi from "strapi-sdk-js";
import { QueryKey } from 'react-query/types/core';

export const strapi = new Strapi({
	store: {
		key: "strapi_jwt",
		useLocalStorage: false,
		cookieOptions: { path: "/" },
  },
  url: "https://api.bergflix.de/",
  prefix: "/api"
});

const useStrapiQuery = ({ queryKey }: any) => {
	return strapi
		.find(queryKey[0], queryKey[1] ? queryKey[1] : {})
		.then((res) => {
			return res.data;
		});
};

export const useStrapi = (
	queryKey: any,
	options?: Omit<
		UseQueryOptions<unknown, unknown, unknown, QueryKey>,
		"queryFn" | "queryKey"
	>
) => {
	return reactive(useQuery(queryKey, useStrapiQuery, options));
};

export const getUser = () => {
    return reactive(useQuery("user", () => strapi.fetchUser()))
}

strapi.fetchUser().then(user => {
  if (user) {
    store.commit("login");
  }
})

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

app.use(Markdown);

app.use(VueQueryPlugin);

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