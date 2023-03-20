<template>
    <section
    v-if="featured"
    ref="hero"
class="fixed flex w-full h-[90vh] min-h-[95vh] mb-20 bg-center bg-no-repeat bg-cover bg-clean-dark-500 top-20 left-0"
        :style="{ backgroundImage: `url('${api(featured?.background_image?.data?.attributes?.url)}')`, opacity: opacity / 100, filter: `blur(${5 - opacity / 20}px)` }">
        <div id="gradient" class="absolute top-0 left-0 w-full h-full gradient"></div>
        <div class="z-10 flex flex-col justify-center w-full h-full p-10 lg:w-1/2">
            <Info
            :title="featured?.title!"
            :title_image="featured?.title_image?.data?.attributes?.url"
            :year="new Date(featured?.year).getFullYear()"
            :age="featured?.age!"
            :episodes="featured?.series?.data?.attributes?.videos?.data.length || 1"
            :genre="featured?.genre!"
            :description="featured?.description!"
            :buttons="[{
                text: 'Watch Now',
                to: '/watch/' + item.data?.id,
                icon: PlayIcon
            }]"
            class="max-w-md" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useStrapi } from '@/main';
import { FeaturedEntity } from '@/models/types';
import Info from '../../molecules/Info/Info.vue';
import { PlayIcon } from '@heroicons/vue/outline';
import { api } from '@/util/paths';


const opacity = ref(100);
console.debug('opacity', opacity.value);

const isInvisible = computed(() => opacity.value <= 0);


const item = useStrapi<FeaturedEntity>(['featured', {
    populate: {
        video: {
            populate: "*"
        }
    }
}], {
    onSuccess: (data) => {
        console.debug('featured', data);
        console.debug('image', item.data?.attributes?.video?.data?.attributes?.background_image?.data?.attributes?.url)
    }
})

const featured = computed(() => item.data?.attributes?.video?.data?.attributes);

const hero = ref<HTMLElement>();


// On scroll, increase or decrease the opacity variable so that at 50% of the height of the hero, the opacity is 0
onMounted(() => 
{
    const scrollHeight = hero.value?.offsetHeight || 100;
    const onScroll = () => {
        const scroll = window.scrollY;
        
        opacity.value = 100 - (scroll / scrollHeight) * 20;
        console.debug('scroll', scrollHeight, scroll, opacity.value);
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
})

onUnmounted(() => {
    window.removeEventListener('scroll', () => {});
})
</script>

<style scoped>
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%);
}
</style>
