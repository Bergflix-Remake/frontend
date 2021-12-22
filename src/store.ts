import { createStore } from "vuex";

export const store = createStore({
	state: {
		sidebarOpen: false,
		accounts: {
			loggedIn: false,
			user: {}
		}
	},
	mutations: {
		toggleSidebar(state) {
			state.sidebarOpen = !state.sidebarOpen;
		},
		login(state, user) {
			state.accounts.loggedIn = true;
			state.accounts.user = user;
		},
		logout(state) {
			state.accounts.loggedIn = false;
			state.accounts.user = {};
		}
	},
	getters: {
		getUser(state) {
			if (state.accounts.loggedIn && state.accounts.user != {}) {
				return state.accounts.user;
			} else {
				return {
					name: "Guest",
					image: "https://cdn.bergflix.de/logo/light_bg.png",
				};
			}
		}
	}
});
