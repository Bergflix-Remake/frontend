<template>
    <div
    @click="$router.push(link)"
    tabindex="0"
    id="poster"
    class="mb-5 mr-5 transition-all transform bg-center bg-no-repeat bg-cover shadow-lg cursor-pointer hover:shadow-2xl group focus:border-4 hover:border-4 hover:scale-105 aspect-16/9 w-96 rounded-xl" 
    :style="'background-image: url(\'' + poster +'\')'">
        <div id="poster__content" class="w-full h-full p-10 opacity-0 bg-opacity-80 bg-dark group-hover:opacity-100 group-focus:opacity-100 rounded-xl">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-lg font-bold text-center text-white">{{ title }}</h1>
                <p v-if="series" class="text-sm italic font-thin text-center text-gray-300">{{ series.title }}</p>
                <p class="text-sm font-thin text-center text-primary-100">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { get_series, Series } from '../api_handler';

const props = defineProps({
    poster: {
        type: String,
        default: 'https://cdn.bergflix.de/imgs/Background/1.png'
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    series: {
        type: Object as () => Series,
        required: false,
    }
})

const series = ref();

if (props.series) {
    series.value = await get_series(props.series.id)
        .then(series => {
            return series;
        });
}
</script>

<style lang="scss">

</style>