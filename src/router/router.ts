import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../pages/Home.vue");
const Media = () => import("../pages/Media.vue");
const Watch = () => import("../pages/Watch.vue");
const NotFound = () => import("../pages/404.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home, name: "Home" },
	{ path: "/media/:id", component: Media, name: "Info" },
	{ path: "/watch", redirect: "/library" },
	{ path: "/watch/:id", component: Watch, name: "Watch" },
	{ path: "/:pathMatch(.*)*", component: NotFound, name: "404" },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
