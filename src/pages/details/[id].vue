<route lang="yaml">
name: details
</route>

<script setup lang="ts">
import { useStrapiOne } from '@/main';
import { api, cdn } from '@/util/paths';
import { Serie } from '@/models/types';
import Info from '@/stories/molecules/Info/Info.vue';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PlaylistEntry from '@/stories/molecules/PlaylistEntry.vue';

const route = useRoute();
const router = useRouter();
const routeId = computed(() => String(route.params.id));
const isNumericId = computed(() => /^\d+$/.test(routeId.value));

const series = useStrapiOne<Serie>([
  'series',
  routeId,
  {
    populate: {
      title_image: true,
      background_image: true,
      videos: { populate: { thumbnail: true } },
    },
  },
]);

// Old numeric URLs keep working. Once the document is resolved, replace the
// address bar with the canonical documentId URL.
watch(
  () => series.data?.documentId,
  (documentId) => {
    if (isNumericId.value && documentId && documentId !== routeId.value) {
      router.replace({ name: 'details', params: { id: documentId } });
    }
  },
  { immediate: true },
);
</script>

<template>
  <main
    class="w-full h-full grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 z-0 relative"
    :style="{
      backgroundImage: `url(${api(
        series.data?.background_image?.url,
        cdn('/imgs/Background/3.png'),
      )})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      id="gradient"
      class="absolute bottom-0 left-0 w-full h-full gradient z-10"
    ></div>
    <div class="flex flex-col w-full h-screen justify-center z-20 relative">
      <Info
        :title="series.data?.title || ''"
        :age="series.data?.age || 0"
        :year="new Date(series.data?.year || Date.now()).getFullYear()"
        :description="series.data?.description || ''"
        :genre="series.data?.genre || ''"
        :episodes="series.data?.videos?.length || 0"
        :title-image="series.data?.title_image?.url"
        :buttons="[]"
        class="md:max-w-md md:m-10"
      ></Info>
    </div>
    <div
      class="relative overflow-y-scroll z-20 overflow-x-visible hide-scrollbar py-5 mx-10"
    >
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-full lg:top-1/3 h-1/4 overflow-x-visible"
      >
        <div class="flex flex-col space-y-4 w-full overflow-x-visible">
          <PlaylistEntry
            v-for="video in series.data?.videos || []"
            :id="video.documentId"
            :key="video.id"
            :thumbnail="api(video.thumbnail?.url)"
            :title="video.title"
            :episode="video.episode || undefined"
            class="snap-start"
          />
        </div>
      </div>
    </div>
    <div
      id="gradient"
      class="h-10 bg-linear-to-t from-black to-transparent absolute bottom-0 w-full left-0 z-50"
    ></div>
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
  background: radial-gradient(
    at top right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
}
</style>
