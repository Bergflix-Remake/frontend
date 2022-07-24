<template>
  <button
    class="inline-flex items-center transition-all ease-in-out transform rounded cursor-pointer h-min group w-max"
    :class="classString"
    @click="$emit('click')"
  >
    <component v-if="icon" :is="icon" class="inline w-6 h-6 mr-1" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  type: {
    type: String as () => "solid" | "outline" | "ghost",
    default: "solid",
  },
  icon: {
    type: null,
    required: false,
  },
});

defineEmits(["click"]);

let classString = "";

switch (props.type) {
  case "solid":
    classString = `text-white bg-${props.color}-500 hover:bg-${props.color}-400 shadow-md hover:shadow-lg p-2`;
    break;
  case "outline":
    classString = `text-white border-${props.color}-500 hover:border-${props.color}-400 hover:bg-${props.color}-400 border-2 p-2`;
    break;
  case "ghost":
    classString = `text-${props.color}-500 hover:text-${props.color}-400`;
    break;
}
</script>

<style></style>
