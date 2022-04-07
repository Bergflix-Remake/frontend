<template>
<Loader class="mt-20" v-if="movies.isLoading || episodes.isLoading" />
<main v-if="movies.isSuccess && episodes.isSuccess">
    <!-- Movies -->
    <h1 class="mt-20 mb-2 text-xl font-bold">Movies</h1>
    <div class="flex flex-row w-full flex-nowrap h-min">
        <Poster
            v-for="movie in movies.data"
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
            v-for="movie in episodes.data"
            :name="movie.attributes!.title"
            :subtitle="movie.attributes!.series?.data?.attributes?.Title"
            :image="`https://api.bergflix.de${movie.attributes!.background_image!.data?.attributes?.formats.thumbnail.url}`"
            :link-icon="PencilIcon"
            :link="`/movies/${movie.id}`"
        />
    </div>
    </main>
</template>

<script setup lang="ts">
import Poster from '../components/Common/Poster.vue';
import { PencilIcon } from '@heroicons/vue/outline';
import { useStrapi } from '../main';
import Loader from '../components/Loader.vue';

const movies: any = useStrapi(['videos', {
    populate: ['series', 'background_image'],
    filters: {
        series: {
            id: {
                $null: true
            }
        }
    }}])

const episodes: any = useStrapi(['videos', {
    populate: ['series', 'series.title', 'background_image'],
    filters: {
        series: {
            id: {
                $notNull: true
            }
        }
    }}]);

</script>

<style lang="scss">
</style>