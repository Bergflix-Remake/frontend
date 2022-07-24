<template>
  <div
    class="relative flex flex-col items-center justify-center flex-shrink-0 overflow-hidden text-center text-white transition-all duration-500 bg-center bg-cover rounded-md shadow-md cursor-pointer hover:-translate-y-1 group aspect-video bg-clean-dark-800 w-80 hover:shadow-2xl hover:shadow-primary-500/10"
    :class="{ 'animate-pulse': loading }" :style="{ 'background-image': loading || error ? '' : `url(${url})` }"
    @click="$emit('click')">
    <!-- Loading -->
    <Spinner v-if="loading" animation="bricks" />
    <div class="flex flex-col items-center justify-center text-red-500" v-if="error">
      <ExclamationCircleIcon class="w-10 h-10 " />
      <p>Es gab einen Fehler. Bitte versuche es nochmal.</p>
    </div>
    <div class="absolute flex top-2 right-2" v-if="original">
      <Logo long class="!text-base">Original</Logo>
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from "../atoms/Spinner.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/outline";
import Logo from "../atoms/Logo.vue";
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  original: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);

// If props.image does not start with https:// or http://, append https://api.bergflix.de at the front.
const url = `${props.image.startsWith('https://') || props.image.startsWith('http://') ? '' : 'https://api.bergflix.de'}${props.image}`;
</script>
