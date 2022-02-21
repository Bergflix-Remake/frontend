<template>
    <h1 class="mt-20 mb-2 text-xl font-bold">Movies</h1>
    <div class="flex flex-row w-full flex-nowrap h-min">
        <Poster
            v-for="serie in series"
            :name="serie.attributes!.Title"
            :subtitle="serie.attributes!.videos?.data.length + ' Episode' + (serie.attributes!.videos?.data.length! > 1 ? 's' : '')"
            :image="`https://api.bergflix.de${serie.attributes!.background_image?.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/series/${serie.id}`"
        />
    </div>
</template>

<script setup lang="ts">
import { strapi } from '../main';
import { SerieEntity, SerieEntityResponseCollection } from '../models/types';
import { PencilIcon } from '@heroicons/vue/outline';
import Poster from '../components/Common/Poster.vue';

const series = await strapi.find('series', {
    populate: ['*', 'videos', 'background_image'],
}).then(res => {
    return res.data as SerieEntity[];
});


</script>

<style lang="scss">
</style>