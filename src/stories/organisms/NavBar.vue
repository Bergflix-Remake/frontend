<template>
  <div id="desktop-nav" class="fixed top-0 left-0 z-50 w-full">
    <nav @mouseleave="profileDropdownOpen = false"
      class="flex flex-row items-center w-full h-24 px-8 text-white bg-gradient-to-b from-clean-dark-500 to-transparent backdrop-blur-md border-b-darkest-dark">
      <div id="main-nav" class="flex flex-row items-center mr-auto space-x-5">
        <Logo class="!text-3xl" :long="true"></Logo>
        <NavLink name="Home" href="home">Home</NavLink>
        <NavLink name="Filme" href="movies">Filme</NavLink>
        <NavLink name="Serien" href="series">Serien</NavLink>
      </div>
      <div class="relative min-w-fit min-h-fit">
        <Avatar size="xl" image="//picsum.photos/500" @mouseenter="profileDropdownOpen = true" />
        <ProfileDropdown :open="profileDropdownOpen" :logged-in="true" :username="'abc'"
          @mouseleave="profileDropdownOpen = false" class="absolute right-0 top-16" />
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
