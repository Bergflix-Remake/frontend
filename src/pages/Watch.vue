<template>
<title>Watching "{{ movie.title }}" | {{ movie.series ? movie.series.title + " | Bergflix" : " Bergflix"}}</title>
<!-- Invalid ID -->
<div v-if="invalidId" id="invalid-id" class="flex flex-col justify-center max-w-md p-10 mt-4 text-center align-middle rounded-md shadow-lg bg-darker flex-column">
    <h1 class="text-2xl font-bold text-white" >Error<span class="font-bold text-primary-100">.</span></h1>
    <p class="font-mono text-primary-100">Invalid ID</p>
    <p class="text-gray-500">The id you entered is not valid. Please check the url and try again.</p>
    <button @click="$router.push('/')" id="watch_button" class="flex flex-row p-2 mt-5 text-white bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0"><ChevronLeftIcon class="w-5 mr-2 text-white"/>Back</button>
</div>
<!-- Watch -->
<section class="flex flex-row w-full p-10" @scroll="">
    <div v-if="!invalidId" class="flex flex-col justify-center w-full h-full" :class="movie.series ? 'lg:w-3/4' : 'w-full'">
        <div id="spacer" class="my-5"></div>
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="'https://www.youtube.com/embed/'+ movie.video_id + '?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdev.bergflix.de&amp;widgetid=1'"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
        <div class="w-full p-10 mt-10 rounded-md bg-darker">
            <div class="flex flex-row">
                <img class="mb-5 w-80" v-if="movie.series && movie.series.title_image" :src="movie.series.title_image" :alt="movie.series.title">
                <h1 v-else-if="movie.series" class="mb-5 text-5xl font-black text-white">{{ movie.series.title }}</h1>
                <h1 v-else class="mb-5 text-5xl font-black text-white">{{ movie.title }}</h1>
                <div id="right-items" class="flex-row hidden ml-auto text-white md:flex h-7">
                    <p id="year" class="mr-5">{{ movie.year }}</p>
                    <p class="px-1 mr-5 border-2 rounded border-light text-primary-100">{{ movie.age }}</p>
                    <p class="mr-5 italic">{{ movie.duration }}</p>
                    <div class="mr-5 border-l-2 border-light"></div>
                    <p class="mr-5 font-bold text-primary-100">{{ movie.genre }}</p>
                </div>
            </div>
            <p class="font-mono text-primary-100" v-if="movie.series">{{ movie.title }}</p>
            <p class="italic text-gray-500">{{ movie.description }}</p>
        </div>
    </div>
    <Playlist class="hidden w-1/4 h-screen lg:flex" v-if="movie.series" :series_id="movie.series.id"/>
</section>
</template>
<script lang="ts" setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { ChevronLeftIcon, } from '@heroicons/vue/outline';
import { get_movie, get_series, Movie, Series } from '../api_handler';
import Playlist from '../components/Playlist.vue';
import {ref} from 'vue'

const route = useRoute();
const router = useRouter();
const pageid = route.params.id;

let invalidId = false;
// if the id cannot be converted to a number, it is invalid
if (isNaN(Number(pageid))) {
    invalidId = true;
}

const movie = ref();

movie.value = await get_movie(Number(pageid)).then(async (movie: Movie) => {
    if (movie.id == null) {
        invalidId = true;
    }
    if (movie.series) {
        movie.series = await get_series(movie.series.id).then((series: Series) => {
            return series;
        });
    }
    return movie;
});

function scroll() {
    
}

// let loaded = ref(false);
// let id = ref(0);
// let title = ref("")
// let description = ref("")
// let video_id = ref("")
// let thumbnail = ref("")
// let duration = ref("")
// let year = ref("")
// let genre = ref("")
// let rating = ref("")
// let series = ref({})

// onBeforeMount(async () => {
//     await fetch("http://localhost:3001/movies/"+pageid)
//     .then(res => {
//         if(res.status == 404) {
//             invalidId = true;
//             console.log("Invalid ID");
//         }
//         return res;
//     })
//     .then(response => response.json())
//     .then(data => {
//         id.value = data.id;
//         title.value = data.title;
//         description.value = data.description;
//         video_id.value = data.video_id;
//         thumbnail.value = data.thumbnail;
//         duration.value = data.duration;
//         year.value = data.year;
//         genre.value = data.genre;
//         rating.value = data.rating;
//         series.value = data.series;
//         loaded.value = true;
//     })
//     .catch(error => {
//         console.log(error);
//     });
// })

// // if(!data) {
// //     invalidId = true;
// // } else {
// //     // set each variable to the content of data
// //     id.value = data.id;
// //     title.value = data.title;
// //     description.value = data.description;
// //     video_id.value = data.video_id;
// //     thumbnail.value = data.thumbnail;
// //     duration.value = data.duration;
// //     year.value = data.year;
// //     genre.value = data.genre;
// //     rating.value = data.rating;
// //     series.value = data.series;
// // }

</script>
<style lang="scss">
@import '../styles/colors.scss';
#invalid-id {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
:root {
    --plyr-color-main: #f40f3a;
}
</style>