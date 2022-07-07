<template>
  <router-link
    :to="to ? `/${href}` : '#'"
    class="ease-in-out cursor-pointer h-min hover:text-primary-500 transition-all text-delorean-500 font-thin group w-max"
  >
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
});
</script>
