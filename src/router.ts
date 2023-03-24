import { createRouter, createWebHistory } from "vue-router";
import r from '~pages'
import { strapi } from "./main";
import { isReleased } from "./util/locked";

const routes = [
	...r,
]

console.debug(routes)

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// always scroll to top
		return { top: 0 }
	},
});

router.beforeEach((to) => {
	if (to.meta.requiresAuth) {
		console.debug("Route requiresAuth, checking authentication:", strapi.user)
		if (!strapi.user) {
			return {
				name: "login",
				query: { redirect: to.fullPath, message: "Bitte melde dich an um diese Seite anzusehen." },
			}
		}
	}
	if (!isReleased && !['/', '/legal'].includes(to.fullPath)) {
		return {
			path: "/",
		}
	}
	if (to.path === "/" && isReleased) {
		return {
			path: "/home",
		}
	}
})