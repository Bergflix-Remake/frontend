<template>
  <h1 class="text-4xl font-black text-white my-5">
    <slot />
    <a :id="id.replace(' ', '-')" />
  </h1>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: '',
  },
});
</script>

<style></style>
