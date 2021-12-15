import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Out from "./pages/Out.vue";

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/out/:link(.*)", component: Out },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
