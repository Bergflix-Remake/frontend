<route lang='yaml'>
name: home
</route>
<template>
  <Head>
    <title>Bergflix. Home</title>
    <meta
      content="Bergflix. Home"
      property="og:title"
    >
    <meta
      content="Site Description"
      property="og:description"
    >
    <meta
      content="/home"
      property="og:url"
    >
    <meta
      content="https://cdn.bergflix.de/logo/light.png"
      property="og:image"
    >
    <meta
      content="#ff0230"
      data-react-helmet="true"
      name="theme-color"
    >
  </Head>
  <div class="flex flex-col bg-black">
    <Hero />
    <section class="p-10">
      <Title class="mb-2">
        Filme
      </Title>
      <ScrollableRow>
        <Poster
          v-if="videos.isLoading"
          loading
        />
        <Poster
          v-for="movie in videos.data"
          v-else-if="videos.isSuccess"
          :key="movie.id!"
          :image="movie.attributes?.thumbnail.data?.attributes?.url"
          :original="movie.attributes?.original!"
          @click="() => $router.push({ name: 'watch', params: { id: movie.id } })"
        />
        <Poster
          v-if="videos.isError"
          error
        />
      </ScrollableRow>
      <Title class="mb-2">
        Serien
      </Title>
      <ScrollableRow>
        <Poster
          v-if="series.isLoading"
          loading
        />
        <Poster
          v-for="serie in series.data"
          v-else-if="videos.isSuccess"
          :key="serie.id!"
          :image="serie.attributes?.thumbnail.data?.attributes?.url"
          :original="serie.attributes?.original!"
          @click="() => $router.push({ name: 'details', params: { id: serie.id } })"
        />
        <Poster
          v-if="series.isError"
          error
        />
      </ScrollableRow>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@organisms/Hero/Hero.vue';
import ScrollableRow from '@molecules/ScrollableRow.vue';
import Poster from '@molecules/Poster.vue';
import Title from '@atoms/Title/Title.vue';
import { useStrapi } from '@/main';
import { SerieEntity, VideoEntity } from '@/models/types';
import { Head } from '@vueuse/head';

const videos = useStrapi<VideoEntity[]>(['videos', {
    populate: {
        thumbnail: '*',
        series: '*'
    },
    sort: 'year:desc',
    filters: {
        series: {
            title: {
                $null: true
            }
        }
    }

}]);

const series = useStrapi<SerieEntity[]>(['series', {
    populate: {
        thumbnail: '*'
    },
    sort: 'year:desc'
}]);

</script>

<style>
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
</style>
