<template>
  <div id="nav">
    <!-- Desktop Navbar -->
    <nav
      class="border-b-[1px] border-clean-dark fixed top-0 z-50 flex-row items-center hidden w-screen h-20 p-2 space-x-5 text-gray-500 sm:flex bg-darkest-dark bg-opacity-20 backdrop-blur-sm"
    >
      <div class="ml-2"></div>
      <h1
        class="text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:hidden"
        @click="$router.push('/home')"
      >
        Bf
        <span class="font-bold text-primary">.</span>
      </h1>
      <h1
        class="hidden text-4xl font-bold cursor-pointer text-darkest-dark dark:text-white md:block"
        @click="$router.push('/home')"
      >
        Bergflix
        <span class="font-bold text-primary">.</span>
      </h1>
      <div class="h-5 mr-5 border-r-2 border-gray-600"></div>
      <ul class="flex flex-row space-x-10">
        <li v-for="item in navItems" :key="item.text">
          <a :id="item.path" class="hover:text-primary" :href="item.path">{{
            item.text
          }}</a>
        </li>
      </ul>
      <div
        id="items-right"
        style="margin-left: auto; margin-right: 2rem"
        class="flex flex-row h-full"
        @mouseleave="showUserPopup = false"
      >
        <!-- User Icon -->
        <div v-if="user.isFetched" class="flex flex-col items-end">
          <img
            :src="'https://cdn.bergflix.de/logo/light_bg.png'"
            :alt="'Logged in as ' + user.data?.username || 'Guest'"
            class="rounded-full shadow w-14 h-14 backdrop-blur-3xl"
            @mouseenter="showUserPopup = true"
          />
          <transition name="slide">
            <div
              v-if="showUserPopup"
              id="user-popup"
              class="flex flex-col p-5 mt-2 bg-black rounded-md spapce-y-5 h-max w-max bg-opacity-70 backdrop-blur-3xl"
              @mouseleave="showUserPopup = false"
            >
              <h2 class="font-bold text-delorean">
                Hi, {{ user.data?.username || "Guest" }}!
              </h2>
              <ul v-if="user.isSuccess" class="text-white">
                <li v-for="item in menuItems" :key="item.title">
                  <Button
                    :to="item.href.replace('/', '')"
                    type="link"
                    :icon="item.icon"
                    >{{ item.title }}</Button
                  >
                </li>
                <li>
                  <Button to="help" type="link" :icon="InformationCircleIcon"
                    >Hilfe & Feedback</Button
                  >
                </li>
              </ul>
              <hr class="my-2 border-delorean" />
              <Button
                v-if="user.isSuccess"
                class="text-white"
                :to="'#'"
                type="link"
                :icon="LogoutIcon"
                @click="logout"
              >
                Logout
              </Button>
              <Button
                v-if="user.isError"
                :to="'login'"
                type="link"
                :icon="LoginIcon"
                class="text-white"
              >
                Login
              </Button>
            </div>
          </transition>
        </div>
        <!-- User Loading Indicator -->
        <div v-if="user.isLoading" class="flex flex-col items-end justify-center">
          <Loader />
        </div>
      </div>
    </nav>
    <!-- Mobile Navbar -->
    <nav class="fixed bottom-0 z-50 w-full flex flex-col sm:hidden">
      <MobileBanner />
      <div
        class="flex flex-row w-full py-2 text-white h-11 justify-evenly rounded-t-md bg-gradient-to-b to-black from-transparent"
      >
        <ChatIcon
          class="cursor-pointer hover:text-primary"
          @click="$router.push('/party')"
        />
        <SearchIcon
          class="cursor-pointer hover:text-primary"
          @click="$router.push('/search')"
        />
        <HomeIcon
          class="cursor-pointer hover:text-primary"
          @click="$router.push('/home')"
        />
        <FilmIcon
          class="cursor-pointer hover:text-primary"
          @click="$router.push('/library')"
        />
        <CogIcon class="cursor-pointer hover:text-primary" @click="toggleSidebar" />
      </div>
    </nav>
    <Sidebar></Sidebar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
import { strapi, getUser } from "../main";
import Loader from "./Loader.vue";
import MobileBanner from "./MobileBanner.vue";

const store = useStore();
function toggleSidebar() {
  store.commit("toggleSidebar");
}

const user = getUser();

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
  user?.refetch();
};
</script>

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
