<script setup lang="ts">
import Footer from "./stories/organisms/Footer/Footer.vue";
import Navbar from "./stories/organisms/NavBar.vue";
</script>

<template>
  <div>
    <Navbar />
    <div class="flex flex-col min-h-screen bg-black text-clean-white mt-24">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
