<template>
    <div class="flex justify-center items-center">
        <img ref="lazyRef" v-bind="rest">
        <div v-if="state === 'loading'" class="flex flex-col items-center justify-center text-delorean-500">
            <Spinner animation="bricks" />
            <p class="mt-5">{{ alt }}</p>
        </div>
        <div v-if="state === 'error'" class="flex flex-col items-center justify-center text-red-500">
            <ExclamationCircleIcon class="w-10 h-10 " />
            <p>Fehler beim Laden des Bildes.</p>
        </div>

    </div>
</template>


<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/outline';
import { ref, toRefs } from 'vue';
import { useLazyload } from 'vue3-lazyload';
import Spinner from '../atoms/Spinner.vue';

interface IProps {
    src: string;
    alt?: string;
}

const props = defineProps<IProps>();

const {src, ...rest} = toRefs(props);

type State = "ready" | "loading" | "error";

const state = ref<State>("ready");

const lazyRef = useLazyload(src, {
    lifecycle: {
        loading: () => {
            console.debug('image loading', src.value)
            state.value = "loading";
        },
        error: () => {
            console.debug('image error', src.value)
            state.value = "error";
        },
        loaded: () => {
            console.debug('image loaded', src.value)
            state.value = "ready";
        }
    }
});

</script>