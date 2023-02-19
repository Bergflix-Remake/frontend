<template>
  <router-link
    :to="to"
    class="link"
  >
    <component
      :is="icon"
      v-if="icon"
      class="icon"
    />
    <slot />
  </router-link>
</template>
<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
defineProps<{
  to: RouteLocationRaw;
  icon?: any;
}>();

</script>

<style>
.link {
  @apply font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border w-max;
}
.link > .icon {
  @apply inline w-6 h-6 mb-1 mr-1;
}

.link:hover > .icon {
  @apply text-primary-500;
}
</style>
