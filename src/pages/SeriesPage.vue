<template>
  <div>
    <Loader class="mt-20" v-if="series.isLoading" />
    <main
      class="transition-all w-full h-screen bg-no-repeat bg-cover bg-center mb-52"
      :style="{
        backgroundImage: `url(${bg})`,
      }"
      ref="main"
      v-if="series.isSuccess"
    >
      <div class="backdrop-blur-md h-full w-full px-10">
        <!-- Series -->
        <h1 class="mt-20 mb-2 text-xl font-bold">Series</h1>
        <FlexRow>
          <Poster
            v-for="serie in series.data"
            :name="serie.attributes!.Title"
            :titleImage="'https://api.bergflix.de' + serie.attributes!.title_image?.data?.attributes?.url"
            :subtitle="serie.attributes!.rating + ' stars'"
            :image="`https://api.bergflix.de${serie.attributes!.thumbnail.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/series/${serie.id}`"
            @mouseenter="bg = `https://api.bergflix.de${serie.attributes!.background_image!.data?.attributes?.url || serie.attributes!.background_image!.data?.attributes?.formats.medium.url}`"
            @mouseleave="bg = ''"
            :key="serie.id!"
          />
        </FlexRow>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Poster from "../components/Common/Poster.vue";
import { PencilIcon } from "@heroicons/vue/outline";
import { useStrapi } from "../main";
import Loader from "../components/Loader.vue";
import FlexRow from "../components/FlexRow.vue";
import { SerieEntity } from "../models/types";
import { ref } from "vue";

const bg = ref();

const series = useStrapi<SerieEntity[]>([
  "series",
  {
    populate: "*",
  },
]);
</script>

<style lang="scss"></style>
