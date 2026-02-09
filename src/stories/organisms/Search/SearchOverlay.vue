<template>
  <div class="w-full h-full flex-row justify-end hidden md:flex items-center">
    <div
      class="relative overflow-hidden h-10 cursor-pointer text-white bg-black rounded-lg w-10 hover:w-32 transition-all duration-1000 flex items-center justify-end reveal-anim"
      @click="open = true"
    >
      <p
        class="absolute left-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
      >
        <kbd>Ctrl</kbd> + <kbd>K</kbd>
      </p>
      <SearchIcon class="aspect-square h-full p-2 bg-black z-10" />
    </div>
    <Teleport to="body">
      <Transition name="modal">
        <WindowLayout
          v-if="open"
          :show="open"
          class="fixed top-0 left-0 w-full h-full transition-all"
          @click="open = false"
        >
          <XIcon
            class="absolute top-20 right-20 w-6 h-6 text-white cursor-pointer z-100"
            @click="open = false"
          />
          <SearchWindow transparent is-overlay @close="open = false" />
        </WindowLayout>
      </Transition>
    </Teleport>
  </div>
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
});
</script>

<style>
@reference "@/index.css";

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

kbd {
  @apply bg-clean-dark-500 ring-1 ring-delorean-800 text-white rounded-sm px-1;
}

@keyframes slide-reveal {
  0% {
    width: 2.5rem;
  }
  25% {
    width: 8rem;
  }
  75% {
    width: 8rem;
  }
  100% {
    width: 2.5rem;
  }
}

.reveal-anim,
.reveal-anim:hover {
  animation: slide-reveal 5s ease-in-out;
}
</style>
