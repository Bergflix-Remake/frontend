<template>
  <!-- Window Component -->
  <div
    class="flex flex-col justify-center items-center bg-clean-dark-500 md:rounded-md h-full p-5 shadow-lg text-center"
    :class="{ 'w-full': fullWidth }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">

defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

</script>
