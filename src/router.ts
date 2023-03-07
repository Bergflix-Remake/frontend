import { createRouter, createWebHistory } from "vue-router";
import r from '~pages'
import { strapi, useResendEmailMutation } from "./main";

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
	if (to.meta.requiresAuth) {
		console.debug("Route requiresAuth, checking authentication:", strapi.user)
		if (!strapi.user){
			return {
				name: "login",
				query: { redirect: to.fullPath, message: "Bitte melde dich an um diese Seite anzusehen." },
			}
		}
	}
})