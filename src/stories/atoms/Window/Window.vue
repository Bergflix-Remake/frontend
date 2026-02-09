<template>
  <!-- Window Component -->
  <div
    class="flex flex-col justify-center items-center md:rounded-md h-full p-5 shadow-lg text-center w-full my-5"
    :class="
      fullWidth
        ? ' mx-2 '
        : ' mx-auto max-w-2xl ' +
          (transparent
            ? ' bg-transparent '
            : ' bg-clean-dark-500 ring-1 ring-delorean-800')
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fullWidth?: boolean;
  transparent?: boolean;
}>();
</script>
