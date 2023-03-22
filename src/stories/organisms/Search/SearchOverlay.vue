<template>
  <SearchIcon class="w-6 h-6 text-white cursor-pointer" @click="open = true" />

<Teleport to="body">
  <Transition name="modal">
    <WindowLayout v-if="open" :show="open" class="fixed top-0 left-0 w-full h-full transition-all" @click="open = false">
      <XIcon class="absolute top-20 right-20 w-6 h-6 text-white cursor-pointer z-[100]" @click="open = false" />  
      <SearchWindow transparent is-overlay  @close="open = false" />
    </WindowLayout>
  </Transition>
</Teleport>
</template>

<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import { SearchIcon, XIcon } from '@heroicons/vue/outline';
import { onMounted, onUnmounted, ref } from 'vue';
import SearchWindow from './SearchWindow.vue';
const open = ref(false);

const keydownCallback = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    open.value = false;
  }
  // ctrl + K to open search
  if (e.key === 'k' && e.ctrlKey) {
    e.preventDefault();
    open.value = true;
  }
};

onMounted(() => {
  document.addEventListener('keydown', keydownCallback);
});

onUnmounted(() => {
  document.removeEventListener('keydown', keydownCallback);
})
</script>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from,
.modal-leave-to {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>