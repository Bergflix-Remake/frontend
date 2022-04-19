<template>
  <div
    class="bg-darkest-dark backdrop-blur-sm bg-opacity-40 border-darkest-dark border-2 p-2 rounded"
  >
    <div
      id="playlist-item"
      class="flex flex-row bg-darkest-dark w-full rounded my-2 max-h-96 cursor-pointer bg-opacity-40 backdrop-blur-sm border-darkest-dark border-2"
      v-for="movie in movies"
    >
      <div class="w-1/2 flex flex-col p-1 justify-center">
        <img
          class="w-full rounded"
          :src="
            'https://api.bergflix.de' +
            movie.attributes?.background_image?.data?.attributes?.url
          "
          alt=""
        />
      </div>
      <div class="flex flex-col p-2 justify-center w-1/2">
        <h1 class="text-lg font-black text-white">
          {{ movie.attributes?.title }}
        </h1>
        <p class="text-sm font-light text-white">
          {{ movie.attributes?.series?.data?.attributes?.Title }} |
          <span class="text-bold">{{ getYearFromDate(movie.attributes?.year) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoEntity } from "../models/types";
import { getYearFromDate } from "../utils";

const props = defineProps({
  movies: {
    type: Array as () => VideoEntity[],
    required: true,
  },
});

console.log(props.movies);
</script>
