<template>
	<!-- Dialog -->
	<TransitionRoot appear :show="showDialog" as="template"
	>
		<Dialog as="div" @close="toggleDialog" :open="showDialog">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
				<TransitionChild
					as="template"
					enter="duration-300 ease-out"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="duration-200 ease-in"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<DialogOverlay class="fixed inset-0" />
				</TransitionChild>

				<span class="inline-block h-screen align-middle" aria-hidden="true">
					&#8203;
				</span>

				<TransitionChild
					as="template"
					enter="duration-300 ease-out"
					enter-from="opacity-0 scale-95"
					enter-to="opacity-100 scale-100"
					leave="duration-200 ease-in"
					leave-from="opacity-100 scale-100"
					leave-to="opacity-0 scale-95"
				>
					<div
					class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl"
					>
					<DialogTitle
						as="h3"
						class="text-lg font-medium leading-6 text-gray-300"
					>
						Description
					</DialogTitle>
					<div class="mt-2">
						<p class="text-sm text-gray-500">
						{{ fullDescription }}
						</p>
					</div>

					<div class="mt-4">
						<button
						type="button"
						class="inline-flex justify-center px-4 py-2 text-sm font-bold text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
						@click="toggleDialog"
						>
						Close <span class="font-bold text-primary-100">.</span>
						</button>
					</div>
					</div>
				</TransitionChild>
				</div>
			</div>
		</Dialog>
  	</TransitionRoot>
	<!-- Dialog -->
	<section class="relative h-screen transition-transform image-section">
	<div class="h-full bg-gradient-to-t from-background_dark to-transparent">
		<div id="slide-track" class="absolute w-full h-full transition-transform slide-track -bottom-80">
			<div
				class="relative w-full" :class="'opacity-' + imageOpacity"
			>
				<div class="flex flex-col p-5 space-y-5 ">
					<img
						src="/images/pineapple-text.png"
						alt="Captain Pineapple"
						class="w-96 mb-7"
					/>
					<div class="flex flex-row flex-wrap max-w-md text-white">
						<p id="year" class="mr-5">{{ year }}</p>
						<p class="px-1 mr-5 border-2 border-white rounded-lg">{{ age }}</p>
							<p class="mr-5 italic">{{length}}</p>
							<div class="mr-5 border-l-2 border-gray-500"></div>
							<p class="mr-5 font-bold">{{ genre }}</p>
							<p class="ml-0 mr-5 font-light text-primary-100">{{ rating }} positive Bewertungen</p>
							<div class="mr-5 border-l-2 border-gray-500"></div>
							<p v-if="original" class="font-bold text-white">Bergflix<span class="text-primary-100">. Original</span></p>
					</div>
						<div class="flex flex-col max-w-md text-white">
							<p class="inline my-10 italic text-gray-600">{{ description }}<p tabindex="0" @click="toggleDialog" v-if="showMore" class="inline p-1 ml-2 text-xs not-italic font-bold tracking-wider text-white uppercase bg-gray-800 rounded cursor-pointer w-min hover:bg-gray-700">more</p></p>
							<button id="watch_button" class="p-2 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg w-36 hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0">Watch Now</button>
							<div id="spacer" class="my-5"></div>
						</div>
				</div>
			</div>
			<!-- Movie Row -->
			<div class="z-30 flex flex-row space-x-4 p-7" @mouseenter="moveUp" @mouseleave="moveDown" @focusin="moveUp" @focusout="moveDown">
				<div tabindex="0" id="poster" class="transition-all transform bg-center bg-no-repeat bg-cover shadow-sm group focus:border-4 hover:border-4 hover:scale-105 aspect-16/9 w-96 rounded-xl" v-for="movie in otherMovies.slice(0, 3)" :style="'background-image: url(\'' + movie['poster'] +'\')'">
					<div id="poster__content" class="w-full h-full p-10 opacity-0 bg-opacity-80 bg-background_dark group-hover:opacity-100 group-focus:opacity-100 rounded-xl">
						<div class="flex flex-col items-center justify-center">
							<h1 class="text-lg font-bold text-center text-white">{{ movie['title'] }}</h1>
							<p class="text-sm font-thin text-center text-primary-100">{{ movie['year'] }}</p>
							<button id="watch_button" class="p-2 mt-6 text-white bg-gray-900 bg-opacity-50 rounded-lg shadow-lg w-36 hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0">Watch Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Dialog, DialogDescription, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";


const year = ref(new Date().getFullYear());
const age = ref("18+");
const length = ref("34 min");
const genre = ref("Comedy");
const rating = ref("94%");
const original = ref(true);
const description = ref(
	"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);
let showMore = ref(false);
let fullDescription = ref(description.value);
let showDialog = ref(false);
let imageOpacity = ref(100)
let otherMovies = [
	{
		title: "The Taxi Driver",
		year: "2020",
		age: "18+",
		length: "34 min",
		genre: "Comedy",
		rating: "94%",
		original: true,
		description:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		poster: "https://cdn.bergflix.de/imgs/taxidriver.jpg"
	},
	{
		title: "The Taxi Driver",
		year: "2020",
		age: "18+",
		length: "34 min",
		genre: "Comedy",
		rating: "94%",
		original: true,
		description:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		poster: "https://cdn.bergflix.de/imgs/taxidriver.jpg"
	},
	{
		title: "The Taxi Driver",
		year: "2020",
		age: "18+",
		length: "34 min",
		genre: "Comedy",
		rating: "94%",
		original: true,
		description:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		poster: "https://cdn.bergflix.de/imgs/taxidriver.jpg"
	},
]

// if description is longer than 500 characters, cut it down to 500 characters
if (description.value.length > 500) {
	// remove everything since the last space
	description.value = description.value.substring(0, description.value.lastIndexOf(" "));
	// add ... at the end
	description.value += "...";
	showMore.value = true;
}

function toggleDialog() {
	showDialog.value = !showDialog.value;
}

function moveUp() {
	// add the up class to the element with the slide-track id
	let slideTrack = document.getElementById("slide-track")
	slideTrack?.classList.add("up");
	// lower imageOpacity to 50
	imageOpacity.value = 25;
	// remove focus from current focused element
	(document.activeElement as HTMLElement).blur();
}

function moveDown() {
	// remove the up class from the element with the slide-track id
	let slideTrack = document.getElementById("slide-track")
	slideTrack?.classList.remove("up");
	// raise imageOpacity to 100
	imageOpacity.value = 100;
	(document.activeElement as HTMLElement).blur();
}

// When the user clicks the down arrow key on the keyboard, call moveUp() and focus the first element with the poster id
// If the user clicks the up arrow key on the keyboard, call moveDown()
document.addEventListener("keydown", (event) => {
	if (event.keyCode === 40) {
		moveUp();
		document.getElementById("poster")?.focus();
	} else if (event.keyCode === 38) {
		moveDown();
		document.getElementById("watch_button")?.focus();
	}
});


</script>
<style lang="scss">
body {
	overflow-y: hidden;
}
.image-section {
	background-image: url("https://cdn.bergflix.de/imgs/captain_pineapple.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh;
}
#triggerbottom {
	transition: transform 0.5s ease;
}
.up {
	transform: translateY(-150px);
}
</style>
