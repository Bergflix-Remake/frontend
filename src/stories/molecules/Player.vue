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

const props = defineProps<{
  vid: string;
  pageId: number;
  outro_time?: number;
}>();

const emit = defineEmits(['finished']);
const nextButton = ref(false);
const player = ref();
const consoleStyles =
  'background-color: blue; color: white; padding: 2px 4px; border-radius: 4px; font-weight: bold; font-family: sans-serif; margin: 10px 0;';
watchEffect(() => {
  if (player.value) {
    player.value.player.on('ready', () => {
      // Check if there is a watchtime saved in localStorage
      const watchTime = localStorage.getItem(`${props.pageId}-watchTime`);
      if (watchTime) {
        // If there is, set the video to that time
        player.value.player.currentTime = Number(watchTime);
        // And remove the watchtime from localStorage
        localStorage.removeItem('watchTime');
      }
    });
    player.value.player.on('timeupdate', () => {
      console.debug(
        '%cPlayer',
        consoleStyles,
        'Time Update:',
        Math.round((player.value.player.currentTime + Number.EPSILON) * 100) / 100,
        'Duration:',
        player.value.player.duration,
        'Ended:',
        player.value.player.ended
      );
      // Save the current time to localStorage
      localStorage.setItem(
        `${props.pageId}-watchTime`,
        player.value.player.currentTime
      );
      nextButton.value = props.outro_time && (player.value.player.currentTime >= props.outro_time) || false
    });
    player.value.player.on('ended', finishPlayback);
  }
  if (props.vid) {
    console.debug('%cPlayer', consoleStyles, 'Video ID Changed:', props.vid);
  }
});

const finishPlayback = () => {
  console.debug('%cPlayer', consoleStyles, 'Playback Finished');
  // Remove the watchtime from localStorage
  localStorage.removeItem(`${props.pageId}-watchTime`);
  // Emit the finished event
  emit('finished');
};
</script>


<style scoped>
/* .next-button fills up with color from left to right on hover */
.next-button {
  @apply bg-gradient-to-l from-primary-500 via-black to-black ;
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 0.5s;
}
.next-button:hover {
  background-position: right bottom;
}
</style>