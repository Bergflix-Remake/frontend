<template>
	<!-- Desktop Navbar -->
	<nav
		class="fixed top-0 z-50 flex-row items-center hidden w-screen h-20 p-2 space-x-5 text-gray-500 sm:flex bg-gradient-to-b from-dark to-transparent backdrop-blur-sm"
	>
		<div class="ml-2"></div>
		<h1
			@click="$router.push('/home')"
			class="text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:hidden"
		>
			Bf
			<span class="font-bold text-primary">.</span>
		</h1>
		<h1
			@click="$router.push('/home')"
			class="hidden text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:block"
		>
			Bergflix
			<span class="font-bold text-primary">.</span>
		</h1>
		<div class="h-5 mr-5 border-r-2 border-gray-600"></div>
		<ul class="flex flex-row space-x-10">
			<li v-for="item in navItems">
				<a :id="item.path" class="hover:text-primary" :href="item.path">{{ item.text }}</a>
			</li>
		</ul>
		<div
			style="margin-left: auto; margin-right: 2rem"
			class="flex flex-row h-full"
			id="items-right"
			@mouseleave="showUserPopup = false"
		>
			<!-- <AdjustmentsIcon class="text-gray-500 cursor-pointer h-7 hover:text-primary" @click="toggleSidebar"/> -->
			<div class="flex flex-col items-end">
				<img
					:src="store.getters.getUser.image ? store.getters.getUser.image : 'https://cdn.bergflix.de/logo/light_bg.png'"
					:alt="'Logged in as ' + store.getters.getUser.username"
					class="rounded-full shadow w-14 h-14"
					@mouseenter="showUserPopup = true"
				/>
				<transition name="slide">
					<div
						id="user-popup"
						v-if="showUserPopup"
						class="flex flex-col p-5 mt-2 bg-black rounded-md spapce-y-5 h-max w-max"
						@mouseleave="showUserPopup = false"
					>
						<h2 class="font-bold text-delorean">Hi, {{ store.getters.getUser.username }}!</h2>
						<ul>
							<li v-for="item in menuItems">
								<Button
									:to="item.href.replace('/', '')"
									type="link"
									:icon="item.icon"
									v-if="store.state.accounts.loggedIn"
								>{{ item.title }}</Button>
							</li>
							<li>
								<Button to="help" type="link" :icon="InformationCircleIcon">Hilfe & Feedback</Button>
							</li>
						</ul>
						<hr class="my-2 border-delorean" />
						<Button
							:to="
								store.state.accounts.loggedIn
									? '#'
									: 'login'
							"
							type="link"
							:icon="store.state.accounts.loggedIn ? LogoutIcon : LoginIcon"
							@click="logout"
						>
							{{
								store.state.accounts.loggedIn
									? "Logout"
									: "Login"
							}}
						</Button>
					</div>
				</transition>
			</div>
		</div>
	</nav>
	<!-- Mobile Navbar -->
	<nav
		class="fixed bottom-0 z-50 flex flex-row w-full py-2 text-white h-11 justify-evenly sm:hidden rounded-t-md"
		:class="store.state.accounts.loggedIn ? 'bg-black' : 'bg-gradient-to-b to-black from-transparent'"
	>
		<ChatIcon class="cursor-pointer hover:text-primary" @click="$router.push('/party')" />
		<SearchIcon class="cursor-pointer hover:text-primary" @click="$router.push('/search')" />
		<HomeIcon class="cursor-pointer hover:text-primary" @click="$router.push('/home')" />
		<FilmIcon class="cursor-pointer hover:text-primary" @click="$router.push('/library')" />
		<CogIcon class="cursor-pointer hover:text-primary" @click="toggleSidebar" />
	</nav>
	<Sidebar></Sidebar>
</template>

<style>
.slide-enter-from,
.slide-leave-to {
	z-index: 1000;
	transform: translateY(25%);
	opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
	z-index: 1000;
	transition: all 0.2s linear;
}
</style>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {
	LogoutIcon,
	HomeIcon,
	CogIcon,
	SearchIcon,
	FilmIcon,
	ChatIcon,
	UserCircleIcon,
	StarIcon,
	InformationCircleIcon,
	LoginIcon,
} from "@heroicons/vue/outline";
import Sidebar from "./Sidebar.vue";
import Button from "./Common/Button.vue";
import { useStore } from "vuex";
import { strapi } from '../main';

const route = useRoute();
const path = computed(() => route.path);
const store = useStore();
const showSidebar = store.state.showSidebar;
function toggleSidebar() {
	store.commit("toggleSidebar");
}

const showUserPopup = ref(false);

const navItems = [
	{
		path: "/home",
		text: "Home",
	},
	{
		path: "/movies",
		text: "Movies",
	},
	{
		path: "/series",
		text: "Series",
	},
	{
		path: "/party",
		text: "Party",
	},
];

const menuItems = [
	{
		icon: UserCircleIcon,
		href: "profile",
		title: "Mein Profil",
	},
	{
		icon: CogIcon,
		href: "settings",
		title: "Einstellungen",
	},
	{
		icon: StarIcon,
		href: "favorites",
		title: "Favoriten",
	},
];
const logout = () => {
	strapi.logout();
	store.commit("logout");
}
</script>
