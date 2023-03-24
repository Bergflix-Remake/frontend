<template>
  <!-- Window Flex Layout -->
    <div
      class="min-h-screen h-full w-full backdrop-blur-sm bg-clean-dark-500/70 flex justify-center items-center md:p-5 flex-col space-y-2"
      @click.self="emit('click')"
    >
      <slot />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<style scoped>
</style>