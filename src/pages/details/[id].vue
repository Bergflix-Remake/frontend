<script setup lang="ts">
import Info from '@/stories/molecules/Info/Info.vue';
import PlaylistEntry from '@/stories/molecules/PlaylistEntry.vue';
import { PlayIcon } from '@heroicons/vue/solid';
import { ref } from 'vue';
const series = {
  title: 'Captain Pineapple',
  year: 2021,
  age: 12,
  episodes: 24,
  genre: 'Comedy',
  title_image:
    '/uploads/Logo_Captain_Pineapple_bc5af96c78.png?updated_at=2022-11-20T18:10:59.515Z',
  description: 'Lorem Ipsum',
  videos: [
    {
      data: {
        id: 6,
        attributes: {
          title: 'Captain Pineapple - Der Film',
          createdAt: '2022-02-21T17:27:55.250Z',
          updatedAt: '2022-11-21T10:57:09.603Z',
          publishedAt: '2022-02-21T17:27:56.686Z',
          locale: 'de',
          youtube_url: 'https://www.youtube.com/watch?v=nzIdSgnmEJU',
          description:
            'Bergmann hat seinen Freunden Paluten und Sturmwaffel ein unvergessliches Weihnachtsfest versprochen. Blöd nur, dass er erst einen Tag vor Weihnachten realisiert, dass er noch rein gar nichts vorbereitet hat. Und so beginnt eine völlig verrückte Reise quer durch Pineapple Bay, um Weihnachten doch noch in letzter Sekunde zu retten. Wäre da doch nur nicht diese verdammte Ananas...',
          rating: 2.5,
          year: '2022-03-31',
          age: 16,
          genre: 'Action',
          original: true,
          title_image: {
            data: {
              id: 96,
              attributes: {
                name: 'LogoCaptainPineapple.png',
                alternativeText: 'LogoCaptainPineapple.png',
                caption: 'LogoCaptainPineapple.png',
                width: 1920,
                height: 1080,
                formats: {
                  thumbnail: {
                    name: 'thumbnail_LogoCaptainPineapple.png',
                    hash: 'thumbnail_Logo_Captain_Pineapple_bc5af96c78',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 245,
                    height: 138,
                    size: 32.57,
                    url: '/uploads/thumbnail_Logo_Captain_Pineapple_bc5af96c78.png',
                  },
                  large: {
                    name: 'large_LogoCaptainPineapple.png',
                    hash: 'large_Logo_Captain_Pineapple_bc5af96c78',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 1000,
                    height: 563,
                    size: 166.79,
                    url: '/uploads/large_Logo_Captain_Pineapple_bc5af96c78.png',
                  },
                  medium: {
                    name: 'medium_LogoCaptainPineapple.png',
                    hash: 'medium_Logo_Captain_Pineapple_bc5af96c78',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 750,
                    height: 422,
                    size: 121.93,
                    url: '/uploads/medium_Logo_Captain_Pineapple_bc5af96c78.png',
                  },
                  small: {
                    name: 'small_LogoCaptainPineapple.png',
                    hash: 'small_Logo_Captain_Pineapple_bc5af96c78',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 500,
                    height: 281,
                    size: 76.74,
                    url: '/uploads/small_Logo_Captain_Pineapple_bc5af96c78.png',
                  },
                },
                hash: 'Logo_Captain_Pineapple_bc5af96c78',
                ext: '.png',
                mime: 'image/png',
                size: 39.08,
                url: '/uploads/Logo_Captain_Pineapple_bc5af96c78.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2022-11-20T18:10:59.515Z',
                updatedAt: '2022-11-20T18:10:59.515Z',
              },
            },
          },
          background_image: {
            data: {
              id: 94,
              attributes: {
                name: 'Captain Pineapple.png',
                alternativeText: 'Captain Pineapple.png',
                caption: 'Captain Pineapple.png',
                width: 1920,
                height: 1080,
                formats: {
                  thumbnail: {
                    name: 'thumbnail_Captain Pineapple.png',
                    hash: 'thumbnail_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 245,
                    height: 138,
                    size: 20.82,
                    url: '/uploads/thumbnail_Captain_Pineapple_7d33a688f5.png',
                  },
                  large: {
                    name: 'large_Captain Pineapple.png',
                    hash: 'large_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 1000,
                    height: 563,
                    size: 226.82,
                    url: '/uploads/large_Captain_Pineapple_7d33a688f5.png',
                  },
                  medium: {
                    name: 'medium_Captain Pineapple.png',
                    hash: 'medium_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 750,
                    height: 422,
                    size: 123.18,
                    url: '/uploads/medium_Captain_Pineapple_7d33a688f5.png',
                  },
                  small: {
                    name: 'small_Captain Pineapple.png',
                    hash: 'small_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 500,
                    height: 281,
                    size: 62.39,
                    url: '/uploads/small_Captain_Pineapple_7d33a688f5.png',
                  },
                },
                hash: 'Captain_Pineapple_7d33a688f5',
                ext: '.png',
                mime: 'image/png',
                size: 148.63,
                url: '/uploads/Captain_Pineapple_7d33a688f5.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2022-11-20T17:00:21.104Z',
                updatedAt: '2022-11-20T17:00:21.104Z',
              },
            },
          },
          series: { data: null },
          thumbnail: {
            data: {
              id: 94,
              attributes: {
                name: 'Captain Pineapple.png',
                alternativeText: 'Captain Pineapple.png',
                caption: 'Captain Pineapple.png',
                width: 1920,
                height: 1080,
                formats: {
                  thumbnail: {
                    name: 'thumbnail_Captain Pineapple.png',
                    hash: 'thumbnail_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 245,
                    height: 138,
                    size: 20.82,
                    url: '/uploads/thumbnail_Captain_Pineapple_7d33a688f5.png',
                  },
                  large: {
                    name: 'large_Captain Pineapple.png',
                    hash: 'large_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 1000,
                    height: 563,
                    size: 226.82,
                    url: '/uploads/large_Captain_Pineapple_7d33a688f5.png',
                  },
                  medium: {
                    name: 'medium_Captain Pineapple.png',
                    hash: 'medium_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 750,
                    height: 422,
                    size: 123.18,
                    url: '/uploads/medium_Captain_Pineapple_7d33a688f5.png',
                  },
                  small: {
                    name: 'small_Captain Pineapple.png',
                    hash: 'small_Captain_Pineapple_7d33a688f5',
                    ext: '.png',
                    mime: 'image/png',
                    path: null,
                    width: 500,
                    height: 281,
                    size: 62.39,
                    url: '/uploads/small_Captain_Pineapple_7d33a688f5.png',
                  },
                },
                hash: 'Captain_Pineapple_7d33a688f5',
                ext: '.png',
                mime: 'image/png',
                size: 148.63,
                url: '/uploads/Captain_Pineapple_7d33a688f5.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2022-11-20T17:00:21.104Z',
                updatedAt: '2022-11-20T17:00:21.104Z',
              },
            },
          },
          contributors: [
            {
              id: 11,
              role: 'Regisseur, Sprecher, Editor',
              character: 'Herr Bergmann',
            },
            { id: 12, role: 'Sprecher', character: 'Paluten' },
            { id: 43, role: 'Sprecher', character: 'Sturmwaffel' },
          ],
          localizations: { data: [] },
        },
      },
      meta: {},
    },
  ],
  buttons: [
    {
      text: 'Ansehen',
      to: '/watch/1',
      icon: PlayIcon,
    },
  ],
};

const scrollProgress = ref(0);
</script>
<template>
  <main
    class="w-full h-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2"
  >
    <div
      class="flex flex-col w-full h-screen justify-center"
    >
      <Info v-bind="series" class="md:max-w-md md:m-10"></Info>
    </div>
    <div class="relative overflow-y-scroll">
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-full top-1/3 h-1/4"
      >
        <div class="flex flex-col space-y-4 w-full">
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
          <PlaylistEntry
            v-for="video in series.videos"
            :id="video.data?.id.toString()"
            :key="video.data?.id"
            :thumbnail="
              'https://api.bergflix.de' +
              video.data?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            "
            :title="video.data?.attributes?.title"
            :episode="series.videos?.indexOf(video) + 1"
          />
        </div>
      </div>
    </div>
  </main>
</template>
