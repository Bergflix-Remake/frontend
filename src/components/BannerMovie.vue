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
<div class="mt-28"></div>
<div
    class="relative w-full transition-opacity" :class="'opacity-' + imageOpacity"
>
    <div class="flex flex-col px-10 space-y-5 ">
        <img
            v-if="banner_movie.series.title_image"
            :src="banner_movie.series.title_image"
            :alt="banner_movie.title"
            class="w-96 mb-7"
        />
        <h1 v-else-if="banner_movie.series.title" class="text-5xl font-black text-white">{{ banner_movie.series.title }}</h1>
        <h1 v-else class="text-5xl font-black text-white">{{ banner_movie.title }}</h1>
        <div class="flex flex-row flex-wrap max-w-xl text-white">
            <p id="year" class="mr-5">{{ banner_movie.title }} <span v-if="banner_movie.series">| {{ banner_movie.series.title}}</span></p>
            <p class="px-1 mr-5 border-2 rounded border-light text-primary-100">{{ banner_movie.age }}</p>
                <p class="mr-5 italic">{{ banner_movie.duration }}</p>
                <div class="mr-5 border-l-2 border-light"></div>
                <p class="mr-5 font-bold">{{ banner_movie.genre }}</p>
        </div>
        <div class="flex flex-row flex-wrap max-w-md text-white">
            <p class="ml-0 mr-5 font-light text-primary-100">{{ banner_movie.rating }} positive Bewertungen</p>
            <div v-if="banner_movie.original" class="mr-5 border-l-2 border-light"></div>
            <p v-if="banner_movie.original" class="font-bold text-white">Bergflix<span class="text-primary-100">. Original</span></p>
        </div>
        <div class="flex flex-col max-w-md text-white">
            <p class="inline my-10 italic text-gray-400">{{ banner_movie.description }}<p tabindex="0" @click="toggleDialog" v-if="showMore" class="inline p-1 ml-2 text-xs not-italic font-bold tracking-wider text-white uppercase bg-gray-800 rounded cursor-pointer w-min hover:bg-gray-700">more</p></p>
            <div class="flex flex-row space-x-5">
                <button @click="$router.push('/watch/' + banner_movie_id.id )" id="watch_button" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><PlayIcon class="w-5 mr-2 text-white"/>Watch Now</button>
                <button @click="$router.push('/media/' + banner_movie_id.id )" id="watch_button" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><CursorClickIcon class="w-5 mr-2 text-white"/>More Info</button>
            </div>
            <div id="spacer" class="my-5"></div>
        </div>
    </div>
</div>

</template>

<script setup lang="ts">
import { Movie, get_movie } from '../api_handler'
import { Dialog, DialogDescription, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { PlayIcon, CursorClickIcon } from "@heroicons/vue/outline";

import { ref, Ref } from 'vue';
const fullDescription = ref();
const showMore = ref(false);

const banner_movie_id = await fetch('http://localhost:3001/banner').then(res => res.json());
const banner_movie: Movie = await get_movie(banner_movie_id.id)
.then((movie: Movie) =>{
    document.getElementById("image-section")!.style.backgroundImage = `url(${movie.background_image})`;
    fullDescription.value = movie.description;
    // if description is longer than 500 characters, cut it down to 500 characters
    if (movie.description.length > 500) {
        // remove everything since the last space
        movie.description = movie.description.substring(0, movie.description.lastIndexOf(" "));
        // add ... at the end
        movie.description += "...";
        showMore.value = true;
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
    console.log(banner_movie);
}
</script>

<style lang="scss">

</style>