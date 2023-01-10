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
	if (to.meta.requiresAuth) {
		console.debug("Route requires auth, Current user: ", strapi.user)
		if (!strapi.user){
			return {
				name: "login",
				query: { redirect: to.fullPath },
			}
		}
	}
})