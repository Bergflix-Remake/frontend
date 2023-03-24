<route lang="yaml">
  name: countdown
  meta:
    hideNavigation: true
</route>

<template>
  <WindowLayout>
    <Window>
      <Subtitle>
        <Logo long>Release</Logo>
      </Subtitle>
      <Title
        >{{ countdownString }}<span class="text-primary-500">.</span></Title
      >
    </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import Title from '@/stories/atoms/Title/Title.vue';
import { ref } from 'vue';
import { releaseTime } from '@/util/locked';
import Window from '@/stories/atoms/Window/Window.vue';
import Logo from '@/stories/atoms/Logo.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import { useRouter } from 'vue-router';

const countdownString = ref('0d 0h 0m 0s');

const router = useRouter();

const countdown = () => {
  const now = new Date();
  const time = new Date(releaseTime).getTime() - now.getTime();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  countdownString.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (time <= 0) {
    // Reload
    window.location.reload();
  }
};

setInterval(countdown, 1000);
countdown();
</script>
