<template>
  <router-link
    :to="to ? `/${href}` : '#'"
    class="ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border text-white font-bold group w-max"
  >
    <slot />
    <component
      v-if="icon"
      :is="icon"
      class="inline ml-1 w-6 h-6 mb-1 group-hover:text-primary-500"
    />
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
