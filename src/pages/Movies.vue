<template>
    <!-- Movies -->
    <h1 class="mt-20 mb-2 text-xl font-bold">Movies</h1>
    <div class="flex flex-row w-full flex-nowrap h-min">
        <Poster
            v-if="movies"
            v-for="movie in movies"
            :name="movie.attributes!.title"
            :subtitle="movie.attributes!.rating + ' stars'"
            :image="`https://api.bergflix.de${movie.attributes!.background_image?.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/movies/${movie.id}`"
        />
    </div>
    <!-- Episodes -->
    <h1 class="mt-20 mb-2 text-xl font-bold">New Episodes</h1>
    <div class="flex flex-row w-full flex-nowrap h-min">
        <Poster
            v-for="movie in episodes"
            :name="movie.attributes!.title"
            :subtitle="movie.attributes!.series?.data?.attributes?.Title"
            :image="`https://api.bergflix.de${movie.attributes!.background_image!.data?.attributes?.formats.thumbnail.url}`"
            :link-icon="PencilIcon"
            :link="`/movies/${movie.id}`"
        />
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import Poster from '../components/Common/Poster.vue';
import { PencilIcon } from '@heroicons/vue/outline';
import { strapi } from '../main';
import { VideoEntity } from '../models/types';

const store = useStore();

const movies = await strapi.find('videos', {
    populate: ['series', 'background_image'],
    filters: {
        series: {
            id: {
                $null: true
            }
        }
    }
}).then(res => {
    return res.data as VideoEntity[];
});

const episodes = await strapi.find('videos', {
    populate: ['series', 'series.title', 'background_image'],
    filters: {
        series: {
            id: {
                $notNull: true
            }
        }
    }
}).then(res => {
    return res.data as VideoEntity[];
});

</script>

<style lang="scss">
</style>