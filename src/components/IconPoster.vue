<template>
<div
@click="$router.push('/library')"
tabindex="0"
id="poster"
class="relative mb-5 mr-5 transition-all transform bg-center bg-no-repeat bg-cover shadow-lg cursor-pointer hover:shadow-2xl group focus:border-4 hover:border-4 hover:scale-105 aspect-16/9 w-96 rounded-xl"
:style="'background-image: url(\'' + poster +'\')'">
    <component :is="icon" class="absolute z-0 w-16 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
</div>
</template>

<script setup lang="ts">
import * as HeroIcons from '@heroicons/vue/outline'
import { RenderFunction } from '@vue/runtime-core';
type IconName = keyof typeof HeroIcons;
interface IconProps {
    icon: IconName;
}
const props = defineProps({
    poster: {
        type: String,
        default: 'https://cdn.bergflix.de/imgs/Background/1.png'
    },
    link: {
        type: String,
        required: true
    },
    icon: {
        type: Object as () => IconProps,
        default: HeroIcons.DotsCircleHorizontalIcon
    }
})
</script>

<style lang="scss">

</style>