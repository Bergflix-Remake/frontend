<template>
  <div class="mt-20">
    <Loader v-if="movies.isLoading || episodes.isLoading" />
    <main
      class="transition-all w-full min-h-screen bg-no-repeat bg-cover bg-center"
      :style="{
        backgroundImage: `url(${bg})`,
      }"
      ref="main"
      v-if="movies.isSuccess && episodes.isSuccess"
    >
      <div class="backdrop-blur-md min-h-screen w-full px-10">
        <!-- Movies -->
        <h1 class="mt-20 mb-2 text-xl font-bold">Filme</h1>
        <FlexRow>
          <Poster
            v-for="movie in movies.data"
            :name="movie.attributes!.title"
            :titleImage="movie.attributes!.title_image?.data ? 'https://api.bergflix.de' + movie.attributes!.title_image?.data?.attributes?.url : ''"
            :subtitle="movie.attributes!.rating + ' stars'"
            :image="`https://api.bergflix.de${movie.attributes!.thumbnail?.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/movies/${movie.id}`"
            @mouseenter="bg = `https://api.bergflix.de${movie.attributes!.background_image!.data?.attributes?.url}`"
            @mouseleave="bg = ''"
            :key="movie.id!"
          />
        </FlexRow>
        <!-- Episodes -->
        <h1 class="mt-20 mb-2 text-xl font-bold">Neu hinzugefügte Episoden</h1>
        <FlexRow>
          <Poster
            v-for="movie in episodes.data.splice(0, 5)"
            :name="movie.attributes!.title"
            :title-image="movie.attributes!.title_image?.data ? 'https://api.bergflix.de' + movie.attributes!.title_image?.data?.attributes?.url : ''"
            :subtitle="movie.attributes!.series?.data?.attributes?.Title"
            :image="`https://api.bergflix.de${movie.attributes!.thumbnail!.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/movies/${movie.id}`"
            @mouseenter="bg = `https://api.bergflix.de${movie.attributes!.background_image!.data?.attributes?.url}`"
            @mouseleave="bg = ''"
            :key="movie.id!"
          />
          <Poster
            name="Visit Series Page"
            subtitle="More episodes"
            image="https://cdn.bergflix.de/imgs/Background/1.png"
            :link-icon="DotsCircleHorizontalIcon"
            link="/series"
            @mouseenter="bg = 'https://cdn.bergflix.de/imgs/Background/2.png'"
            @mouseleave="bg = ''"
          />
        </FlexRow>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Poster from "../components/Common/Poster.vue";
import { PencilIcon, DotsCircleHorizontalIcon } from "@heroicons/vue/outline";
import { useStrapi } from "../main";
import Loader from "../components/Loader.vue";
import FlexRow from "../components/FlexRow.vue";
import { VideoEntity } from "../models/types";
import { ref } from "vue";

const bg = ref();

const movies = useStrapi<VideoEntity[]>([
  "videos",
  {
    populate: ["series", "background_image", "title_image", "thumbnail"],
    filters: {
      series: {
        id: {
          $null: true,
        },
      },
    },
  },
]);

const episodes = useStrapi<VideoEntity[]>([
  "videos",
  {
    populate: ["series", "series.title", "background_image", "title_image", "thumbnail"],
    filters: {
      series: {
        id: {
          $notNull: true,
        },
      },
    },
    sort: ["createdAt:desc"],
  },
]);
</script>

<style lang="scss"></style>
