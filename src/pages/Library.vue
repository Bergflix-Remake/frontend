<template>
	<section
		class="w-screen h-screen bg-cover"
		style="
			background-image: url('https://cdn.bergflix.de/imgs/Background/4.png');
		"
	>
		<!-- A big title with the text "All Movies" -->
		<div
			class="flex flex-col items-center justify-center h-screen overflow-y-hidden "
		>
			<div class="text-4xl text-center text-white">
				<span class="font-bold">All {{ filter }}</span>
			</div>
			<Suspense>
				<template #default>
					<div
						id="movies-row"
						class="z-0 flex flex-row flex-wrap items-center justify-center transition-transform md:content-center p-7"
					>
						<Poster
							v-for="movie in movies"
							:link="'/media/' + movie.id"
							:poster="movie.thumbnail ? movie.thumbnail : movie.image"
							:title="movie.title"
							:subtitle="movie.year.toString()"
							:series="movie.series"
						/>
					</div>
				</template>
				<template #fallback>
					<div class="flex flex-row items-center justify-center">
						<svg
							class="mr-5"
							width="384"
							height="216"
							viewBox="0 0 384 216"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								class="text-opacity-50 fill-current text-darker loading-animation-1"
								width="384"
								height="216"
								rx="12"
							/>
						</svg>
						<svg
							class="mr-5"
							width="384"
							height="216"
							viewBox="0 0 384 216"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								class="text-opacity-50 fill-current text-darker loading-animation-2"
								width="384"
								height="216"
								rx="12"
							/>
						</svg>
						<svg
							class="mr-5"
							width="384"
							height="216"
							viewBox="0 0 384 216"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								class="text-opacity-50 fill-current text-darker loading-animation-3"
								width="384"
								height="216"
								rx="12"
							/>
						</svg>
					</div>
				</template>
			</Suspense>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { get_all_movies, get_all_series } from "../api_handler";
import Poster from "../components/Poster.vue";

const route = useRoute();
const router = useRouter();

const filter = route.params.filter;

let movies: any;

if (filter !== "movies" && filter !== "series") {
    router.push("/library/movies")
} else if (filter === "movies") {
    movies = await get_all_movies().then(movies => {return movies});
} else if (filter === "series") {
    movies = await get_all_series().then(series => {return series});
}
</script>

<style lang="scss">
.loading-animation-1 {
	animation: loading-animation 1.5s linear 0s infinite;
}
.loading-animation-2 {
	animation: loading-animation 1.5s linear 0.1s infinite;
}
.loading-animation-3 {
	animation: loading-animation 1.5s linear 0.2s infinite;
}
.loading-animation-4 {
	animation: loading-animation 1.5s linear 0.3s infinite;
}
.loading-animation-5 {
	animation: loading-animation 1.5s linear 0.4s infinite;
}
.loading-animation-6 {
	animation: loading-animation 1.5s linear 0.5s infinite;
}
.loading-animation-7 {
	animation: loading-animation 1.5s linear 0.6s infinite;
}
.loading-animation-8 {
	animation: loading-animation 1.5s linear 0.7s infinite;
}
.loading-animation-9 {
	animation: loading-animation 1.5s linear 0.8s infinite;
}
</style>
