import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../pages/Home.vue");
const Media = () => import("../pages/Media.vue");
const Watch = () => import("../pages/Watch.vue");
const NotFound = () => import("../pages/404.vue");
const Library = () => import("../pages/Library.vue");
const LinkOut = () => import("../pages/LinkOut.vue");
const Demo = () => import("../pages/Demo.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home, name: "Home" },
	{ path: "/media/:id", component: Media, name: "Info" },
	{ path: "/watch", redirect: "/library/movies" },
	{ path: "/watch/:id", component: Watch, name: "Watch" },
	{ path: "/library/", redirect: "/library/movies" },
	{ path: "/library/:filter", component: Library, name: "Library" },
	{ path: "/out/:link(.*)*", component: LinkOut, name: "LinkOut" },
	{ path: "/demo", component: Demo, name: "Demo" },
	{ path: "/:pathMatch(.*)*", component: NotFound, name: "404" },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
