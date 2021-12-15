import { createStore } from "vuex";

export const store = createStore({
	state: {
		sidebarOpen: false,
	},
	mutations: {
		toggleSidebar(state) {
			state.sidebarOpen = !state.sidebarOpen;
		},
	},
});
