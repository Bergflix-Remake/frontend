import { createRouter, createWebHistory } from "vue-router";
import r from '~pages'
import { strapi } from "./main";

const routes = [
	...r,
	{ path: "/", redirect: "/home" },
]

console.debug(routes)

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from) => {
	// Check authentication
	if (to.name !== "login") {
		if (!strapi.user?.admin){
			return {
				name: "login",
				query: { redirect: to.fullPath, message: "Bitte Melde dich mit deinem Patreon- oder Administratoraccount an, um diese Seite anzusehen." },
			}
		}
	}
})