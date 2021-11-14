import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../pages/Home.vue");
const Library = () => import("../pages/Library.vue");
const Watch = () => import("../pages/Watch.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home, name: "Home" },
	{ path: "/library/", component: Library, name: "Library" },
	{ path: "/watch/:id", component: Library, name: "Library" },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
