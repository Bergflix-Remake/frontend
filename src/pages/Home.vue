<template>
	<section class="h-screen image-section">
		<div
			class="
				bg-gradient-to-t
				from-background_dark
				to-transparent
				w-full
				h-full
				relative
			"
		>
			<div class="flex flex-col space-y-5 absolute bottom-0 p-5">
				<img
					src="/images/pineapple-text.png"
					alt="Captain Pineapple"
					class="w-96 mb-7"
				/>
				<div class="flex flex-row text-white flex-wrap max-w-md">
					<p id="year" class="mr-5">{{ year }}</p>
					<p class="border-2 px-1 rounded-lg border-white mr-5">{{ age }}</p>
                    <p class="italic mr-5">{{length}}</p>
                    <div class="border-l-2 border-gray-500 mr-5"></div>
                    <p class="font-bold mr-5">{{ genre }}</p>
                    <p class="text-primary-100 font-extrabold ml-0 mr-5">{{ rating }} positive Bewertungen</p>
                    <div class="border-l-2 border-gray-500 mr-5"></div>
                    <p v-if="original" class="font-bold text-white">Bergflix<span class="text-primary-100">. Original</span></p>
				</div>
                <div class="flex flex-col max-w-md text-white">
                    <p class="my-10 italic text-gray-600">{{ description }}</p>
                    <button class="p-2 rounded-lg bg-gray-900 bg-opacity-50 shadow-lg hover:bg-primary-200 hover:bg-opacity-30">Watch Now</button>
                    <div id="spacer" class="my-5"></div>
                </div>
			</div>
		</div>
	</section>
	<section class="h-screen bg-background_dark">
		<div class="w-full h-full"></div>
	</section>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
const age = ref("18+");
const length = ref("34 min");
const genre = ref("Comedy");
const rating = ref("94%");
const original = ref(true);
const description = ref(
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);
</script>
<style lang="scss">
.image-section {
	background-image: url("https://cdn.bergflix.de/imgs/captain_pineapple.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh;
}
</style>
