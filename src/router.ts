import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Out from "./pages/Out.vue";
import Branding from "./pages/Branding.vue";
import Register from "./pages/Register.vue";
import About from "./pages/About.vue";

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/login", redirect: "/home"},
	{ path: "/out/:link(.*)", component: Out },
	{ path: "/branding", component: Branding },
	{ path: "/register", component: Register },
	{ path: "/about", component: About },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// 27:05