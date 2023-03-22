<template>
  <span
    class="w-12 aspect-square rounded-full p-2 text-white flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-all hover:scale-105 h-min"
    :class="`bg-${color}-500 hover:bg-${color}`"
    @click="$emit('click')"
  >
    <component :is="icon" v-if="icon" class="w-8 h-8 drop-shadow-xl" />
  </span>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  icon: {
    type: null,
    required: false,
  },
  color: {
    type: String,
    default: "primary",
  },
});
// eslint-disable-next-line no-undef
defineEmits(["click"]);
</script>
