<template>
  <router-link
    :to="{ name: name.toLowerCase() }"
    class="text-xl transition-all ease-in-out cursor-pointer h-min hover:text-primary-500 group w-max"
    :class="
      isActive ? 'text-primary-500 font-bold' : 'text-delorean-500 font-thin'
    "
  >
    <slot />
  </router-link>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => {
  if (!route) return false;
  return route.name === props.name;
});
</script>
