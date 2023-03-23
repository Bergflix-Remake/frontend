<script setup lang="ts">
import { useRoute } from "vue-router";
import Footer from "./stories/organisms/Footer/Footer.vue";
import Navbar from "./stories/organisms/NavBar.vue";

const route = useRoute();
</script>

<template>
  <div>
    <Navbar v-if="!route.meta.hideNavigation" />
    <div class="flex flex-col min-h-screen bg-black text-clean-white w-full bg-center bg-cover" :style="{'background-image': `url(${route.meta.backgroundImage})`}">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
