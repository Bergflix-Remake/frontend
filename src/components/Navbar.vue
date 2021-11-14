<template>
<nav class="fixed top-0 z-50 flex flex-row items-center w-screen h-20 p-2 space-x-5 text-gray-500 bg-gradient-to-b from-background_dark to-transparent">
    <div class="ml-2"></div>
    <h1 class="text-4xl font-bold text-white md:hidden">Bf<span class="font-bold text-primary-100">.</span></h1>
    <h1 class="hidden text-4xl font-bold text-white md:block">Bergflix<span class="font-bold text-primary-100">.</span></h1>
    <div class="h-5 mr-5 border-r-2 border-gray-600"></div>
    <ul class="flex flex-row space-x-10">
        <li v-for="item in navItems">
            <a :id="item.path" class="hover:text-primary-100" :href="item.path">{{ item.text }}</a>
        </li>
    </ul>
    <AdjustmentsIcon style="margin-left: auto; margin-right: 2rem;" class="text-gray-500 cursor-pointer h-7" @click="sidebar"/>
</nav>
<Sidebar :open="showSidebar"></Sidebar>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { stringifyQuery, useRoute } from 'vue-router';
import { AdjustmentsIcon } from '@heroicons/vue/outline';
import Sidebar from './Sidebar.vue';

const route = useRoute()
const path = computed(() => route.path)

let showSidebar = false;

function sidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar);
    
}

const navItems = [{
    path: '/home',
    text: 'Home',
}, {
    path: '/library/movies',
    text: 'Movies',
}, {
    path: '/library/series',
    text: 'Series',
}, {
    path: '/party',
    text: 'Party',
}]
// try {
//     const navItem = document.getElementById(path.value)
//     navItem?.classList.add('text-primary-100')
//     console.log(navItem);
    
// } catch (e) {
//     console.error(e)
// }
</script>
<style lang="scss">
@import '../styles/colors.scss';
.active {
    color: $primary;
}
</style>
