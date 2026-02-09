<template>
  <div
    class="flex flex-wrap items-center space-x-3 text-lg font-light text-white md:flex-nowrap"
  >
    <h2>{{ year }}</h2>
    <h2 class="px-2 font-medium border-2 rounded-md text-primary-500">
      {{ age }}+
    </h2>
    <!-- TODO add condition for Episode -->
    <h2>{{ episodes > 1 ? episodes + ' Episoden' : 'Film' }}</h2>
    <span class="w-px self-stretch bg-white"></span>
    <h2>{{ genre }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  year: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  episodes: {
    type: Number,
    default: 1,
  },
  genre: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
