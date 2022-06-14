import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("./pages/HomePage.vue");
const Out = () => import("./pages/OutPage.vue");
const Branding = () => import("./pages/BrandingPage.vue");
const Register = () => import("./pages/RegisterPage.vue");
const About = () => import("./pages/AboutPage.vue");
const Login = () => import("./pages/LoginPage.vue");
const Profile = () => import("./pages/ProfilePage.vue");
const Movies = () => import("./pages/MoviesPage.vue");
const Series = () => import("./pages/SeriesPage.vue");
const Legal = () => import("./pages/LegalPage.vue");
const InDev = () => import("./pages/InDevPage.vue");
const Watch = () => import("./pages/WatchPage.vue");
const Details = () => import("./pages/DetailsPage.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/login", component: Login },
	{ path: "/out/:link(.*)", component: Out },
	{ path: "/branding", component: Branding },
	{ path: "/register", component: Register },
	{ path: "/about", component: About },
	{ path: "/profile", component: Profile },
	{ path: "/movies", component: Movies },
	{ path: "/series", component: Series },
	{ path: "/:type(movies|series)/:id", component: Details },
	{ path: "/:dev(favorites|settings|help)", component: InDev },
	{ path: "/watch", redirect: '/movies' },
	{ path: "/watch/:id(\\d+)", component: Watch },
	{ path: "/legal/:part(impressum|privacy|terms)", component: Legal },
	{ path: "/legal", redirect: "/legal/imprint" },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
