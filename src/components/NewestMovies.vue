<template>
	<Poster
		v-for="movie in movies.slice(0, 3)"
		:link="'/media/' + movie.id"
		:poster="movie.thumbnail"
		:title="movie.title"
		:subtitle="movie.year.toString()"
		:series="movie.series"
	/>
</template>

<script setup lang="ts">
import Poster from "./Poster.vue";
import { error_movie, get_all_movies, Movie } from "../api_handler";

const movies: Movie[] = await get_all_movies()
	.then((movies) => {
		return movies;
	})
	.catch((err) => {
		console.log(err);
		const movies: Movie[] = [
            error_movie("Could not get movie")
		];
		return movies;
	});
</script>

<style lang="scss"></style>
