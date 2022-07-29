<template>
  <h1 class="font-bold text-white" @click="$emit('click')">
    {{ long ? "Bergflix" : "Bf" }}<span class="text-primary-500">. <slot /></span>
  </h1>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  long: {
    type: Boolean,
    required: false,
  },
});
// eslint-disable-next-line no-undef
defineEmits(["click"]);
</script>
