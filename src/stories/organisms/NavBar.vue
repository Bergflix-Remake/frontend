<template>
  <div id="desktop-nav">
    <nav
      class="w-full text-white flex flex-row px-4 h-16 bg-gradient-to-b from-clean-dark-500 to-clean-dark-500/0 backdrop-blur-md border-b-darkest-dark"
    >
      <div id="main-nav" class="mr-auto flex flex-row space-x-5 items-center">
        <Logo :long="true"></Logo>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/series">Series</NavLink>
      </div>
      <div
        class="flex flex-col items-end justify-start mt-3"
        @mouseenter="profileDropdownOpen = true"
        @mouseleave="profileDropdownOpen = false"
      >
        <Avatar image="//picsum.photos/500" />
        <ProfileDropdown
          :open="profileDropdownOpen"
          :logged-in="false"
          :username="'abc'"
          class="mt-2"
        />
      </div>
    </nav>
  </div>
</template>

<style></style>

<script setup lang="ts">
import Logo from "../atoms/Logo.vue";
import NavLink from "../atoms/NavLink.vue";
import Avatar from "../molecules/Avatar.vue";
import ProfileDropdown from "../bacteria/ProfileDropdown.vue";
import { ref } from "vue";

const profileDropdownOpen = ref(false);
</script>
