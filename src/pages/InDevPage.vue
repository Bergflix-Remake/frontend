<template>
  <div id="container" class="flex items-center justify-center w-full h-screen">
    <div
      id="window"
      class="p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
    >
      <h1 class="font-bold dark:text-white">
        This part of the website is still in developement.
      </h1>
      <p class="text-gray-700 dark:text-gray-300">
        This website is still in developement, which means that many features are not yet
        implemented. Please stay tuned for updates! To see the latest changes, check out
        our <Button type="linkout" to="github">Github Page</Button>
      </p>
      <Button type="button" to="/home">
        <span class="">Home</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/Common/Button.vue'
</script>

<style lang="scss"></style>
