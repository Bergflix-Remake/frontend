<template>
  <div class="flex justify-center items-center relative">
    <img
      ref="lazyRef"
      class="w-full object-center"
      :class="{
        'object-cover': fit === 'cover'  || !fit,
        'object-contain': fit === 'contain',
        'object-fill': fit === 'fill',
        'object-none': fit === 'none',
        'object-scale-down': fit === 'scale-down',
        'blur-sm': state === 'loading',
      }"
      :alt="alt"
    />
    <div
      v-if="state === 'loading'"
      class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-delorean-500"
    >
      <Spinner animation="bricks" />
      <p class="mt-5">{{ alt }}</p>
    </div>
    <div
      v-if="state === 'error'"
      class="flex flex-col items-center justify-center text-red-500"
    >
      <ExclamationCircleIcon class="w-10 h-10" />
      <p>Fehler beim Laden des Bildes.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/outline';
import { ref, toRefs, watchEffect } from 'vue';
import { useLazyload } from 'vue3-lazyload';
import Spinner from '../atoms/Spinner.vue';

interface IProps {
  src: string;
  alt?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}


const props = defineProps<IProps>();
const { src } = toRefs(props); 

type State = 'ready' | 'loading' | 'error';

const state = ref<State>('ready');

watchEffect(() => {
  if (src.value) {
    state.value = 'loading';
  }
});

const lazyRef = useLazyload(src, {
  lifecycle: {
    loading: () => {
      console.debug('image loading', src.value);
      state.value = 'loading';
    },
    error: () => {
      console.debug('image error', src.value);
      state.value = 'error';
    },
    loaded: () => {
      console.debug('image loaded', src.value);
      state.value = 'ready';
    },
  },
});
</script>
