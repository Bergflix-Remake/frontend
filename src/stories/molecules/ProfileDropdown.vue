<template>
  <transition name="slide">
    <div
      v-if="open"
      class="z-50 flex flex-col justify-center p-5 space-y-2 rounded-md shadow-lg bg-clean-dark-800/90 w-max"
    >
      <p class="font-bold leading-tight text-delorean-500">
        Hi, {{ username }}!
      </p>
      <div v-if="loggedIn" class="flex flex-col justify-center space-y-2">
        <Link :to="{ name: 'account' }" :icon="UserCircleIcon">Account</Link>
        <Link :to="{ name: 'account', hash: '#settings'}" :icon="CogIcon">Einstellungen</Link>
        <Link to="/help" :icon="InformationCircleIcon">Hilfe & Feedback</Link>
        <Link :to="{ name: 'account', hash: '#favorites'}" :icon="HeartIcon">Favoriten</Link>
        <Button type="ghost" :icon="LogoutIcon" @click="logout()">Logout</Button>
      </div>
      <div v-else class="flex flex-col justify-center space-y-2">
        <Link :to="{ name: 'login' }" :icon="LoginIcon">Login</Link>
        <Link :to="{ name: 'home' }" :icon="UserAddIcon">Register</Link>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import Link from "@atoms/Link.vue";
import Button from "@atoms/Button.vue";
import {
  UserCircleIcon,
  CogIcon,
  LogoutIcon,
  LoginIcon,
  UserAddIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/vue/outline";
import { strapi } from "@/main";
import { ref } from "vue";
import { useRouter } from "vue-router";

defineProps({
  open: {
    type: Boolean,
    default: false,
  }
});

const router = useRouter();

const loggedIn = ref(strapi.user !== null);
const username = ref(strapi.user?.username as string || "Guest");
const logout = () => {
  strapi.logout();
  router.push({ name: "home" });
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
