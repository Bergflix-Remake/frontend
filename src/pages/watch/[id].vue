<route lang="yaml">
name: watch
meta:
  showPadding: true
</route>

<template>
  <article
    v-if="!invalidId"
    class="p-5 flex flex-col w-full min-h-screen space-y-2"
  >
    <div class="flex flex-col xl:flex-row xl:space-x-2">
      <!-- Player -->
      <div
        class="bg-clean-dark-600 w-full aspect-video md:rounded-l-lg overflow-hidden ring-1 ring-delorean-800"
        :class="{ 'md:rounded-lg': !series }"
      >
        <Player
          v-if="movie.isSuccess && !playbackFinished && !isExternal"
          :key="url || ''"
          :vid="url || ''"
          :page-id="id"
          :outro-time="movie.data?.outro_start || undefined"
          @finished="playNext()"
        />
        <div
          v-else
          class="w-full h-full justify-center items-center flex bg-center bg-no-repeat bg-cover"
          style="
            background-image: url('https://cdn.bergflix.de/Background/1.png');
          "
        >
          <div
            v-if="playbackFinished"
            class="flex flex-col justify-center items-center"
          >
            <h2 class="text-2xl font-bold">Danke fürs Ansehen!</h2>
            <p
              v-if="series?.videos?.length && !isLastEpisode"
              class="text-delorean-500 font-thin"
            >
              Die nächste Folge wird in ein paar Momenten abgespielt...
            </p>
            <p v-else class="text-delorean-500 font-thin">
              Das könnte dich auch interessieren:
            </p>
            <Poster v-if="recommendations.isLoading" loading />
            <Poster
              v-else-if="recommendations.isSuccess && recommendation"
              :src="recommendation.thumbnail?.url"
              @click="
                router.push({
                  name: 'watch',
                  params: { id: recommendation.documentId },
                })
              "
            />
            <Button class="m-2" @click="router.push({ name: 'home' })"
              >Home</Button
            >
          </div>
          <div v-else-if="isExternal" class="text-center max-w-md space-y-2">
            <Subtitle>Externer Inhalt</Subtitle>
            <p>
              Dieses Video ist nicht auf YouTube verfügbar, oder der
              veröffentlichende Kanal hat das Einbetten deaktiviert.
              <br />
              Der Inhalt ist unter der folgenden URL verfügbar:
            </p>
            <Link
              :to="movie.data?.youtube_url || '#'"
              :icon="ExternalLinkIcon"
              class="font-mono text-primary-100!"
              >{{ movie.data?.youtube_url }}</Link
            >
          </div>
          <Loader v-else />
        </div>
      </div>
      <!-- Playlist -->
      <div
        v-if="series"
        class="w-full xl:w-1/3 ring-1 ring-delorean-800 bg-clean-dark-600 xl:rounded-bl-none xl:rounded-r-lg rounded-b-lg p-5 flex flex-col"
      >
        <Title :image="api(movie.data?.series?.title_image?.url)">
          {{ series.title }}
        </Title>
        <div class="flex flex-col space-y-2 xl:max-h-96 overflow-y-auto">
          <PlaylistEntry
            v-for="video in series.videos || []"
            :id="video.documentId"
            :key="video.id"
            :episode="video.episode || undefined"
            :thumbnail="api(video.thumbnail?.url)"
            :title="video.title"
            :playing="video.id === movie.data?.id"
          />
        </div>
      </div>
    </div>
    <!-- Info -->
    <div
      class="w-full p-10 bg-clean-dark-600 rounded-lg flex md:flex-row flex-col ring-1 ring-delorean-800"
    >
      <div class="md:w-1/2 w-full">
        <Title :image="api(movie.data?.title_image?.url)">
          {{ title }}
        </Title>
        <p class="text-gray-500 font-light" v-html="description" />
      </div>
      <div class="md:ml-auto mt-5">
        <InfoRow
          :year="new Date(movie.data?.year || Date.now()).getFullYear()"
          :age="movie.data?.age || 0"
          :genre="movie.data?.genre || ''"
          :episodes="series?.videos?.length"
        />
      </div>
    </div>
    <div
      class="w-full p-10 bg-clean-dark-600 rounded-lg flex flex-col ring-1 ring-delorean-800"
    >
      <Subtitle>Mitwirkende</Subtitle>
      <div class="flex flex-wrap">
        <Contributor
          v-for="contributor in movie.data?.contributors || []"
          :key="contributor.id"
          :name="contributor.contributor?.name || ''"
          :role="contributor.role"
          :character="contributor.character || ''"
          :image="
            api(
              contributor.contributor?.image?.url,
              'https://cdn.bergflix.de/logo/light.png',
            )
          "
          :url="contributor.contributor?.href || ''"
        />
      </div>
      <Subtitle>Unterstützende</Subtitle>
      <div class="flex flex-wrap">
        <Contributor
          v-for="studio in movie.data?.studios || []"
          :key="studio.id"
          :name="studio.name"
          :role="studio.role || ''"
          :url="studio.url || ''"
          :image="api(studio.logo?.url)"
        />
        <Contributor
          v-if="movie.data?.studios?.length === 0"
          name="Troublecat Productions"
          role="Studio"
          url="https://www.youtube.com/@herrbergmann"
          :image="api('/uploads/troublecat_logo_1dac3b63c7.jpg')"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import Title from '@atoms/Title/Title.vue';
