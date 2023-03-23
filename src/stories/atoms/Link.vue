<template>
  <component :is="isExternal ? 'a' : 'router-link'" :to="to" class="link" :href="to" :rel="isExternal && 'noopener noreferrer'" :target="isExternal && '_blank'">
    <component :is="icon" v-if="icon" class="icon" />
    <slot />
  </component>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { RouteLocationRaw } from 'vue-router';
const props = defineProps<{
  to: RouteLocationRaw;
  icon?: any;
}>();

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
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
