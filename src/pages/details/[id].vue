<script setup lang="ts">
import { useStrapiOne } from '@/main';
import { api, cdn } from '@/util/paths';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Serie, SerieEntity, UploadFile } from '@/models/types';
import Info from '@/stories/molecules/Info/Info.vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import PlaylistEntry from '@/stories/molecules/PlaylistEntry.vue';

const route = useRoute();

const id = computed(() => Number(route.params.id));

const series = useStrapiOne<SerieEntity>([
  'series',
  id,
  {
    populate: ['title_image', 'videos.thumbnail', 'background_image'],
    sort: 'videos.episode:asc',
  },
]);
</script>

<template>
  <main
    class="w-full h-full grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 z-0 p-5"
    :style="{
      backgroundImage: `url(${api(
        series.data?.attributes?.background_image?.data?.attributes?.url,
        cdn('/imgs/Background/3.png')
      )})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <!-- <div
      id="gradient"
      class="absolute top-0 left-0 w-full h-full gradient z-10"
    ></div> -->
    <div class="flex flex-col w-full h-screen justify-center z-20 relative">
      <Info
        :title="series.data?.attributes?.title!"
        :age="series.data?.attributes?.age!"
        :year="new Date(series.data?.attributes?.year!).getFullYear()"
        :description="series.data?.attributes?.description!"
        :genre="series.data?.attributes?.genre!"
        :episodes="series.data?.attributes?.videos?.data.length!"
        :title_image="
          series.data?.attributes?.title_image?.data?.attributes?.url
        "
        :buttons="[]"
        class="md:max-w-md md:m-10"
      ></Info>
    </div>
    <div class="relative overflow-y-scroll z-20 overflow-x-visible hide-scrollbar pb-10 scroll-smooth rounded-xl" >
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-full lg:top-1/3 h-1/4 overflow-x-visible"
      >
        <div class="flex flex-col space-y-4 w-full overflow-x-visible">
          <PlaylistEntry

            v-for="video in series.data?.attributes?.videos?.data!"
            :id="video.id?.toString()!"
            :key="video.id!"
            :thumbnail="
              api(video.attributes?.thumbnail?.data?.attributes?.url!)
            "
            :title="video.attributes?.title!"
            :episode="video.attributes?.episode!"
            class="snap-start"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
</style>