<template>
  <div class="w-full h-full relative">
    <vue-plyr ref="player" :key="vid">
      <div data-plyr-provider="youtube" :data-plyr-embed-id="vid" />
    </vue-plyr>
    <button
      v-if="nextButton"
      class="absolute z-20 bottom-16 right-5 p-2 rounded-lg next-button"
      @click="finishPlayback()"
    >
      Nächste Episode
      <PlayIcon class="w-5 h-5 inline" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue';
import { PlayIcon } from '@heroicons/vue/solid';
import { getWatchTime, setWatchTime, removeWatchTime } from '@/util/watchTime';

const props = defineProps<{
  vid: string;
  pageId: number;
  outroTime?: number;
}>();

const emit = defineEmits(['finished']);
const nextButton = ref(false);
const player = ref();
const consoleStyles =
  'background-color: blue; color: white; padding: 2px 4px; border-radius: 4px; font-weight: bold; font-family: sans-serif; margin: 10px 0;';

const watchTime = getWatchTime(props.pageId);

watchEffect(() => {
  if (player.value) {
    player.value.player.on('ready', () => {
      console.debug('%cPlayer', consoleStyles, 'Ready');
      // Set the current time to the saved time
      player.value.player.currentTime = watchTime?.watchTime || 0;
    });
    player.value.player.on('timeupdate', () => {
      console.debug(
        '%cPlayer',
        consoleStyles,
        'Time Update:',
        Math.round((player.value.player.currentTime + Number.EPSILON) * 100) /
          100,
        'Duration:',
        player.value.player.duration,
        'Ended:',
        player.value.player.ended,
      );
      setWatchTime(
        props.pageId,
        player.value.player.currentTime,
        player.value.player.duration,
      );
      nextButton.value =
        (props.outroTime &&
          player.value.player.currentTime >= props.outroTime) ||
        false;
    });
    player.value.player.on('ended', finishPlayback);
  }
  if (props.vid) {
    console.debug('%cPlayer', consoleStyles, 'Video ID Changed:', props.vid);
  }
});

const finishPlayback = () => {
  console.debug('%cPlayer', consoleStyles, 'Playback Finished');
  removeWatchTime(props.pageId);
  // Emit the finished event
  emit('finished');
};
</script>

<style scoped>
@reference "@/index.css";

/* .next-button fills up with color from left to right on hover */
.next-button {
  @apply bg-linear-to-l from-primary-500 via-black to-black;
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 0.5s;
}
.next-button:hover {
  background-position: right bottom;
}
</style>
