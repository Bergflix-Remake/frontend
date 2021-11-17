<template>
    <Poster
        v-for="movie in movies"
        :link="'/watch/' + movie.id"
        :poster="movie.thumbnail"
        :title="movie.title"
        :subtitle="movie.year.toString()"
        :series="movie.series?.title"
    />
</template>

<script setup lang="ts">
import Poster from "./Poster.vue";
import { get_all_movies, Movie } from "../api_handler";

const movies: Movie[] = await get_all_movies().then((movies) => {
	return movies;
});
</script>

<style lang="scss"></style>
