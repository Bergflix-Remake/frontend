<template>
    <details v-if="error" class="text-red-500 m-5 border-red-500 border-2 p-3 cursor-pointer relative rounded-xl">
        <summary>Es ist ein Fehler aufgetreten!
            <ExclamationCircleIcon class="w-4 h-4 inline mb-1" />
        </summary>
        <span class="font-mono">{{ error.error.status }}</span> {{ error.error.name }} <br />
        <span v-if="error.error.details && error.error.details.errors" class="text-xs">
            <span v-for="e in error.error.details.errors" :key="e">
                {{ e.message }}
            </span>
        </span>
        <span v-else class="text-xs">{{ error.error.message }}</span>
        <p class="max-w-md">
            Wenn du uns helfen möchtest, melde den Fehler bitte auf unserem <Href to="https://bflx.de/discord">Discord</Href>
        </p>
        <!-- Copy button -->
        <button
            class="absolute top-0 right-0 m-1 p-1 rounded bg-gray-800 hover:bg-gray-600 text-clean-white"
            @click="copy()"
        >
            <ClipboardCopyIcon class="w-4 h-4" />
        </button>
    </details>
</template>

<script setup lang="ts">
import { ErrorResponse } from '@/models/custom';
import Button from '@/components/atoms/Button.vue';
import { ClipboardCopyIcon, ExclamationCircleIcon } from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';
import Href from '../Href.vue';

const route = useRoute();

const props = defineProps<{
    error: ErrorResponse | null;
    action?: string;
}>();

const copy = () => {
    const data = {
        action: props.action || "Unknown",
        path: route.fullPath,
        error: props.error,
    }
    navigator.clipboard.writeText(`\`\`\`json\n${JSON.stringify(data, null, 2)}\`\`\``);
};
</script>