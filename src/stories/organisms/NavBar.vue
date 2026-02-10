<template>
  <nav
    class="w-full h-20 fixed bg-linear-to-t md:bg-linear-to-b via-black/50 from-black to-transparent z-50 md:top-0 md:bottom-0-auto bottom-0 top-auto flex flex-row items-center md:justify-start justify-around md:space-x-2 p-2"
  >
    <Logo long class="hidden md:block text-3xl" />
    <NavLink v-for="item in navItems" :key="item.name" :name="item.name">
      <component
        :is="item.icon"
        v-if="item.visibleOn.includes('mobile')"
        class="w-8 h-8 md:hidden"
      />
      <span v-if="item.visibleOn.includes('desktop')" class="hidden md:block">{{
        item.name
      }}</span>
    </NavLink>
    <!-- Account -->
    <div
      class="hidden md:flex h-full relative items-center w-full justify-end"
      @mouseleave="setDropdown(false, 500)"
    >
      <SearchOverlay class="mr-2" />
      <div class="w-14 h-14">
        <Avatar :email="email as string" @mouseenter="setDropdown(true)" />
      </div>
      <ProfileDropdown
        :open="accountOpen"
        class="absolute top-16 right-0"
        @mouseenter="setDropdown(true)"
      />
    </div>
    <NavLink class="md:hidden" name="Account">
      <CogIcon class="w-8 h-8" />
    </NavLink>
  </nav>
</template>

<script setup lang="ts">
import { strapi } from '@/main';
import {
  HomeIcon,
  SearchIcon,
  CogIcon,
  UserGroupIcon,
} from '@heroicons/vue/solid';
import { computed, ref } from 'vue';
import Logo from '../atoms/Logo.vue';
import NavLink from '../atoms/NavLink.vue';
import Avatar from '../molecules/Avatar.vue';
import ProfileDropdown from '../molecules/ProfileDropdown.vue';
import SearchOverlay from './Search/SearchOverlay.vue';

const accountOpen = ref(false);

let wait: number;

const setDropdown = (open: boolean, delay: number = 100) => {
  clearTimeout(wait);
  wait = setTimeout(() => {
    accountOpen.value = open;
  }, delay) as unknown as number;
};

const navItems = [
  {
    name: 'Home',
    icon: HomeIcon,
    visibleOn: ['mobile', 'desktop'],
  },
  {
    name: 'Search',
    icon: SearchIcon,
    visibleOn: ['mobile'],
  },
  {
    name: 'Party',
    icon: UserGroupIcon,
    visibleOn: ['mobile', 'desktop'],
  },
];

const email = computed(() => strapi.user?.email);
</script>
