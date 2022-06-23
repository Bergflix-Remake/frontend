<template>
  <router-link
    :to="to ? `/${href}` : '#'"
    class="ease-in-out cursor-pointer h-min border-b-primary hover:border-b-2 transition-border text-white font-bold group"
  >
    <slot />
    <component v-if="icon" :is="icon" class="inline-block ml-1 w-6 h-6" />
  </router-link>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: null,
    required: false,
  },
});
</script>
