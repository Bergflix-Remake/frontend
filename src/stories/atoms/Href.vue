<template>
  <a :href="to" class="link" rel="noopener noreferrer" target="_blank">
    <slot />
    <ExternalLinkIcon class="icon" />
  </a>
</template>
<script setup lang="ts">
import { ExternalLinkIcon } from '@heroicons/vue/outline';
defineProps<{
  to: string;
}>();
</script>
