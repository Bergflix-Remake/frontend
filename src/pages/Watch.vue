<template>
  <title>
    Watching "{{ movie.data?.attributes?.title }}" |
    {{
      movie.data?.attributes?.series?.data?.attributes?.Title + " | Bergflix" ||
      " Bergflix"
    }}
  </title>
  <div id="spacer" class="my-5"></div>
  <!-- Loading Indicator -->
  <Loader v-if="movie.isLoading" />
  <!-- Watch -->
  <section class="flex flex-row w-full p-10" v-if="movie.isSuccess">
    <div
      v-if="!invalidId"
      class="flex flex-col justify-center w-full h-full"
      :class="isSeries ? 'lg:w-3/4' : 'w-full'"
    >
      <vue-plyr ref="plyr">
        <div class="plyr__video-embed">
          <iframe
            :src="
              'https://www.youtube.com/embed/' +
              movie.data?.attributes?.youtube_url +
              '?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdev.bergflix.de&amp;widgetid=1'
            "
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
      <div class="w-full p-10 mt-10 rounded-md bg-darker">
        <div class="flex flex-row">
          <img
            class="mb-5 w-80"
            v-if="movie.data?.attributes?.series?.data?.attributes?.title_image"
            :src="
              'https://api.bergflix.de' +
              movie.data?.attributes?.series?.data?.attributes?.title_image.data
                ?.attributes?.url
            "
            :alt="movie.data.attributes.series.data.attributes.Title"
          />
          <h1 v-else-if="isSeries" class="mb-5 text-5xl font-black text-white">
            {{ movie.data?.attributes?.series?.data?.attributes?.Title }}
          </h1>
          <h1 v-else class="mb-5 text-5xl font-black text-white">
            {{ movie.data?.attributes?.title }}
          </h1>
          <div id="right-items" class="flex-row hidden ml-auto text-white md:flex h-7">
            <p id="year" class="mr-5">
              {{ getYearFromDate(movie.data?.attributes?.year) }}
            </p>
            <p
              class="px-1 mr-5 border-2 rounded border-primary border-light text-primary-100"
            >
              {{ movie.data?.attributes?.age }}+
            </p>
            <p class="mr-5 italic">{{ movie.data?.attributes?.duration }}</p>
            <div class="mr-5 border-l-2 border-light"></div>
            <p class="mr-5 font-bold text-primary-100">
              {{ movie.data?.attributes?.genre }}
            </p>
          </div>
        </div>
        <p class="font-mono text-primary-100" v-if="isSeries">
          {{ movie.data?.attributes?.title }}
        </p>
        <p class="text-gray-500 italic columns-2">
          <Textblock :content="movie.data?.attributes?.description" />
        </p>
      </div>
    </div>
  </section>
  <!-- Loading Error -->
  <section class="flex flex-col w-full p-10 items-center" v-if="movie.isError">
    <h1 class="text-5xl font-black text-white">
      {{ movie.error.error.status }}
    </h1>
    <p class="text-gray-500 italic text-center">
      Error while loading movie: <pre>{{ movie.error.error.message }}</pre>
    </p>
  </section>
</template>
<script lang="ts" setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { watchEffect, ref, Ref, onMounted, watch } from "vue";
import { useStrapiOne } from "../main";
import { VideoEntity } from "../models/types";
import Textblock from "../components/Common/Textblock.vue";
import Loader from "../components/Loader.vue";
const route = useRoute();
const router = useRouter();
const pageid = route.params.id;
let invalidId = false;
// if the id cannot be converted to a number, it is invalid
if (isNaN(Number(pageid))) {
  invalidId = true;
}

let isSeries = ref(false);

const plyr = ref();
watchEffect(() => {
  if (plyr.value) {
    console.log("plyr", plyr.value);
    plyr.value.player.on("ready", () => {
      // Check if there is a watchtime saved in localStorage
      const watchTime = localStorage.getItem(`${pageid}-watchTime`);
      if (watchTime) {
        // If there is, set the video to that time
        plyr.value.player.currentTime = Number(watchTime);
        // And remove the watchtime from localStorage
        localStorage.removeItem("watchTime");
      }
    });
    plyr.value.player.on("timeupdate", () => {
      // Save the current time to localStorage
      localStorage.setItem(`${pageid}-watchTime`, plyr.value.player.currentTime);
    })
  }
});

const movie = useStrapiOne<VideoEntity>(
  [
    "videos",
    pageid,
    {
      populate: {
        series: {
          populate: ["title", "title_image"],
        },
      },
    },
  ],
  {
    onSuccess: (data) => {
      console.log(data);
      isSeries.value = data.attributes?.series?.data ? true : false;
      console.log(isSeries.value);
      return data;
    },
    retry: false,
  }
);

function getYearFromDate(date: string) {
  return date.split("-")[0];
}


</script>
<style>
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
