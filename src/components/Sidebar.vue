<template>
	<transition name="slide">
		<div id="side" v-if="showSidebar()">
			<div
				id="sidebar-container"
				class="flex flex-col items-center content-center h-full"
			>
				<div class="flex flex-row content-center w-full">
					<h1 class="text-4xl font-bold text-white">
						Menu<span class="font-bold text-primary">.</span>
					</h1>
					<XIcon
						class="w-7 ml-auto mr-2.5 text-gray-500 hover:text-primary cursor-pointer"
						@click="closeSidebar"
					/>
				</div>
				<ul
					id="sidebar-items"
					class="mt-10 space-y-5 text-center text-gray-500"
				>
					<li v-for="item in menuItems">
						<Button
							:to="item.href.replace('/', '')"
							type="link"
							:icon="item.icon"
							v-if="store.state.accounts.loggedIn"
							>{{ item.title }}</Button
						>
					</li>
					<li>
						<Button
							to="help"
							type="link"
							:icon="InformationCircleIcon"
							>Hilfe & Feedback</Button
						>
					</li>
				</ul>
				<ul class="mt-auto mb-10 space-y-5 text-center text-gray-500">
					<li>
						<Button
							:to="
								store.state.accounts.loggedIn
									? 'logout'
									: 'login'
							"
							type="link"
							:icon="LoginIcon"
							>{{
								store.state.accounts.loggedIn
									? "Logout"
									: "Login"
							}}</Button
						>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>
<script setup lang="ts">
import {
	CogIcon,
	InformationCircleIcon,
	LogoutIcon,
	StarIcon,
	UserCircleIcon,
	XIcon,
	LoginIcon,
} from "@heroicons/vue/outline";
import { computed } from "vue";
import { useStore } from "vuex";
import Button from "./Button.vue";
const store = useStore();
let showSidebar = () => {
	return store.state.sidebarOpen;
};
function closeSidebar() {
	store.commit("toggleSidebar");
}
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
	{
		icon: InformationCircleIcon,
		href: "help",
		title: "Hilfe & Feedback",
	},
];
const footerItems = [
	{
		icon: LogoutIcon,
		href: "signout",
		title: "Abmelden",
	},
];
</script>
<style>
.slide-enter-from,
.slide-leave-to {
	z-index: 40;
	transform: translateX(100%);
}
.slide-enter-active,
.slide-leave-active {
	z-index: 40;
	transition: transform 0.2s linear;
}
#sidebar-container {
	z-index: 40;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 18rem;
	background: #000000;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	transition: right 300ms ease-in-out;
	box-shadow: rgba(0, 0, 0, 0.69) 0 26px 30px -10px;
}
#sidebar-container.hide {
	right: -20rem;
}
#sidebar-header {
	height: 2rem;
	display: flex;
}
#sidebar-header .title h2 {
	margin: 0;
}
#sidebar-header .close {
	padding-top: 0.25rem;
	margin-left: auto;
}
</style>
