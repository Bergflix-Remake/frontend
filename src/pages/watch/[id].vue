<template>
  <article v-if='!invalidId' class='p-5 flex flex-col w-full min-h-screen space-y-2'>
    <div class='flex flex-col xl:flex-row xl:space-x-2'>
      <!-- Player -->
      <div class='bg-clean-dark-600 w-full aspect-video md:rounded-l-lg  overflow-hidden'>
        <Player  v-if='movie.isSuccess' :vid='url'  :page-id='id' :key='url' />
        <div v-else class='w-full h-full justify-center items-center flex'>
          <Loader />
        </div>
      </div>
      <!-- Playlist -->
      <div v-if='series'
           class='w-full xl:w-1/3 bg-clean-dark-600 xl:rounded-bl-none xl:rounded-r-lg rounded-b-lg p-5 flex flex-col'>
        <img v-if='movie.data?.attributes?.series?.data?.attributes?.title_image?.data'
             :src='`https://api.bergflix.de${movie.data?.attributes?.series?.data?.attributes?.title_image?.data?.attributes?.url}`'
             class='max-w-md mb-5'>
        <Title v-else>{{ series.title }}</Title>
        <div class='flex flex-col space-y-2'>
          <PlaylistEntry
            v-for='(video, index) in series.videos?.data'
            :id='video.id'
            :key='video.id'
            :episode='index + 1'
            :thumbnail='`https://api.bergflix.de${video.attributes?.thumbnail?.data?.attributes?.url}`'
            :title='video.attributes?.title'
            :playing='Number(video.id) === id' />
        </div>
      </div>
    </div>
    <!-- Info -->
    <div class='w-full p-10 bg-clean-dark-600 rounded-lg flex md:flex-row flex-col'>
      <div class='md:w-1/2 w-full'>
        <img v-if='movie.data?.attributes?.title_image?.data'
             :src='`https://api.bergflix.de${movie.data?.attributes?.title_image?.data?.attributes?.url}`'
             class='max-h-24' :alt='movie.data?.attributes?.title'>
        <Title v-else>{{ title }}</Title>
        <p class='text-gray-500 font-light'>
          {{ description }}
        </p>

      </div>
      <div class='md:ml-auto mt-5'>
        <InfoRow :year='2022' :age='16' genre='Action' />
      </div>
    </div>
    <div class='w-full p-10 bg-clean-dark-600 rounded-lg flex flex-col'>
      <Subtitle>Mitwirkende</Subtitle>
      <div class='flex flex-wrap'>
        <Contributor
          v-for='contributor in movie.data?.attributes?.contributors' :key='contributor?.id'
          :name='contributor?.contributor?.data?.attributes?.name' :role='contributor?.role'
          :character='contributor?.character'
          :image='`https://api.bergflix.de${contributor?.contributor?.data?.attributes?.image?.data?.attributes?.url}`'
          :url='contributor?.contributor?.data?.attributes?.href' />
      </div>
    </div>
  </article>
</template>

<script setup lang='ts'>
import Title from '@atoms/Title/Title.vue';
import InfoRow from '@molecules/InfoRow/InfoRow.vue';
import Subtitle from '@atoms/Subtitle/Subtitle.vue';
import Contributor from '@/pages/watch/Contributor.vue';
import PlaylistEntry from '@/pages/watch/PlaylistEntry.vue';
import { useStrapiOne } from '@/main';
import { VideoEntity } from '@/models/types';
import { useRoute } from 'vue-router';
import Loader from '@/components/Loader.vue';
import { computed, watch } from 'vue';
import { useHead } from '@vueuse/head';
import Player from '@/pages/watch/Player.vue';

const route = useRoute();
const invalidId = computed(() => !route.params.id || isNaN(Number(route.params.id)));
const id = computed(() => Number(route.params.id));
const movie = useStrapiOne<VideoEntity>([
  'videos',
  id,
  {
    populate: ['contributors', 'contributors.contributor', 'contributors.contributor.image', 'series.videos', 'series.videos.thumbnail', 'series.title_image', 'title_image']
  }
]);
const series = computed(() => movie.data?.attributes?.series?.data?.attributes);
const url = computed(() => movie.data?.attributes?.youtube_url!.split('v=')[1]);

useHead({
  title: computed(() => `${movie.data?.attributes?.title ? 'Watching ' + movie.data?.attributes?.title : 'Loading'} · Bergflix`)
});

const title = computed(() => movie.data?.attributes?.title);
const description = computed(() => movie.data?.attributes?.description);

watch(id, () => {
  location.reload();
})
</script>
