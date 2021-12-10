<template>
<TransitionRoot  :show="show" as="template"
>
    <Dialog as="div" @close="toggleDialog" :open="show">
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="min-h-screen px-4 text-center">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0" />
            </TransitionChild>
            <span class="inline-block h-screen align-middle" aria-hidden="true">
                &#8203;
            </span>
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl"
                >
                <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-300"
                >
                    {{ title }}
                </DialogTitle>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">
                        {{ description }}
                    </p>
                </div>
                <div class="flex flex-row mt-4 space-x-2">
                    <button
                    v-for="button in buttons.splice(0, 3)"
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="$router.push(button.action)"
                    >
                    {{ button.text }} <span class="font-bold text-primary-100">.</span>
                    </button>
                    <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="toggleDialog"
                    >
                    Close <span class="font-bold text-primary-100">.</span>
                    </button>
                </div>
                </div>
            </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>

</template>

<script setup lang="ts">
import { ref } from 'vue';


const show = ref(true)

interface Button{
    text: string,
    action: string
}

// Define the props title: string, description: string, and buttons: string[]
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    buttons: {
        type: Array as () => Button[],
        required: true
    },
})



function closeDialog() {
    show.value = false
}

function toggleDialog() {
    show.value = !show.value
}

function openDialog() {
    show.value = true
}


</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>