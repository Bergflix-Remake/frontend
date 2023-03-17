<template>
  <h1 class="text-4xl font-black text-white my-5 leading-8">
    <img
      v-if="image"
      :src="image"
      class="h-40 mr-2"
      />
      <slot v-else />
      <p>      {{ id }} {{ image }}</p>
      <a :id="id.replace(' ', '-')" />
  </h1>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});
</script>

<style></style>
