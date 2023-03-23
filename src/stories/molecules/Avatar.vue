<template>
  <div
    id="avatar"
    class="rounded-full bg-cover bg-center cursor-pointer shadow-md hover:shadow-lg w-full h-full aspect-square transition-all flex items-center justify-center"
    :style="{ 'background-image': `url(${image})` }"
    @mouseenter="() => $emit('mouseenter')"
    @mouseleave="() => $emit('mouseleave')"
    @click="() => $emit('click')"
  >
    <Spinner v-if="loading" />
    <ExclamationCircleIcon v-else-if="error" class="w-6 h-6 text-red-500" />
  </div>
</template>
<script setup lang="ts">
import Spinner from '../atoms/Spinner.vue';
import { ExclamationCircleIcon } from '@heroicons/vue/outline';

// eslint-disable-next-line no-undef
defineProps({
  image: {
    type: String,
    required: false,
    default: 'https://cdn.bergflix.de/logo/light_bg.png',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

// eslint-disable-next-line no-undef
defineEmits(['mouseenter', 'mouseleave', 'click']);
</script>
