<template>
  <Modal>
    <h1 class="text-5xl mb-5 font-black text-primary">
      {{ title }}
    </h1>
    <p class="text-gray-500 italic text-center">
      <slot />
    </p>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Error",
  },
});
</script>
