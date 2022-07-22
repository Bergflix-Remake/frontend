<template>
  <div
    class="flex flex-col items-center justify-center overflow-hidden text-white transition-all duration-500 bg-center bg-cover rounded-md shadow-md cursor-pointer hover:-translate-y-1 group aspect-video bg-clean-dark-800 w-80 hover:shadow-2xl hover:shadow-primary-500/10"
    :class="{ 'animate-pulse': loading }"
    :style="{ 'background-image': loading ? '' : `url(${image})` }"
  >
    <!-- Loading -->
    <Spinner v-if="loading" animation="bricks" />
  </div>
</template>

<script setup lang="ts">
import Spinner from "../atoms/Spinner.vue";

// eslint-disable-next-line
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: "",
  },
});
</script>
