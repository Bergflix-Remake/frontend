<template>
  <div id="desktop-nav" class="fixed top-0 left-0 z-50 w-full">
    <nav
      class="flex flex-row w-full h-16 px-4 text-white bg-gradient-to-b from-clean-dark-500 to-transparent backdrop-blur-md border-b-darkest-dark">
      <div id="main-nav" class="flex flex-row items-center mr-auto space-x-5">
        <Logo :long="true"></Logo>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/series">Series</NavLink>
      </div>
      <div class="flex flex-col items-end justify-start mt-3" @mouseenter="profileDropdownOpen = true"
        @mouseleave="profileDropdownOpen = false">
        <Avatar image="//picsum.photos/500" />
        <ProfileDropdown :open="profileDropdownOpen" :logged-in="false" :username="'abc'" class="mt-2" />
      </div>
    </nav>
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import Logo from "../atoms/Logo.vue";
import NavLink from "../atoms/NavLink.vue";
import Avatar from "../molecules/Avatar.vue";
import ProfileDropdown from "../cells/ProfileDropdown.vue";
import { ref } from "vue";

const profileDropdownOpen = ref(false);
</script>
