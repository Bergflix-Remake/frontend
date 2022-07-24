<script setup lang="ts">
import Footer from "./stories/organisms/Footer/Footer.vue";
import Navbar from "./stories/organisms/NavBar.vue";
</script>

<template>
  <div>
    <Navbar />
    <div
      class="flex flex-col min-h-screen bg-clean-dark text-clean-white"
    >
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style></style>
