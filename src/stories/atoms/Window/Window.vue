<template>
  <!-- Window Component -->
  <div
    class="flex flex-col justify-center items-center bg-clean-dark-500 md:rounded-md h-full p-5 shadow-lg text-center w-full my-5"
    :class="fullWidth ? 'mx-2' : 'mx-auto max-w-2xl'"
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
