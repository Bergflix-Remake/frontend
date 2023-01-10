<template>
  <router-link
    :to="to"
    class="font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border group w-max"
  >
    <component
      :is="icon"
      v-if="icon"
      class="inline w-6 h-6 mb-1 mr-1 group-hover:text-primary-500"
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
