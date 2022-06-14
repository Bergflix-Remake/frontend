<template>
  <div
    id="container"
    class="flex flex-col items-center justify-center transition-all bg-center bg-cover rounded-xl aspect-video hover:border-4 hover:h-64 h-60 group m-2"
    :style="{ 'background-image': `url(${image})` }"
  >
    <div
      class="flex flex-col items-center justify-center w-full h-full transition-all bg-gray-900 opacity-0 group-hover:opacity-100 bg-opacity-80 rounded-xl backdrop-blur-sm"
    >
      <img v-if="titleImage" :src="titleImage" :alt="name" class="w-1/2" />
      <h1 v-else class="text-xl font-bold text-center">{{ name }}</h1>
      <p class="text-gray-500">{{ subtitle }}</p>
      <Button type="button" :to="link" :icon="linkIcon">
        {{ linkText }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RenderFunction, FunctionalComponent, defineProps } from "vue";
import Button from "./Button.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  titleImage: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String || Object,
    default: "",
  },
  image: {
    type: String,
    default: "https://cdn.bergflix.de/imgs/Background/1.png",
  },
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    default: "Details",
  },
  linkIcon: {
    type: Object as () => RenderFunction | FunctionalComponent,
    required: false,
  },
});
</script>

<style lang="scss"></style>
