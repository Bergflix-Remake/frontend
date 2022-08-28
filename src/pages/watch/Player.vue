<template>
  <vue-plyr ref='player' :key='vid'>
    <div data-plyr-provider='youtube' :data-plyr-embed-id='vid' />
  </vue-plyr>
</template>
<script setup lang='ts'>
import { defineProps, ref,  watchEffect } from 'vue';

const props = defineProps<{
  vid: string;
  pageId: number;
}>();

 const player = ref();
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
      // Save the current time to localStorage
      localStorage.setItem(`${props.pageId}-watchTime`, player.value.player.currentTime);
    });
  }
  if(props.vid) {
    console.log("%cPlayer","background-color: blue; color: white;","Video ID Changed:", props.vid);
  }
});
</script>
