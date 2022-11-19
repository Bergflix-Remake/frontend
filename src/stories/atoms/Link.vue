<template>
  <router-link
    :to="to ? `/${href}` : '#'"
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
