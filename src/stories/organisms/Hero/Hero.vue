<template>
    <section
class="relative flex w-full h-[90vh] min-h-[95vh] mb-20 bg-center bg-no-repeat bg-cover bg-clean-dark-500"
        :style="{ backgroundImage: `url('${featured?.image}')` }">
        <div id="gradient" class="absolute top-0 left-0 w-full h-full gradient"></div>
        <div class="z-10 flex flex-col justify-center w-full h-full p-10 lg:w-1/2">
            <Info v-if="item.isSuccess && featured" v-bind="featured" class="max-w-md" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/outline';
import { computed, ref } from 'vue';
import { useStrapi, useStrapiOne } from '@/main';
import { FeaturedEntity, VideoEntity } from '@/models/types';
import Info from '../../molecules/Info/Info.vue';


const featured = ref<{
    title: string;
    year: number;
    age: number;
    episodes: number;
    genre: string;
    title_image?: string;
    image: string;
    description: string;
    buttons: {
        text: string,
        to: string,
        type?: "solid" | "outline" | "ghost",
        color?: string,
        icon?: any,
    }[];
}>();


const item = useStrapi<FeaturedEntity>(['featured', {
    populate: 'video'
}])

const videoId = computed(() => item.data?.attributes?.video?.data?.id);
const enabled = computed(() => !!item.data?.attributes?.video?.data?.id);

useStrapiOne<VideoEntity>(['videos', videoId, {
    populate: '*'
}], {
    onSuccess: (data) => {
        const video = data?.attributes
        featured.value = {
            title: video?.title!,
            year: new Date(video?.year).getFullYear(),
            age: video?.age!,
            episodes: video?.series?.data?.attributes?.videos?.data?.length || 1,
            genre: video?.genre as string,
            title_image: video?.title_image?.data?.attributes?.url,
            image: "https://api.bergflix.de" + video?.thumbnail?.data?.attributes?.url,
            description: video?.description!,
            buttons: [
                {
                    text: 'Ansehen',
                    to: `/video/${data.id}`,
                    icon: PlayIcon,
                }
            ],
        }

    },
    enabled
})




</script>

<style>
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
</style>
