<template>
  <div class="mt-20">
    <title>
      Watching "{{ movie.data?.attributes?.title }}" |
      {{
        movie.data?.attributes?.series?.data?.attributes?.Title + " | Bergflix" ||
        " Bergflix"
      }}
    </title>
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
              v-if="
                movie.data.attributes?.title_image ||
                movie.data?.attributes?.series?.data?.attributes?.title_image
              "
              :src="
                'https://api.bergflix.de' +
                  movie.data.attributes?.title_image?.data?.attributes?.url ||
                'https://api.bergflix.de' +
                  movie.data?.attributes?.series?.data?.attributes?.title_image?.data
                    ?.attributes?.url
              "
              :alt="movie.data.attributes?.series?.data?.attributes?.Title"
            />
            <h1 v-else-if="isSeries" class="mb-5 text-5xl font-black text-white">
              {{ movie.data?.attributes?.series?.data?.attributes?.Title }}
            </h1>
            <h1 v-else class="mb-5 text-5xl font-black text-white">
              {{ movie.data?.attributes?.title }}
            </h1>
            <div
              id="right-items"
              class="flex-row hidden ml-auto text-white md:flex h-7 items-center"
            >
              <p id="year" class="mr-5">
                {{ getYearFromDate(movie.data?.attributes?.year) }}
              </p>
              <p
                class="px-1 mr-5 border-2 rounded border-primary border-light text-primary-100"
              >
                {{ movie.data?.attributes?.age }}+
              </p>
              <p class="mr-5 italic">{{ duration }}</p>
              <div class="mr-5 border-l-2 border-light h-8"></div>
              <p class="mr-5 font-bold text-primary-100">
                {{ movie.data?.attributes?.genre }}
              </p>
            </div>
          </div>
          <p class="font-mono text-primary-100" v-if="isSeries">
            {{ movie.data?.attributes?.title }}
          </p>
          <p class="text-gray-500 italic max-w-3xl">
            <Textblock :content="movie.data?.attributes?.description" />
          </p>
        </div>
      </div>
    </section>
    <!-- Loading Error -->
    <Error v-else-if="movie.isError" :title="movie.error.error.status">
      Error while loading movie with ID {{ pageid }}:
      {{ movie.error.error.message }}
    </Error>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";
import { useStrapiOne } from "../main";
import { VideoEntity } from "../models/types";
import Textblock from "../components/Common/Textblock.vue";
import Loader from "../components/Loader.vue";
import Error from "../components/Error.vue";
import { getYearFromDate } from "../utils";
const route = useRoute();
const pageid = route.params.id;
let invalidId = false;
// if the id cannot be converted to a number, it is invalid
if (isNaN(Number(pageid))) {
  invalidId = true;
}

const isSeries = ref(false);
const duration = ref("HHh MMm SSs");

const plyr = ref();
watchEffect(() => {
  if (plyr.value) {
    plyr.value.player.on("ready", () => {
      // Get Video Length
      const durSeconds = plyr.value.player.duration;
      // Convert into this time format: %Hh %Mm %Ss
      const dur = new Date(durSeconds * 1000).toISOString().slice(11, 19).split(":");
      const result = `${dur[0]}h ${dur[1]}m ${dur[2]}s`;
      duration.value = result;
      // Check if there is a watchtime saved in localStorage
      const watchTime = localStorage.getItem(`${pageid}-watchTime`);
      if (watchTime) {
        // If there is, set the video to that time
        plyr.value.player.currentTime = Number(watchTime);
        // And remove the watchtime from localStorage
        localStorage.removeItem("watchTime");
      }
      // Keybinds
      window.addEventListener("keydown", (e) => {
        switch (e.key) {
          case " ":
            e.preventDefault();
            plyr.value.player.togglePlay();
            break;
          case "ArrowLeft":
            e.preventDefault();
            plyr.value.player.rewind();
            break;
          case "ArrowRight":
            e.preventDefault();
            plyr.value.player.forward();
            break;
          case "ArrowUp":
            e.preventDefault();
            plyr.value.player.increaseVolume(0.1);
            break;
          case "ArrowDown":
            e.preventDefault();
            plyr.value.player.decreaseVolume(0.1);
            break;
          case "f":
            e.preventDefault();
            plyr.value.player.fullscreen.toggle();
            break;
          case "m":
            e.preventDefault();
            plyr.value.player.muted = !plyr.value.player.muted;
            break;
          default:
            break;
        }
      });
    });
    plyr.value.player.on("timeupdate", () => {
      // Save the current time to localStorage
      localStorage.setItem(`${pageid}-watchTime`, plyr.value.player.currentTime);
    });
  }
});

const movie = useStrapiOne<VideoEntity>(
  [
    "videos",
    pageid,
    {
      populate: ["series", "series.title_image", "title_image"],
    },
  ],
  {
    onSuccess: (data) => {
      isSeries.value = !!data.attributes?.series?.data;
      console.debug(data);
      return data;
    },
    retry: false,
  }
);
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
