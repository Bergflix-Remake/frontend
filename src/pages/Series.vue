<template>
    <h1 class="mt-20 mb-2 text-xl font-bold">Series</h1>
    <Loader v-if="series.isLoading" />
    <div class="flex flex-row w-full flex-nowrap h-min" v-if="series.isSuccess">
        <Poster
            v-for="serie in series.data"
            :name="serie.attributes!.Title"
            :subtitle="serie.attributes!.videos?.data.length + ' Episode' + (serie.attributes!.videos?.data.length! > 1 ? 's' : '')"
            :image="`https://api.bergflix.de${serie.attributes!.background_image?.data?.attributes?.url}`"
            :link-icon="PencilIcon"
            :link="`/series/${serie.id}`"
        />
    </div>
</template>

<script setup lang="ts">
import { useStrapi } from '../main';
import { PencilIcon } from '@heroicons/vue/outline';
import Poster from '../components/Common/Poster.vue';
import Loader from '../components/Loader.vue';

const series: any = useStrapi(['series', {
    populate: '*',
}])


</script>

<style lang="scss">
</style>