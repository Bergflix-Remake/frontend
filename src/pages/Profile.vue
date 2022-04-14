<template>
  <div id="container" class="flex items-center justify-center w-full h-screen">
    <div
      id="window"
      class="relative flex flex-col items-center justify-center p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
    >
      <div class="absolute z-10 -right-5 -top-5 animate-pulse">
        <p class="p-2 font-mono text-white bg-red-500 rounded-sm">WIP</p>
      </div>
      <img
        src="https://cdn.bergflix.de/logo/light_bg.png"
        class="w-32 h-32 rounded-full"
      />
      <h1 class="text-2xl font-bold">{{ user.data!.username }}</h1>
      <p class="text-gray-700">{{ user.data!.email }}</p>
      <Button type="link" to="favorites" :icon="StarIcon"> Favorites </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "../components/Common/Button.vue";
import { StarIcon } from "@heroicons/vue/outline";
import { strapi, getUser } from "../main";

const router = useRouter();

if (!strapi.user) {
  router.push("/login");
}

const user = getUser();
</script>

<style lang="scss"></style>
