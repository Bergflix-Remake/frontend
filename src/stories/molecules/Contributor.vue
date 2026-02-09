<template>
  <div
    class="cursor-pointer bg-cleandark-800 flex flex-row shrink-0 rounded-lg m-2 shadow-lg h-24 min-w-52 w-max overflow-hidden hover:-translate-y-1 hover:shadow-primary-500/5 hover:shadow-xl transition-all"
    @click="open"
  >
    <LazyLoadedImg
      class="aspect-square h-full bg-cover bg-center bg-no-repeat z-0"
      :src="image"
    >
    </LazyLoadedImg>
    <div class="flex flex-col w-full h-full justify-center items-center p-2">
      <h3>{{ name }}</h3>
      <h4 class="text-gray-500 text-center whitespace-normal">
        {{ role }} <br class="md:hidden" />
        <span v-if="character" class="font-bold">· {{ character }}</span>
      </h4>
    </div>
  </div>
</template>
<script setup lang="ts">
import LazyLoadedImg from './LazyLoadedImg.vue';

const props = defineProps<{
  name: string;
  role: string;
  character?: string;
  image: string;
  url?: string;
}>();
const open = () => {
  if (props.url) {
    window.open(props.url, '_blank');
  }
};
</script>
