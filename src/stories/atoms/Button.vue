<template>
  <button
    class="inline p-2 ease-in-out cursor-pointer h-min group transform transition-all text-white rounded shadow-md"
    :class="classString"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "solid" | "outline" | "ghost",
    default: "solid",
  },
  to: {
    type: String,
  },
});

defineEmits(["click"]);

let classString = "";

switch (props.type) {
  case "solid":
    classString = `bg-${props.color}-500 hover:bg-${props.color}-700`;
    break;
  case "outline":
    break;
  case "ghost":
}
</script>

<style></style>
