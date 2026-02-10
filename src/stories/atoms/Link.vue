<template>
  <a
    v-if="isExternal"
    :href="to.toString()"
    :class="['link', props.class]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icon" class="icon" />
    <slot />
  </a>

  <router-link v-else :to="to" :class="['link', props.class]">
    <component :is="icon" class="icon" />
    <slot />
  </router-link>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { RouteLocationRaw } from 'vue-router';
const props = defineProps<{
  to: RouteLocationRaw;
  icon?: any;
  class?: string;
}>();

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<style>
@reference "@/index.css";

.link {
  @apply font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-[border,color] w-max;
}
.link > .icon {
  @apply inline w-6 h-6 mb-1 mr-1 transition-colors duration-500;
}

.link:hover > .icon {
  @apply text-primary-500;
}
</style>
