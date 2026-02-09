<template>
  <h2 class="text-2xl font-bold my-3">
    <slot /> <a :id="id.replace(' ', '-')" />
  </h2>
</template>
<script setup>
defineProps({
  id: {
    type: String,
    default: '',
  },
});
</script>
