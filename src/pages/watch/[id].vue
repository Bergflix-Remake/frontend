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
          :key="url!"
          :vid="url!"
          :page-id="id"
          :outro-time="movie.data.attributes?.outro_start || undefined"
          @finished="playNext()"
        />
        <div v-else class="w-full h-full justify-center items-center flex">
          <div
            v-if="playbackFinished"
            class="flex flex-col justify-center items-center"
          >
            <h2 class="text-2xl font-bold">Danke fürs Ansehen!</h2>
            <p
              v-if="series?.videos?.data.length && !isLastEpisode"
              class="text-delorean-500 font-thin"
            >
              Die nächste Folge wird in ein paar Momenten abgespielt...
            </p>
            <p v-else class="text-delorean-500 font-thin">
              Das könnte dich auch interessieren:
            </p>
            <Poster v-if="recommendations.isLoading" loading />
            <Poster
              v-else-if="recommendations.isSuccess"
              :src="
                recommendation?.attributes?.thumbnail?.data?.attributes?.url
              "
              @click="
                router.push({
                  name: 'watch',
                  params: { id: recommendation?.id },
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
              :to="movie.data?.attributes?.youtube_url || '#'"
              :icon="ExternalLinkIcon"
              class="font-mono"
              >{{ movie.data?.attributes?.youtube_url }}</Link
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
        <Title
          :image="
            api(
              movie.data?.attributes?.series?.data?.attributes?.title_image
                ?.data?.attributes?.url,
            )
          "
          >{{ series.title }}</Title
        >
        <div class="flex flex-col space-y-2 xl:max-h-96 overflow-y-auto">
          <PlaylistEntry
            v-for="video in series.videos?.data"
            :id="video.id!"
            :key="video.id!"
            :episode="video.attributes?.episode!"
            :thumbnail="`https://api.bergflix.de${video.attributes?.thumbnail?.data?.attributes?.url}`"
            :title="video.attributes?.title!"
            :playing="Number(video.id) === id"
          />
        </div>
      </div>
    </div>
    <!-- Info -->
    <div
      class="w-full p-10 bg-clean-dark-600 rounded-lg flex md:flex-row flex-col ring-1 ring-delorean-800"
    >
      <div class="md:w-1/2 w-full">
        <Title
          :image="
            api(movie.data?.attributes?.title_image?.data?.attributes?.url)
          "
          >{{ title }}</Title
        >
        <p class="text-gray-500 font-light" v-html="description" />
      </div>
      <div class="md:ml-auto mt-5">
        <InfoRow
          :year="new Date(movie.data?.attributes?.year!).getFullYear()"
          :age="movie.data?.attributes?.age!"
          :genre="movie.data?.attributes?.genre!"
          :episodes="series?.videos?.data?.length"
        />
      </div>
    </div>
    <div
      class="w-full p-10 bg-clean-dark-600 rounded-lg flex flex-col ring-1 ring-delorean-800"
    >
      <Subtitle>Mitwirkende</Subtitle>
      <div class="flex flex-wrap">
        <Contributor
          v-for="contributor in movie.data?.attributes?.contributors"
          :key="contributor?.id"
          :name="contributor?.contributor?.data?.attributes?.name!"
          :role="contributor?.role!"
          :character="contributor?.character"
          :image="`https://api.bergflix.de${contributor?.contributor?.data?.attributes?.image?.data?.attributes?.url}`"
          :url="contributor?.contributor?.data?.attributes?.href!"
        />
      </div>
      <Subtitle>Unterstützende</Subtitle>
      <div class="flex flex-wrap">
        <Contributor
          v-for="studio in movie.data?.attributes?.studios?.data"
          :key="studio?.id!"
          :name="studio?.attributes?.name!"
          :role="studio?.attributes?.role!"
          :url="studio.attributes?.url || ''"
          :image="api(studio.attributes?.logo.data?.attributes?.url!)"
        />
        <Contributor
          v-if="movie.data?.attributes?.studios?.data?.length === 0"
          name="Troublecat Productions"
          role="Studio"
          url="https://www.youtube.com/@herrbergmann"
          image="https://api.bergflix.de/uploads/troublecat_logo_1dac3b63c7.jpg"
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
import { VideoEntity } from '@/models/types';
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
const invalidId = computed(
  () => !route.params.id || isNaN(Number(route.params.id)),
);
const id = computed(() => Number(route.params.id));
const movie = useStrapiOne<VideoEntity>([
  'videos',
  id,
  {
    populate: {
      contributors: {
        populate: {
          contributor: {
            populate: ['image'],
          },
        },
      },
      series: {
        populate: {
          videos: {
            populate: ['thumbnail'],
          },
          title_image: true,
        },
      },
      title_image: true,
      studios: {
        populate: ['logo'],
      },
    },
    sort: 'episode:asc',
  },
]);
const isExternal = computed(() => !!movie.data?.attributes?.is_external);
const series = computed(() => movie.data?.attributes?.series?.data?.attributes);
// Get youtube video id from movie.data?.attributes?.youtube_url using regex
const url = computed(
  () => movie.data?.attributes?.youtube_url?.match(/v=(.*)/)?.[1],
);

const isLastEpisode = computed(
  () =>
    series.value?.videos?.data[series.value?.videos?.data.length - 1]?.id !==
    id.value.toString(),
);

console.debug(
  '%c%s',
  consoleStyles,
  `Video ID: ${id.value} | Series: ${series.value?.title} | Episode: ${movie.data?.attributes?.episode} | Last Episode: ${isLastEpisode.value}`,
);

// When playback has finished and the video is not part of a series, get a random video from the same genre
const recommendations = useStrapi<VideoEntity[]>(
  [
    'videos',
    {
      populate: ['thumbnail'],
      filters: {
        genre: movie.data?.attributes?.genre,
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
  // {
  //   enabled: playbackFinished.value && !series.value?.videos?.data?.length,
  // }
);

const recommendation = computed(
  () =>
    recommendations.data?.[
      Math.floor(Math.random() * recommendations.data?.length)
    ],
);

const title = computed(() => movie.data?.attributes?.title);
const description = computed(() => movie.data?.attributes?.description);

watch(id, () => {
  location.reload();
});

const playNext = () => {
  playbackFinished.value = true;
  if (series.value?.videos?.data?.length) {
    const currentEpisode = movie.data?.attributes?.episode;
    const next = series.value.videos.data.find(
      (video) =>
        currentEpisode != null &&
        video.attributes?.episode === currentEpisode + 1,
    );
    if (next) {
      console.debug(
        '%cWatchpage',
        consoleStyles,
        'Playing next episode',
        next.id,
      );
      router.push({ name: 'watch', params: { id: next.id } });
    }
  }
};
</script>
