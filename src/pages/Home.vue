<template>
	<title>Home | Bergflix</title>
		<section class="h-screen" id="image-section">
			<div class="flex flex-col content-end h-full bg-gradient-to-t from-dark to-transparent">
				<Suspense>
					<template #default>
						<BannerMovie/>
					</template>
					<template #fallback>
						<vue-loaders-ball-beat/>
					</template>
				</Suspense>
				<!-- Movie Row -->
				<MovieRow>
					<Suspense>
						<template #default>
							<NewestMovies/>
						</template>
					</Suspense>
					<IconPoster :link="'/library/'"/>
				</MovieRow>
			</div>
		</section>
</template>
<script lang="ts" setup>
import { ref, Suspense, onMounted } from "vue";
import MovieRow from "../components/MovieRow.vue";
import IconPoster from "../components/IconPoster.vue";
import BannerMovie from "../components/BannerMovie.vue";
import NewestMovies from "../components/NewestMovies.vue";

</script>
<style lang="scss">
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
</style>
