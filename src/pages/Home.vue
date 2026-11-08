<route lang="yaml">
name: home
</route>
<template>
  <Hero />
  <div class="home-container flex flex-col w-full h-full">
    <section class="px-10">
      <ScrollableRow title="Filme">
        <Poster v-if="videos.isLoading" loading />
        <Poster
          v-for="movie in videos.data"
          v-else-if="videos.isSuccess"
          :key="movie.id"
          :src="movie.thumbnail?.url"
          :alt="movie.title"
          :original="movie.original || false"
          @click="
            () =>
              $router.push({
                name: 'watch',
                params: { id: movie.documentId },
              })
          "
        />
        <Poster v-if="videos.isError" error />
      </ScrollableRow>
    </section>
    <section class="px-10">
      <ScrollableRow title="Serien">
        <Poster v-if="series.isLoading" loading />
        <Poster
          v-for="serie in series.data"
          v-else-if="series.isSuccess"
          :key="serie.id"
          :src="serie.thumbnail?.url"
          :alt="serie.title"
          :original="serie.original || false"
          @click="
            () =>
              $router.push({
                name: 'details',
                params: { id: serie.documentId },
              })
          "
        />
        <Poster v-if="series.isError" error />
      </ScrollableRow>
    </section>
    <section
      v-for="collection in collections.data"
      :key="collection.id"
      class="px-10"
    >
      <ScrollableRow
        :title-image="api(collection.title_image?.url)"
        :title="collection.title"
      >
        <Poster v-if="collections.isLoading" loading />
        <Poster
          v-for="movie in movieEntries(collection)"
          :key="movie.id"
          :src="movie.video?.thumbnail?.url"
          :alt="movie.video?.title"
          :original="movie.video?.original || false"
          @click="
            () =>
              $router.push({
                name: 'watch',
                params: { id: movie.video?.documentId },
              })
          "
        />
        <Poster
          v-for="serie in serieEntries(collection)"
          :key="serie.id"
          :src="serie.serie?.thumbnail?.url"
          :alt="serie.serie?.title"
          :original="serie.serie?.original || false"
          @click="
            () =>
              $router.push({
                name: 'details',
                params: { id: serie.serie?.documentId },
              })
          "
        />
        <Poster v-if="collections.isError" error />
      </ScrollableRow>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@organisms/Hero/Hero.vue';
import ScrollableRow from '@molecules/ScrollableRow.vue';
import Poster from '@molecules/Poster.vue';
import { useStrapi } from '@/main';
import {
  Collection,
  CollectionEntry,
  ComponentCollectionSerie,
  ComponentCollectionVideo,
  Serie,
  Video,
} from '@/models/types';
import { api } from '@/util/paths';

const videos = useStrapi<Video[]>([
  'videos',
  {
    populate: {
      thumbnail: true,
      series: true,
    },
    sort: 'year:desc',
    filters: {
      series: {
        title: {
          $null: true,
        },
      },
    },
  },
]);

const series = useStrapi<Serie[]>([
  'series',
  {
    populate: {
      thumbnail: true,
    },
    sort: 'year:desc',
  },
]);

const collections = useStrapi<Collection[]>([
  'collections',
  {
    populate: {
      entries: {
        on: {
          'collection.video': {
            populate: {
              video: {
                populate: { thumbnail: true, series: true },
              },
            },
          },
          'collection.serie': {
            populate: {
              serie: {
                populate: { thumbnail: true },
              },
            },
          },
        },
      },
      title_image: true,
    },
  },
]);

const movieEntries = (collection: Collection): ComponentCollectionVideo[] =>
  (collection.entries || []).filter(
    (entry: CollectionEntry): entry is ComponentCollectionVideo =>
      entry.__component === 'collection.video',
  );

const serieEntries = (collection: Collection): ComponentCollectionSerie[] =>
  (collection.entries || []).filter(
    (entry: CollectionEntry): entry is ComponentCollectionSerie =>
      entry.__component === 'collection.serie',
  );
</script>

<style scoped>
.gradient {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    at top right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
}

.home-container {
  margin-top: 80vh;
}
</style>
