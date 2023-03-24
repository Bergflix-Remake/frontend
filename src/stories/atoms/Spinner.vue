<template>
  <div class="relative">
    <div :class="`dot-${animation}`" />
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
// eslint-disable-next-line no-undef
defineProps({
  animation: {
    type: String as PropType<
      | "elastic"
      | "pulse"
      | "flashing"
      | "collision"
      | "revolution"
      | "carousel"
      | "typing"
      | "windmill"
      | "bricks"
      | "floating"
      | "fire"
      | "spin"
      | "falling"
      | "stretching"
    >,
    default: "windmill",
  },
});
</script>
