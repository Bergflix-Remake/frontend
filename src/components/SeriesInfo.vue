<template>
<div
    class="relative w-full transition-opacity"
    >
    <div class="flex flex-col px-10 space-y-5 ">
        <img
            v-if="series.title_image"
            :src="series.title_image"
            :alt="series.title"
            class="w-96 mb-7"
        />
        <h1 v-else-if="series.title" class="text-5xl font-black text-white">{{ series.title }}</h1>
        <h1 v-else class="text-5xl font-black text-white">{{ series.title }}</h1>
        <div class="flex flex-row flex-wrap max-w-xl text-white">
            <p id="year" class="mr-5">{{ series.year}}</p>
            <p class="px-1 mr-5 border-2 rounded border-light text-primary-100">{{ series.age }}</p>
                <p class="mr-5 italic">{{ series.videos.length  }} Episodes</p>
                <div class="mr-5 border-l-2 border-light"></div>
                <p class="mr-5 font-bold">{{ series.genre }}</p>
        </div>
        <div class="flex flex-col max-w-md text-white">
            <p class="inline my-10 italic text-gray-400">{{ series.description }}<p v-if="show_more" tabindex="0" class="inline p-1 ml-2 text-xs not-italic font-bold tracking-wider text-white uppercase bg-gray-800 rounded cursor-pointer w-min hover:bg-gray-700">more</p></p>
            <div class="flex flex-row space-x-5">
                <button @click="$router.push('/watch/' + series.id )" id="watch_button" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><PlayIcon class="w-5 mr-2 text-white"/>Watch Now</button>
                <button @click="$router.push('/media/' + series.id )" id="watch_button" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><CursorClickIcon class="w-5 mr-2 text-white"/>More Info</button>
            </div>
            <div id="spacer" class="my-5"></div>
        </div>
    </div>
</div>

</template>

<script setup lang="ts">
import { get_series } from '../api_handler';
import { PlayIcon, CursorClickIcon } from "@heroicons/vue/outline";
import { onBeforeRouteLeave } from 'vue-router';
import { Series } from '../types/Series';

const props = defineProps({
    series_id: {
        type: Number,
        required: true
    }
})

var series: Series = await get_series(props.series_id).then((series) => {
    return series
});
var show_more = false;
const full_description = series.description
// if the description is longer than 100 characters, truncate it and set show_more to true
if (full_description.length > 500) {
    series.description = series.description.substring(0, 500) + "...";
    show_more = true;
}
</script>

<style lang="scss">

</style>