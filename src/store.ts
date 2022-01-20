import { createStore } from "vuex";
import axios from "axios";
import { strapi } from './main';

export const store = createStore({
	state: {
		sidebarOpen: false,
		accounts: {
			loggedIn: false,
		},
		language: "en",
	},
	mutations: {
		toggleSidebar(state) {
			state.sidebarOpen = !state.sidebarOpen;
		},
		login(state, user) {
			state.accounts.loggedIn = true;
		},
		logout(state) {
			state.accounts.loggedIn = false;
		},
	},
	getters: {
		getUser(state) {
			if (state.accounts.loggedIn) {
				return strapi.user;
			} else {
				return {
					username: "Guest",
					image: "https://cdn.bergflix.de/logo/light_bg.png",
				};
			}
		},
		getLanguage(state) {
			return state.language;
		},
	},
});
