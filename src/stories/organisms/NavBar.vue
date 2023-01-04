<template>
  <nav
    class="w-full h-20 fixed border-2 bg-gradient-to-t md:bg-gradient-to-b via-black/50 from-black to-transparent border-green-600 z-50 md:top-0 md:bottom-0-auto bottom-0 top-auto flex flex-row items-center md:justify-start justify-around md:space-x-2 p-2"
  >
    <Logo long class="hidden md:block text-3xl" />
    <NavLink v-for="item in navItems" :key="item.name" :name="item.name">
      <component :is="item.icon" class="w-8 h-8 md:hidden" />
      <span class="hidden md:block">{{ item.name }}</span>
    </NavLink>
    <!-- Account -->
    <div
      class="hidden md:flex h-full relative items-center w-full justify-end"
      @mouseleave="accountOpen = false"
    >
      <Avatar size="xl" @mouseenter="accountOpen = true" />
      <ProfileDropdown :open="accountOpen" class="absolute top-16 right-0" />
    </div>
    <NavLink class="md:hidden" name="Account">
      <UserIcon class="w-8 h-8" />
    </NavLink>
  </nav>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  VideoCameraIcon,
  FilmIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/vue/solid';
import { ref } from 'vue';
import Logo from '../atoms/Logo.vue';
import NavLink from '../atoms/NavLink.vue';
import Avatar from '../molecules/Avatar.vue';
import ProfileDropdown from '../molecules/ProfileDropdown.vue';

const accountOpen = ref(false);

const navItems = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Filme',
    icon: VideoCameraIcon,
  },
  {
    name: 'Serien',
    icon: FilmIcon,
  },
];
</script>
