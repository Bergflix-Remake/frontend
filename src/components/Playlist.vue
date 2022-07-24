<template>
  <div
    class="bg-darkest-dark backdrop-blur-sm bg-opacity-40 border-darkest-dark border-2 p-2 rounded text-center max-w-lg min-w-full"
  >
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <h2 class="italic">{{ movies.length }} Episoden</h2>
    <div
      id="playlist-item"
      class="flex flex-row bg-darkest-dark w-full rounded my-2 max-h-40 cursor-pointer bg-opacity-40 backdrop-blur-sm border-darkest-dark border-2"
      v-for="movie in movies"
      :key="movie.id!"
      @click="$router.push('/watch/' + movie.id!)"
    >
      <div class="w-1/2 flex flex-col p-1 justify-center">
        <div
          class="h-40 w-full bg-center rounded bg-no-repeat bg-cover"
          :style="{
            backgroundImage: `url('https://api.bergflix.de${movie.attributes?.thumbnail.data?.attributes?.url}')`,
          }"
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
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  movies: {
    type: Array as () => VideoEntity[],
    required: true,
  },
});

console.debug(props.movies);
</script>
