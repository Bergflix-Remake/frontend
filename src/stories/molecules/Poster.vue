<template>
  <div
    class="relative flex flex-col items-center justify-center flex-shrink-0 overflow-hidden text-center text-white transition-all duration-500 bg-center bg-cover rounded-md shadow-md cursor-pointer hover:-translate-y-1 group aspect-video bg-clean-dark-800 w-80 hover:shadow-2xl hover:shadow-primary-500/10"
    @click="$emit('click')">
    <LazyLoadedImg :src="url" :alt="alt" />
    <!-- Loading -->
    <Spinner v-if="loading" animation="bricks" />
    <div v-if="error" class="flex flex-col items-center justify-center text-red-500">
      <ExclamationCircleIcon class="w-10 h-10 " />
      <p>Es gab einen Fehler. Bitte versuche es nochmal.</p>
    </div>
    <div v-if="original" class="absolute flex top-2 right-2">
      <Logo long class="!text-base">Original</Logo>
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from "../atoms/Spinner.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/outline";
import Logo from "../atoms/Logo.vue";
import { toRefs } from "vue";
import LazyLoadedImg from "./LazyLoadedImg.vue";
import { api } from "@/util/paths";

interface IProps {
  loading?: boolean;
  error?: boolean;
  original?: boolean;
  src?: string;
  alt?: string;
}

const props = defineProps<IProps>();

const { src } = toRefs(props);

defineEmits(['click']);

// If props.image does not start with https:// or http://, append https://api.bergflix.de at the front.
const url = api(src?.value);
</script>
