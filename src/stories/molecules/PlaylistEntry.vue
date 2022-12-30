<template>
  <div
    class='bg-clean-dark-800 flex w-full h-24 rounded-md shadow-lg overflow-clip hover:-translate-x-1 transition-all flex-shrink-0 text-center cursor-pointer'
    :class='{ "shadow-primary-500/5": playing}'
    @click='router.push(`/watch/${id}`)'>
    <div class='h-full aspect-video bg-cover bg-center' :style='`background-image: url(${thumbnail});`'></div>
    <div class='w-full flex flex-col justify-center items-center space-y-2'>
      <h3>{{ title }} <span v-if='episode' class='text-delorean-500'>#{{ episode }}</span></h3>
      <div v-if='progress' class='relative bg-delorean-800 w-3/4 h-2 rounded-md overflow-hidden'>
        <div class='absolute top-0 left-0 bg-primary-500 h-full' :style='`width: ${progress}%;`'></div>
      </div>
      <h5 v-if='playing' class='text-primary-500 italic font-light text-sm'>
        <PlayIcon class='w-5 h-5 inline mb-1' />
        Spielt gerade...
      </h5>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { PlayIcon } from '@heroicons/vue/solid';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
  id: string;
  thumbnail: string;
  title: string;
  episode?: number;
  progress?: number;
  playing?: boolean;
}>();
</script>
