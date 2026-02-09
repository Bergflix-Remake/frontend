<template>
  <button
    class="inline-flex items-center justify-center transition-all ease-in-out transform rounded cursor-pointer h-min group disabled:opacity-50 disabled:cursor-not-allowed"
    :class="classString + (width === 'full' ? ' w-full' : ' w-max')"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <component :is="icon" v-if="icon" class="inline w-6 h-6 mr-1" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  width: {
    type: String,
    default: String as () => 'max' | 'full',
  },
  type: {
    type: String as () => 'solid' | 'outline' | 'ghost',
    default: 'solid',
  },
  icon: {
    type: null,
    required: false,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);

let classString = '';

switch (props.type) {
  case 'solid':
    classString = `text-white bg-${props.color}-500 hover:bg-${props.color}-400 shadow-md hover:shadow-lg p-2`;
    break;
  case 'outline':
    classString = `text-white border-${props.color}-500 hover:border-${props.color}-400 hover:bg-${props.color}-400 border-2 p-2`;
    break;
  case 'ghost':
    classString = `text-${props.color}-500 hover:text-${props.color}-400`;
    break;
}
</script>

<style></style>
