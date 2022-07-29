import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("./stories/pages/Home/Home.vue");

const routes = [
	{ path: "/", redirect: "/home", meta: { name: "Home" } },
	{ path: "/home", component: Home, meta: { name: "Home" } },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
