<route lang='yaml'>
name: home
</route>
<template>
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
    <section v-for="collection in collections.data" :key="collection.id!" class="px-10">
      <Title
class="mb-2"
      :image="api(collection.attributes?.title_image?.data?.attributes?.url)"
      >
        {{ collection.attributes?.title }}
      </Title>
      <ScrollableRow>
        <Poster
          v-if="collections.isLoading"
          loading
        />
          <!-- Poster for movies -->
          <Poster
            v-for="movie in collection.attributes?.entries.filter((entry) => entry!.__component === 'collection.video') as ComponentCollectionVideo[]"
            
            :key="movie.id!"
            :image="movie.video?.data?.attributes?.thumbnail.data?.attributes?.url"
            :original="movie.video?.data?.attributes?.original!"
            @click="() => $router.push({ name: 'watch', params: { id: movie.video?.data?.id! } })"
          />
          <!-- Poster for series -->
          <Poster
            v-for="serie in collection.attributes?.entries.filter((entry) => entry!.__component === 'collection.serie') as ComponentCollectionSerie[]"
            :key="serie.id!"
            :image="serie.serie?.data?.attributes?.thumbnail.data?.attributes?.url"
            :original="serie.serie?.data?.attributes?.original!"
            @click="() => $router.push({ name: 'details', params: { id: serie.serie?.data?.id! } })"
          />
        <Poster
          v-if="collections.isError"
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
import { CollectionEntity, ComponentCollectionSerie, ComponentCollectionVideo, SerieEntity, VideoEntity } from '@/models/types';
import { api } from '@/util/paths';

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

const collections = useStrapi<CollectionEntity[]>(['collections', {
    populate: ['entries.video', 'entries.serie', 'entries.video.thumbnail', 'entries.serie.thumbnail', 'title_image'],
}]);

</script>

<style>
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
</style>
