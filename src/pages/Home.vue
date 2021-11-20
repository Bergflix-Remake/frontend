<template>
	<title>Home | Bergflix</title>
		<section class="h-screen" id="image-section">
			<div class="flex flex-col content-end h-full bg-gradient-to-t from-dark to-transparent">
				<Suspense>
					<template #default>
						<BannerMovie/>
					</template>
					<template #error>
						<div class="text-center">
							<h1 class="text-5xl text-white">Error</h1>
							<p class="text-2xl text-white">Something went wrong</p>
						</div>
					</template>
					<template #fallback>
						<div class="w-1/2 ml-3 mt-28">
							<svg viewBox="0 0 529 295" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="loading-skelleton-banner-movie">
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-1" id="title-image" width="342" height="106" rx="24"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-2" id="info-row-1" x="6" y="115" width="250" height="21" rx="7"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-3" id="info-row-2" x="6" y="142" width="250" height="21" rx="7"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-4" id="button-1" x="6" y="268" width="93" height="27" rx="9"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-5" id="button-2" x="104" y="268" width="93" height="27" rx="9"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-6" id="button-3" x="202" y="268" width="93" height="27" rx="9"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-7" id="description-row-1" x="5" y="173" width="524" height="25" rx="12.5"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-8" id="description-row-2" x="6" y="201" width="350" height="25" rx="12.5"/>
									<rect class="text-gray-800 text-opacity-50 fill-current loading-animation-9" id="description-row-3" x="5" y="229" width="414" height="25" rx="12.5"/>
								</g>
							</svg>
						</div>
					</template>
				</Suspense>
				<!-- Movie Row -->
				<MovieRow>
					<Suspense>
						<template #default>
							<NewestMovies/>
						</template>
						<template #fallback>
							<div class="flex flex-row">
								<svg class="mr-5" width="384" height="216" viewBox="0 0 384 216" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect class="text-opacity-50 fill-current text-darker loading-animation-1" width="384" height="216" rx="12"/>
								</svg>
								<svg class="mr-5" width="384" height="216" viewBox="0 0 384 216" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect class="text-opacity-50 fill-current text-darker loading-animation-2" width="384" height="216" rx="12"/>
								</svg>
								<svg class="mr-5" width="384" height="216" viewBox="0 0 384 216" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect class="text-opacity-50 fill-current text-darker loading-animation-3" width="384" height="216" rx="12"/>
								</svg>
							</div>
						</template>
					</Suspense>
					<IconPoster :link="'/library/'"/>
				</MovieRow>
			</div>
		</section>
</template>
<script lang="ts" setup>
import { Suspense } from "vue";
import MovieRow from "../components/MovieRow.vue";
import IconPoster from "../components/IconPoster.vue";
import BannerMovie from "../components/BannerMovie.vue";
import NewestMovies from "../components/NewestMovies.vue";

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
#image-section {
	background-image: url("https://cdn.bergflix.de/imgs/captain_pineapple.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh;
}
#triggerbottom {
	transition: transform 0.5s ease;
}
// An animation that animates the background to be pulsing with opacity
@keyframes loading-animation {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}
</style>
