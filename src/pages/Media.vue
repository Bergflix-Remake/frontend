<template>
<title>{{ movie.title }} | {{ movie.series ? movie.series.title + " | Bergflix" : " Bergflix"}}</title>
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
<section class="flex flex-row flex-wrap w-screen h-screen bg-center bg-cover backdrop-filter backdrop-blur-md lg:flex-nowrap" id="bg" :style="`background-image: url('${movie.series ? movie.series.image : movie.background_image}')`">
    <div
        class="relative w-full mt-56 transition-opacity" :class="'opacity-' + imageOpacity"
    >
        <div class="flex flex-col px-10 space-y-5 ">
            <img
                v-if="movie.series && movie.series.title_image"
                :src="movie.series.title_image"
                :alt="movie.title"
                class="w-96 mb-7"
            />
            <h1 v-else-if="movie.series && movie.series.title" class="text-5xl font-black text-white">{{ movie.series.title }}</h1>
            <h1 v-else class="text-5xl font-black text-white">{{ movie.title }}</h1>
            <div class="flex flex-row flex-wrap max-w-xl text-white">
                <p id="year" class="mr-5">{{ movie.title }}</p>
                <p class="px-1 mr-5 border-2 rounded border-light text-primary-100">{{ movie.age }}</p>
                    <p class="mr-5 italic">{{ movie.duration }}</p>
                    <div class="mr-5 border-l-2 border-light"></div>
                    <p class="mr-5 font-bold">{{ movie.genre }}</p>
            </div>
            <div class="flex flex-row flex-wrap max-w-md text-white">
                <p class="ml-0 mr-5 font-light text-primary-100">{{ movie.rating }} positive Bewertungen</p>
                <div v-if="movie.original" class="mr-5 border-l-2 border-light"></div>
                <p v-if="movie.original" class="font-bold text-white">Bergflix<span class="text-primary-100">. Original</span></p>
            </div>
            <div class="flex flex-col max-w-md text-white">
                <p class="inline my-10 italic text-gray-400">{{ movie.description }}<p tabindex="0" @click="toggleDialog" v-if="showMore" class="inline p-1 ml-2 text-xs not-italic font-bold tracking-wider text-white uppercase bg-gray-800 rounded cursor-pointer w-min hover:bg-gray-700">more</p></p>
                <div class="flex flex-row space-x-5">
                    <button @click="$router.push('/watch/' + movie_id )" id="watch_button" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><PlayIcon class="w-5 mr-2 text-white"/>Watch Now</button>
                </div>
                <div id="spacer" class="my-5"></div>
            </div>
        </div>
    </div>
    <div class="w-full ml-3 mr-10 lg:ml-auto lg:w-1/2" id="items-right">
        <Playlist class="w-full h-4/5" v-if="movie.series" :series_id="movie.series.id"/>
    </div>
</section>

</template>

<script setup lang="ts">
import { Movie, get_movie, Series, get_series } from '../api_handler'
import { Dialog, DialogDescription, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { PlayIcon, CursorClickIcon } from "@heroicons/vue/outline";

import { ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import Playlist from '../components/Playlist.vue';
const fullDescription = ref();
const showMore = ref(false);
const route = useRoute();


const movie_id = Number(route.params.id);
const movie: Movie = await get_movie(movie_id)
.then(async (movie: Movie) =>{
    // document.getElementById("bg")!.style.backgroundImage = `url(${movie.background_image})`;
    fullDescription.value = movie.description;
    // if description is longer than 500 characters, cut it down to 500 characters
    if (movie.description.length > 500) {
        // remove everything since the last space
        movie.description = movie.description.substring(0, movie.description.lastIndexOf(" "));
        // add ... at the end
        movie.description += "...";
        showMore.value = true;
    }
    if (movie.series) {
        movie.series = await get_series(movie.series.id)
        .then((series: Series) => {
            return series;
        });
    }
    console.log(movie);
    return movie;
});

let imageOpacity = ref(100)
let showDialog = ref(false);
function toggleDialog() {
	showDialog.value = !showDialog.value;
}
function logInfo() {
    console.log(movie);
}
</script>

<style lang="scss">

</style>