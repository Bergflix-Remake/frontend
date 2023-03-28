<template>
  <h1 class="text-4xl font-black text-white my-5 leading-8 max-h-40">
    <LazyLoadedImgVue v-if="image" :fit="'contain'" class="w-52" :src="image" :alt="slot[0]?.toString()" />
      <slot v-else />
      <a :id="id.replace(' ', '-')" />
  </h1>
</template>

<script setup lang="ts">
import LazyLoadedImgVue from '@/stories/molecules/LazyLoadedImg.vue';
import { useSlots } from 'vue';

const slot = useSlots();
defineProps({
  id: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});
</script>

<style></style>
