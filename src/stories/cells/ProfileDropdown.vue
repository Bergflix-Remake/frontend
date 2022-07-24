<template>
  <transition name="slide">
    <div
      v-if="open"
      class="z-50 flex flex-col justify-center p-5 space-y-2 rounded-md shadow-lg bg-clean-dark-500 w-max"
    >
      <p class="font-bold leading-tight text-delorean-500">
        Hi, {{ loggedIn ? username : "Guest" }}!
      </p>
      <div class="flex flex-col justify-center space-y-2" v-if="loggedIn">
        <Link href="/profile" :icon="UserCircleIcon">Profile</Link>
        <Link href="/settings" :icon="CogIcon">Settings</Link>
        <Link href="/help" :icon="InformationCircleIcon">Help & Feedback</Link>
        <Link href="/favorites" :icon="HeartIcon">Favorites</Link>
        <Button type="ghost" :icon="LogoutIcon">Logout</Button>
      </div>
      <div class="flex flex-col justify-center space-y-2" v-else>
        <Link href="/login" :icon="LoginIcon">Login</Link>
        <Link href="/register" :icon="UserAddIcon">Register</Link>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import Link from "../atoms/Link.vue";
import Button from "../atoms/Button.vue";
import {
  UserCircleIcon,
  CogIcon,
  LogoutIcon,
  LoginIcon,
  UserAddIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/vue/outline";
// eslint-disable-next-line no-undef
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    required: true,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  },
});
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
