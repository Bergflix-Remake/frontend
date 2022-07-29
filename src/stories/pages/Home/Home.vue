<template>
    <div class="flex flex-col bg-black">
        <Hero />
        <section class="p-10">
            <Title class="mb-2">
                <Logo :long="true">Originals</Logo>
            </Title>
            <ScrollableRow>
                <Poster v-if="originals.isLoading" loading />
                <Poster v-else-if="originals.isSuccess" v-for="movie in originals.data" :key="movie.id!"
                    :image="movie.attributes?.thumbnail.data?.attributes?.url"
                    :original="movie.attributes?.original!" />
                <Poster v-if="originals.isError" error />
            </ScrollableRow>
            <Title class="mb-2">Filme</Title>
            <ScrollableRow>
                <Poster v-if="videos.isLoading" loading />
                <Poster v-else-if="videos.isSuccess" v-for="movie in videos.data" :key="movie.id!"
                    :image="movie.attributes?.thumbnail.data?.attributes?.url"
                    :original="movie.attributes?.original!" />
                <Poster v-if="videos.isError" error />
            </ScrollableRow>
            <Title class="mb-2">Serien</Title>
            <ScrollableRow>
                <Poster v-if="series.isLoading" loading />
                <Poster v-else-if="videos.isSuccess" v-for="serie in series.data" :key="serie.id!"
                    :image="serie.attributes?.thumbnail.data?.attributes?.url"
                    :original="serie.attributes?.original!" />
                <Poster v-if="series.isError" error />
            </ScrollableRow>
        </section>
    </div>
</template>

<script setup lang="ts">
import Hero from '../../organisms/Hero/Hero.vue';
import ScrollableRow from '../../cells/ScrollableRow.vue';
import Poster from '../../molecules/Poster.vue';
import Title from '../../atoms/Title/Title.vue';
import Logo from '../../atoms/Logo.vue';
import { useStrapi } from '../../../main';
import { SerieEntity, VideoEntity } from '../../../models/types';

const originals = useStrapi<VideoEntity[]>(['videos', {
    filters: {
        original: true
    },
    populate: {
        thumbnail: '*'
    },
    sort: 'year:desc'
}]);

const videos = useStrapi<VideoEntity[]>(['videos', {
    populate: {
        thumbnail: '*',
        series: '*'
    },
    sort: 'year:desc',
    filters: {
        series: {
            title: {
                $null: true
            }
        }
    }

}]);

const series = useStrapi<SerieEntity[]>(['series', {
    populate: {
        thumbnail: '*'
    },
    sort: 'year:desc'
}]);
</script>

<style>
</style>
