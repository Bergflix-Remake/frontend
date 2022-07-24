<template>
  <main
    class="w-full min-h-screen bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${bg})` }"
    v-if="series.isSuccess"
  >
    <div
      class="flex flex-col items-center justify-center w-full min-h-screen md:flex-row backdrop-blur-sm bg-opacity-40 bg-darkest-dark"
    >
      <div class="flex flex-col justify-center w-full h-full p-10 md:w-1/2">
        <img
          v-if="series.data.attributes?.title_image"
          class="w-full"
          :src="series.data.attributes?.title_image?.data?.attributes?.url"
          :alt="series.data.attributes?.Title"
        />
        <h1 class="text-2xl font-black text-white" v-else>
          {{ series.data.attributes?.Title }}
        </h1>
        <div class="flex flex-col mt-2 sm:flex-row md:flex-col lg:flex-row">
          <p class="font-bold text-primary" v-if="series.data.attributes?.original">
            <span class="text-white">Bergflix</span>. Original
          </p>
          <div
            id="right-items"
            class="flex flex-row items-center text-white md-0 sm:ml-auto flex-nowrap md:ml-0 lg:ml-auto h-7"
          >
            <p id="year" class="mr-5">
              {{ getYearFromDate(series.data.attributes?.year) }}
            </p>
            <p
              class="px-1 mr-5 border-2 rounded border-primary border-light text-primary-100"
            >
              {{ series.data.attributes?.age }}+
            </p>
            <p class="mr-5 italic">
              {{ series.data.attributes?.videos?.data.length }} Episode{{
                series.data.attributes?.videos?.data.length! > 1 ? "n" : ""
              }}
            </p>
            <div class="h-8 mr-5 border-l-2 border-light"></div>
            <p class="mr-5 font-bold text-primary-100">
              {{ series.data.attributes?.genre }}
            </p>
          </div>
        </div>
        <p class="max-w-3xl italic">
          <Textblock
            :content="series.data.attributes?.description"
            title="Beschreibung"
          />
        </p>
      </div>
      <div
        v-if="true"
        class="flex flex-col items-center justify-center w-full h-full p-10 md:w-1/2"
      >
        <Playlist
          :title="series.data.attributes?.Title!"
          :movies="series.data.attributes?.videos?.data!"
        />
      </div>
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
import { ref } from "vue";

const route = useRoute();

const id = Number(route.params.id);

const bg = ref("");

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
        background_image: {
          populate: "*",
        },
      },
    },
  ],
  {
    onSuccess: (data) => {
      bg.value =
        "https://api.bergflix.de" +
        data.attributes?.background_image?.data?.attributes?.url!;
      console.debug(data);
    },
  }
);
</script>
