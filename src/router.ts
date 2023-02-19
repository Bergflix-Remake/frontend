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

// Change this variable to lock/unlock the site for users without admin or patreon status.
const lockdown = false

router.beforeEach((to, from) => {
	// Check requiresAuth
	if (to.meta.requiresAuth) {
		console.debug("Route requiresAuth, checking authentication:", strapi.user)
		if (!strapi.user){
			return {
				name: "login",
				query: { redirect: to.fullPath, message: "Bitte melde dich an um diese Seite anzusehen." },
			}
		}
	}
	if (lockdown) {
		if (!strapi.user?.admin && !strapi.user?.patreon) {	
			return {
				name: "login",
				query: { redirect: to.fullPath, message: "Bitte Melde dich mit deinem Patreon- oder Administratoraccount an, um diese Seite anzusehen." },
			}
		}
	} 
})