import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("./stories/pages/Home/Home.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
