<template>
<div class="flex flex-row flex-wrap items-center justify-center w-full my-20">
    <Poster v-for="movie in movies" :name="movie.attributes.title"
    :subtitle="movie.attributes.series ? movie.attributes.series.data.attributes.Title : movie.attributes.rating + ' stars'"
    :image="`https://api.bergflix.de${movie.attributes.background_image.data.attributes.url}`"
    :link-icon="PencilIcon"
    :link="`/movies/${movie.id}`" />

</div>
</template>

<script setup lang="ts">
import Axios from 'axios';
import { useStore } from 'vuex';
import Poster from '../components/Common/Poster.vue';
import { PencilIcon } from '@heroicons/vue/outline';

const store = useStore();
// get all movies from this endpoint, and write them to a variable called movies: https://api.bergflix.de/api/videos?populate=*
const movies = await Axios.get('https://api.bergflix.de/api/videos?populate=*&locale=' + store.state.language).then((res) => {
    return res.data.data;
});
console.log(movies);

</script>

<style lang="scss">

</style>