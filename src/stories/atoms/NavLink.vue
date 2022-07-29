<template>
  <router-link :to="href ? `/${href}` : '#'"
    class="text-xl font-thin transition-all ease-in-out cursor-pointer h-min hover:text-primary-500 group w-max"
    :class="isActive ? 'text-primary-500' : 'text-delorean-500'">
    <slot />
  </router-link>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

const route = useRoute()
// eslint-disable-next-line no-undef
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  }
});

const isActive = computed(() => {
  if (!route) return false;
  if (!props.name) return false;
  return route.meta.name === props.name
})
</script>
