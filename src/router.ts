import { createRouter, createWebHistory } from "vue-router";
import r from '~pages'

const routes = [
	...r,
	{ path: "/", redirect: "/home"},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
