<template>
  <div id="avatar">
    <div
      v-if="loading"
      class="bg-clean-dark-500 rounded-full flex items-center justify-center overflow-hidden shadow-md"
      :class="size"
      title="Loading..."
    >
      <Spinner />
    </div>
    <div
      v-else-if="image"
      class="rounded-full bg-cover bg-center cursor-pointer shadow-md hover:shadow-lg"
      :class="size"
      :style="{ 'background-image': `url(${image})` }"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
      @click="$emit('click')"
    ></div>
    <div
      v-else
      :class="size"
      class="bg-clean-dark-500 rounded-full flex items-center justify-center overflow-hidden shadow-md text-red-500"
      title="An error occured"
    >
      <ExclamationCircleIcon class="w-6 h-6" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Spinner from "../atoms/Spinner.vue";
import { PropType } from "vue";
import { ExclamationCircleIcon } from "@heroicons/vue/outline";

// eslint-disable-next-line no-undef
const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg" | "xl">,
    default: "lg",
  },
});

// eslint-disable-next-line no-undef
defineEmits(["mouseenter", "mouseleave", "click"]);

let size = "";
switch (props.size) {
  case "sm":
    size = "w-6 h-6";
    break;
  case "md":
    size = "w-8 h-8";
    break;
  case "lg":
    size = "w-10 h-10";
    break;
  case "xl":
    size = "w-12 h-12";
    break;
  default:
    size = "w-8 h-8";
    break;
}
</script>
