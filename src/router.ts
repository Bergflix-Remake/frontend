import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Out from "./pages/Out.vue";
import Branding from "./pages/Branding.vue";

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/login", redirect: "/home"},
	{ path: "/out/:link(.*)", component: Out },
	{ path: "/branding", component: Branding },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// 27:05