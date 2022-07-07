<template>
  <div
    class="flex flex-col items-center justify-center bg-cover bg-center group text-white aspect-video bg-clean-dark-800 overflow-hidden w-80 shadow-md hover:shadow-xl hover:shadow-primary-500/10 rounded-md transition-all"
    :class="{ 'animate-pulse': loading }"
    :style="{ 'background-image': loading ? '' : `url(${image})` }"
  >
    <!-- Loading -->
    <Spinner v-if="loading" animation="bricks" />
    <!-- Content -->
    <div
      v-else
      class="flex flex-col items-center justify-center text-center w-full h-full p-8 opacity-0 group-hover:opacity-100 bg-clean-dark-600/75 transition-all"
    >
      <BadgeButton :icon="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from "../atoms/Spinner.vue";
import { PlayIcon } from "@heroicons/vue/solid";
import BadgeButton from "../atoms/BadgeButton.vue";

// eslint-disable-next-line
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  icon: {
    type: null,
    default: PlayIcon,
  },
});
</script>
