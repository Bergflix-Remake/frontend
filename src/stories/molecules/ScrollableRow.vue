<template>
  <div class="relative overflow-hidden">
    <div
ref="scrollContainer" class="flex flex-row w-full space-x-4 overflow-x-hidden rounded-lg py-14" @wheel="handleWheel"
      @scroll="handleScroll">
      <slot />
    </div>
    <div
v-if="leftScrollButton" id="fade-l"
      class="absolute top-0 left-0 z-20 w-10 h-full pointer-events-none bg-gradient-to-r from-black to-transparent">
    </div>
    <div
v-if="rightScrollButton" id="fade-r"
      class="absolute top-0 right-0 z-20 w-10 h-full pointer-events-none bg-gradient-to-l from-black to-transparent">
    </div>
    <Transition name="right">
      <BadgeButton
v-if="rightScrollButton" class="absolute transform -translate-y-1/2 top-1/2 right-1 lg:right-5"
        :icon="ArrowNarrowRightIcon" @click="() => scrollContainer!.scrollBy({ left: 300, behavior: 'smooth' })" />
    </Transition>
    <Transition name="left">
      <BadgeButton
v-if="leftScrollButton" class="absolute transform -translate-y-1/2 top-1/2 left-1 lg:left-5"
        :icon="ArrowNarrowLeftIcon" @click="() => scrollContainer!.scrollBy({ left: -300, behavior: 'smooth' })" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import BadgeButton from "@atoms/BadgeButton.vue";
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
  const el = scrollContainer.value;
  if (el == null) return;
  leftScrollButton.value = el.scrollLeft > 0;
  rightScrollButton.value = el.scrollLeft + el.clientWidth < el.scrollWidth;
};
onMounted(() => {
  handleScroll();
  window.addEventListener('resize', handleScroll);
});



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
