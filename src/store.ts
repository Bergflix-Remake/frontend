import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
	state: {
		sidebarOpen: false,
		accounts: {
			loggedIn: false,
			user: {},
		},
		language: "en",
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
			localStorage.removeItem("token");
			state.accounts.user = {};
		},
	},
	getters: {
		getUser(state) {
			if (state.accounts.loggedIn && state.accounts.user != {}) {
				console.log("Logging in from cache");
				return state.accounts.user;
			} else {
				if (localStorage.getItem("token")) {
					axios
						.get("https://api.bergflix.de/api/users/me", {
							headers: {
								Authorization:
									"Bearer " + localStorage.getItem("token"),
							},
						})
						.then((response) => {
							console.log("User logged in from getter:", response.data);
							store.commit("login", response.data);
							return response.data;
						})
						.catch((error) => {
							console.log(error);
						});
				}
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
