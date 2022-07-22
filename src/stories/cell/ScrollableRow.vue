<template>
  <div class="relative overflow-hidden">
    <div
      ref="scrollContainer"
      @wheel="handleWheel"
      @scroll="handleScroll"
      class="flex flex-row p-2 w-full space-x-4 overflow-x-hidden rounded-lg"
    >
      <slot />
    </div>
    <Transition name="right">
      <BadgeButton
        v-if="rightScrollButton"
        @click="() => scrollContainer!.scrollBy({ left: 300, behavior: 'smooth' })"
        class="absolute top-1/2 right-1 lg:right-5 transform -translate-y-1/2"
        :icon="ArrowNarrowRightIcon"
      />
    </Transition>
    <Transition name="left">
      <BadgeButton
        v-if="leftScrollButton"
        @click="() => scrollContainer!.scrollBy({ left: -300, behavior: 'smooth' })"
        class="absolute top-1/2 left-1 lg:left-5 transform -translate-y-1/2"
        :icon="ArrowNarrowLeftIcon"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import BadgeButton from "../atoms/BadgeButton.vue";
import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from "@heroicons/vue/outline";

const scrollContainer: Ref<HTMLElement | undefined> = ref();
const leftScrollButton = ref(false);
const rightScrollButton = ref(true);

const handleWheel = (e: WheelEvent) => {
  e.preventDefault();
  const el = scrollContainer.value!;
  el.scrollBy({
    left: e.deltaY * 0.7,
    top: 0,
    behavior: "auto",
  });
};

const handleScroll = () => {
  const el = scrollContainer.value!;
  leftScrollButton.value = el.scrollLeft > 0;
  rightScrollButton.value = el.scrollLeft + el.clientWidth < el.scrollWidth;
};
onMounted(handleScroll);
</script>

<style>
.right-enter-from,
.right-leave-to {
  transform: translate(200%, 0);
  opacity: 0;
}

.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.left-enter-from,
.left-leave-to {
  transform: translate(-200%, 0);
  opacity: 0;
}
</style>
