<template>
    <router-link :to="'/watch/' + movie_id">
        <div class="flex flex-row w-full p-2 rounded-md h-28 bg-dark">
            <img class="hidden h-full rounded-sm aspect-16/9 2xl:block" :src="movie.thumbnail" alt="">
            <div id="content" class="flex flex-col ml-5 space-y-2">
                <h1 class="text-lg font-bold text-white">{{ movie.title }}</h1>
                <p class="text-sm italic font-thin text-gray-300">{{ movie.duration }}</p>
                <p class="font-mono text-primary-100">{{ movie.series.seasons[0] }}</p>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">import { get_movie, get_movie_season } from '../api_handler';

const props = defineProps({
    movie_id: {
        type: Number,
        required: true
    },
});
const movie = await get_movie(props.movie_id).then(movie => {
    return movie;
});
</script>

<style lang="scss">

</style>