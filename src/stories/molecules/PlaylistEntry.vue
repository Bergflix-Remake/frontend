<template>
  <div
    class="bg-clean-dark-800 text-white flex w-full h-24 rounded-md shadow-lg overflow-clip hover:-translate-x-1 transition-all shrink-0 text-center cursor-pointer"
    :class="{ 'shadow-primary-500/5': playing }"
    @click="
      emit('click');
      router.push({ name: to || 'watch', params: { id } });
    "
  >
    <LazyLoadedImg
      class="h-full aspect-video bg-cover bg-center"
      :src="thumbnail"
    ></LazyLoadedImg>
    <div
      class="w-full flex flex-col justify-center items-center space-y-2 relative"
    >
      <h4 v-if="series" class="text-primary-500 font-bold text-sm">
        {{ series }}
      </h4>
      <h3>
        {{ title }}
        <span v-if="episode" class="text-delorean-500">#{{ episode }}</span>
      </h3>
      <div
        class="absolute bottom-0 left-0 bg-primary-500 w-full h-1"
        :style="`width: ${prg}%;`"
      ></div>
      <h5 v-if="playing" class="text-primary-500 italic font-light text-sm">
        <PlayIcon class="w-5 h-5 inline mb-1" />
        Spielt gerade...
      </h5>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getWatchTime } from '@/util/watchTime';
import { PlayIcon } from '@heroicons/vue/solid';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import LazyLoadedImg from './LazyLoadedImg.vue';

const router = useRouter();

const emit = defineEmits(['click']);

const props = defineProps<{
  id: string;
  to?: string;
  thumbnail: string;
  title: string;
  series?: string;
  episode?: number;
  progress?: number;
  playing?: boolean;
}>();

const watchTime = computed(() => getWatchTime(Number(props.id)));
const prg = computed(
  () =>
    props.progress ||
    (watchTime.value &&
      watchTime.value.duration &&
      (watchTime.value.watchTime / watchTime.value.duration) * 100) ||
    0,
);

console.debug('progress', prg.value, props.id);
</script>
