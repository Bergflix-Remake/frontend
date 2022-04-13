<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Devtools from './components/Devtools.vue';
</script>

<template>
    <Devtools />
    <Navbar />
    <div
        class="flex flex-col min-h-screen px-10 text-gray-900 bg-gray-200 dark:bg-clean-dark dark:text-clean-white"
    >
        <router-view></router-view>
    </div>
    <Footer />
</template>

<style>
</style>
