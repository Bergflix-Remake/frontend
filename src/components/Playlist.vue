<template>
<div class="flex-col hidden w-1/4 h-screen p-5 mt-10 ml-2 rounded-md shadow-xl lg:flex bg-darker">
    <div id="header" class="flex flex-row flex-wrap w-full text-white">
        <VideoCameraIcon class="hidden mt-1 h-7 xl:block"/>
        <h1 class="ml-2 text-2xl font-bold">{{ series.title }}</h1>
        <div class="flex flex-row mt-2 ml-auto space-x-3 cursor-pointer">
            <SortAscendingIcon  class="w-7" />
            <SortDescendingIcon class="w-7"/>
        </div>
    </div>
    <div id="info-row" class="flex flex-row flex-wrap w-full space-x-5 text-white">
        <p class="mt-0.5">{{ series.year }}</p>
        <p class="px-1 mr-5 border-2 rounded border-light text-primary-100">{{ series.age }}</p>
        <p class="mt-0.5">{{ series.genre }}</p>
    </div>
    <div class="flex flex-col py-5 space-y-5">
        <PlaylistMovieEntry v-for="movie in series.videos" :movie_id="movie.id"/>
    </div>
</div>
</template>

<script setup lang="ts">
import { VideoCameraIcon, SortAscendingIcon, SortDescendingIcon } from '@heroicons/vue/outline';
import { get_series } from '../api_handler';
import PlaylistMovieEntry from '../components/PlaylistMovieEntry.vue';

const props = defineProps({
    series_id: {
        type: Number,
        required: true
    },
});

const series = await get_series(props.series_id)
    .then(series => {
        return series;
    });
</script>

<style lang="scss">

</style>