import InfoRow from '@molecules/InfoRow/InfoRow.vue';
import Subtitle from '@atoms/Subtitle/Subtitle.vue';
import Contributor from '@molecules/Contributor.vue';
import PlaylistEntry from '@molecules/PlaylistEntry.vue';
import { useStrapi, useStrapiOne } from '@/main';
import { Video } from '@/models/types';
import { useRoute, useRouter } from 'vue-router';
import Loader from '@/components/Loader.vue';
import { computed, ref, watch } from 'vue';
import Player from '@molecules/Player.vue';
import Button from '@/stories/atoms/Button.vue';
import Poster from '@/stories/molecules/Poster.vue';
import { api } from '@/util/paths';
import Link from '@/stories/atoms/Link.vue';
import { ExternalLinkIcon } from '@heroicons/vue/outline';

const playbackFinished = ref(false);

const consoleStyles =
  'background-color: lime; color: white; padding: 2px 4px; border-radius: 4px; font-weight: bold; font-family: sans-serif; margin: 10px 0;';
const route = useRoute();
const router = useRouter();
const routeId = computed(() => String(route.params.id));
const invalidId = computed(
  () => !route.params.id || !/^[A-Za-z0-9_-]+$/.test(routeId.value),
);
const isNumericId = computed(() => /^\d+$/.test(routeId.value));
const id = computed(() => Number(route.params.id) || 0);

const movie = useStrapiOne<Video>([
  'videos',
  routeId,
  {
    populate: {
      contributors: {
        populate: {
          contributor: {
            populate: { image: true },
          },
        },
      },
      series: {
        populate: {
          videos: {
            populate: { thumbnail: true },
          },
          title_image: true,
        },
      },
      title_image: true,
      studios: {
        populate: { logo: true },
      },
    },
  },
]);

const isExternal = computed(() => !!movie.data?.is_external);
const series = computed(() => movie.data?.series || null);
const url = computed(() => {
  const youtubeUrl = movie.data?.youtube_url || '';
  return (
    youtubeUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/)?.[1] || undefined
  );
});

const isLastEpisode = computed(() => {
  const videos = series.value?.videos || [];
  return videos[videos.length - 1]?.id !== movie.data?.id;
});

watch(
  () => movie.data?.documentId,
  (documentId) => {
    if (isNumericId.value && documentId && documentId !== routeId.value) {
      router.replace({ name: 'watch', params: { id: documentId } });
    }
  },
  { immediate: true },
);

console.debug(
  '%c%s',
  consoleStyles,
  `Video ID: ${movie.data?.id} | Series: ${series.value?.title} | Episode: ${movie.data?.episode} | Last Episode: ${isLastEpisode.value}`,
);

const recommendations = useStrapi<Video[]>(
  [
    'videos',
    {
      populate: { thumbnail: true },
      filters: {
        genre: movie.data?.genre,
        id: {
          $ne: movie.data?.id,
        },
      },
      pagination: {
        start: 0,
        limit: 10,
      },
    },
  ],
  {
    enabled: computed(() => !!movie.data?.genre),
  },
);

const recommendation = computed(
  () =>
    recommendations.data?.[
      Math.floor(Math.random() * (recommendations.data?.length || 1))
    ],
);

const title = computed(() => movie.data?.title || '');
const description = computed(() => movie.data?.description || '');

watch(id, () => {
  playbackFinished.value = false;
});

const playNext = () => {
  playbackFinished.value = true;
  const videos = series.value?.videos || [];
  if (videos.length) {
    const currentEpisode = movie.data?.episode;
    const next = videos.find(
      (video) => currentEpisode != null && video.episode === currentEpisode + 1,
    );
    if (next) {
      router.push({ name: 'watch', params: { id: next.documentId } });
    }
  }
};
</script>
