<template>
  <span
    class="w-12 aspect-square rounded-full p-2 text-white flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-all hover:scale-105 h-min"
    :class="`bg-${color || 'primary'}-500 hover:bg-${color || 'primary'}-600`"
    @click="$emit('click')"
  >
    <component :is="icon" v-if="icon" class="w-8 h-8 drop-shadow-xl" />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  icon: any;
  color?: string;
}>();

defineEmits(['click']);
</script>
