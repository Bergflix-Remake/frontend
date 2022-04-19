<template>
  <main class="flex flex-col md:flex-row w-full h-screen" v-if="series.isSuccess">
    <div class="w-full md:w-1/2 h-full flex flex-col p-10 justify-center">
      <img
        v-if="series.data.attributes?.title_image"
        class="w-full"
        :src="series.data.attributes?.title_image?.data?.attributes?.url"
        :alt="series.data.attributes.Title"
      />
      <h1 class="text-2xl font-black text-white" v-else>
        {{ series.data.attributes.Title }}
      </h1>
      <div class="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-2">
        <p class="font-bold text-primary-100" v-if="true">
          {{ "BERGRUNNER" }}
        </p>
        <div
          id="right-items"
          class="flex-row md-0 sm:ml-auto flex-nowrap md:ml-0 lg:ml-auto text-white flex h-7 items-center"
        >
          <p id="year" class="mr-5">
            {{ getYearFromDate("2022-00-00") }}
          </p>
          <p
            class="px-1 mr-5 border-2 rounded border-primary border-light text-primary-100"
          >
            {{ "16" }}+
          </p>
          <p class="mr-5 italic">{{ "2h 2m 2s" }}</p>
          <div class="mr-5 border-l-2 border-light h-8"></div>
          <p class="mr-5 font-bold text-primary-100">
            {{ "Action" }}
          </p>
        </div>
      </div>
      <p class="text-gray-500 italic max-w-3xl">
        <Textblock :content="'lorem ipsum'" />
      </p>
    </div>
    <div v-if="true" class="w-full md:w-1/2 h-full flex flex-col p-10 justify-center">
      <Playlist :movies="series.data.attributes?.videos?.data!" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { getYearFromDate } from "../utils";
import Textblock from "../components/Common/Textblock.vue";
import Playlist from "../components/Playlist.vue";
import { SerieEntity } from "../models/types";
import { useStrapiOne } from "../main";
import { useRoute } from "vue-router";

const route = useRoute();

const id = Number(route.params.id);

const series = useStrapiOne<SerieEntity>(
  [
    "series",
    id,
    {
      populate: {
        populate: "*",
        videos: {
          populate: "*",
        },
      },
    },
  ],
  {
    onSuccess: (data) => {
      console.log(data);
    },
  }
);
</script>
