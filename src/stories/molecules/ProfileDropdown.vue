<template>
  <transition name="slide">
    <div
      v-if="open"
      class="z-50 flex flex-col justify-center p-5 space-y-2 rounded-md shadow-lg bg-cleandark-800 w-max ring-1 ring-delorean-800"
    >
      <p class="font-bold leading-tight text-delorean-500">
        Hi, {{ strapi.user?.username || 'Gast' }}!
      </p>
      <div v-if="strapi.user" class="flex flex-col justify-center space-y-2">
        <Link :to="{ name: 'account' }" :icon="UserCircleIcon">Account</Link>
        <Link to="https://bflx.de/discord" :icon="InformationCircleIcon"
          >Hilfe & Feedback</Link
        >
        <Button type="ghost" :icon="LogoutIcon" @click="logout()"
          >Logout</Button
        >
      </div>
      <div v-else class="flex flex-col justify-center space-y-2">
        <Link :to="{ name: 'login' }" :icon="LoginIcon">Login</Link>
        <Link :to="{ name: 'register' }" :icon="UserAddIcon">Register</Link>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import Link from '@atoms/Link.vue';
import Button from '@atoms/Button.vue';
import {
  UserCircleIcon,
  LogoutIcon,
  LoginIcon,
  UserAddIcon,
  InformationCircleIcon,
} from '@heroicons/vue/outline';
import { getUser, strapi } from '@/main';
import { useRouter } from 'vue-router';

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const user = getUser();
const logout = () => {
  strapi.logout();
  user.refetch();
  router.push({ name: 'home' });
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
