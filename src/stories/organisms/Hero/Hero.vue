<template>
  <section
    v-if="featured && !isInvisible"
    ref="hero"
    class="fixed flex w-full h-[90vh] min-h-[95vh] mb-20 bg-center bg-no-repeat bg-cover bg-clean-dark-500 top-0 left-0"
    :style="{
      backgroundImage: `url('https://epg-image.zdf.de/fotobase-webdelivery/images/58d19dab-d2e0-4309-8c50-359715709ac2?layout=1280x720')`,
      opacity: opacity / 100,
      filter: `blur(${5 - opacity / 20}px)`,
    }"
  >
    <!-- ${api(featured?.background_image?.data?.attributes?.url)} -->
    <div
      id="gradient"
      class="absolute top-0 left-0 w-full h-full gradient"
    ></div>
    <div class="z-10 flex flex-col justify-center w-full h-full p-10 lg:w-1/2">
      <!-- <Info
            :title="featured?.title!"
            :title_image="featured?.title_image?.data?.attributes?.url"
            :year="new Date(featured?.year).getFullYear()"
            :age="featured?.age!"
            :episodes="featured?.series?.data?.attributes?.videos?.data.length || 1"
            :genre="featured?.genre!"
            :description="featured?.description!"
            :buttons="[{
                text: 'Watch Now',
                to: '/watch/' + item.data?.attributes?.video?.data?.id,
                icon: PlayIcon
            }]"
            class="max-w-md" /> -->
      <!-- Quick and dirty, hardcode Rotkäppchen -->
      <Info
        title="Rotkäppchen"
        :year="2024"
        :age="12"
        :episodes="1"
        genre="Fantasy"
        description="Danny kann es nicht glauben, das Rotkäppchen wird vom Wolf gefressen? Mit einer selbstgebauten Zeitmaschine reist er in den Märchenwald, um Rotkäppchen zu beschützen."
        :buttons="[
          {
            text: 'Auf ZDF ansehen',
            to: 'https://www.zdf.de/filme/spielfilme/herr-bergmanns-rotkaeppchen-100.html',
            icon: FilmIcon,
          },
        ]"
        class="max-w-md"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useStrapi } from '@/main';
import { FeaturedEntity } from '@/models/types';
import Info from '../../molecules/Info/Info.vue';
import { PlayIcon, FilmIcon } from '@heroicons/vue/outline';
import { api } from '@/util/paths';

const opacity = ref(100);
console.debug('opacity', opacity.value);

const isInvisible = computed(() => opacity.value <= 0);

const item = useStrapi<FeaturedEntity>(
  [
    'featured',
    {
      populate: {
        video: {
          populate: '*',
        },
      },
    },
  ],
  {
    onSuccess: (data) => {
      console.debug('featured', data);
      console.debug(
        'image',
        item.data?.attributes?.video?.data?.attributes?.background_image?.data
          ?.attributes?.url,
      );
    },
  },
);

const featured = computed(() => item.data?.attributes?.video?.data?.attributes);

const hero = ref<HTMLElement>();

const scrollHeight = hero.value?.offsetHeight || 100;

const onScroll = () => {
  const scroll = window.scrollY;
  opacity.value = 100 - (scroll / scrollHeight) * 20;

  if (opacity.value < 0) opacity.value = 0;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.gradient {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    at top right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 60%
  );
}
</style>
