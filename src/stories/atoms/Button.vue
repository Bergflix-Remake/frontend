<template>
  <button
    class="inline p-2 ease-in-out rounded cursor-pointer h-min group hover:shadow-lg hover:-translate-y-1 transform transition-all bg-transparent text-white"
    :style="style"
    :class="classes"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { getColorLuma } from "../../utils";
const props = defineProps({
  color: {
    type: String,
    required: false,
  },
  type: {
    type: String as () => "solid" | "outline" | "ghost",
    default: "solid",
  },
  to: {
    type: String,
  },
  classes: {
    type: String,
    required: false,
  },
});

defineEmits(["click"]);

let style: any = {};
const color = props.color
  ? props.color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, "#$1$1$2$2$3$3")
  : null;
switch (props.type) {
  case "solid":
    if (!color) break;
    if (!color.match(/^#([0-9A-F]{6})$/i)) break;
    style = {
      backgroundColor: color,
      // If the hex color is too dark for black text, make the text white.
      color: getColorLuma(color)! > 0.5 ? "#fff" : "#000",
    };
    break;
  case "outline":
    if (!color) break;
    if (!color.match(/^#([0-9A-F]{6})$/i)) break;
    style = {
      borderColor: color,
      borderWidth: "2px",
      color,
    };
    break;
  case "ghost":
    if (!color) break;
    if (!color.match(/^#([0-9A-F]{6})$/i)) break;
    style = {
      backgroundColor: "transparent",
      color,
    };
}
</script>

<style></style>
