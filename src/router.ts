import { createRouter, createWebHistory } from "vue-router";
import r from '~pages'

console.log(r)

const routes = [
	...r,
	{ path: "/", redirect: "/home"},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
