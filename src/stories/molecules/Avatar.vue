<template>
  <div
    id="avatar"
    class="rounded-full bg-cover bg-center cursor-pointer shadow-md hover:shadow-lg w-full h-full aspect-square transition-all flex items-center justify-center"
    :style="{ 'background-image': `url(${image})` }"
    :class="{ 'animate-pulse blur-sm': loading }"
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
import { gravatar } from '@/util/paths';
import { computed } from 'vue';

const props = defineProps<{
  email: string;
  loading?: boolean;
  error?: boolean;
}>();

const image = computed(() => gravatar(props.email));

defineEmits(['mouseenter', 'mouseleave', 'click']);
</script>
