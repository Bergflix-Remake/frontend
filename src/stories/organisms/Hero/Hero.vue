<template>
    <section class="relative flex w-full h-[90vh] min-h-[95vh] mb-20 bg-center bg-no-repeat bg-cover bg-clean-dark-500"
        :style="{ backgroundImage: `url('https://cdn.bergflix.de/thumbnails/Adventskalender-2014-Finale-Thumbnail.png')` }">
        <div id="gradient" class="absolute top-0 left-0 w-full h-full gradient"></div>
        <div class="z-10 flex flex-col justify-center w-full h-full p-10 lg:w-1/2">
            <Info v-bind="featured" class="max-w-md" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ChevronDoubleRightIcon, PlayIcon } from '@heroicons/vue/outline';
import Info from '../../cells/Info/Info.vue';

const featured = {
    year: 2022,
    age: 16,
    episodes: 10,
    genre: "Action",
    title: "Captain Pineapple",
    image: 'https://cdn.bergflix.de/video_icons/captain_pineapple.png',
    description: 'Eum repellendus quasi quia libero quis est autem consequatur nisi. Harum debitis eaque quod. Iste vero molestiae doloribus est repellendus facilis. Et cum perspiciatis. Rerum doloremque sequi neque sequi possimus suscipit. Natus quasi in quaerat reprehenderit et minus.',
    buttons: [
        {
            text: 'Ansehen',
            to: '/watch/captain_pineapple',
            icon: PlayIcon,
        },
        {
            text: 'Folgen',
            to: '/series/captain_pineapple',
            icon: ChevronDoubleRightIcon,
            color: "clean-dark"
        }
    ]

}

</script>

<style>
.gradient {
    background: rgb(0, 0, 0);
    background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
</style>
