<script setup lang="ts">
import Button from './components/Button.vue';
import { BeakerIcon } from '@heroicons/vue/outline';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
<Navbar />
<div class="flex flex-col min-h-screen px-10 text-gray-900 bg-gray-200 dark:bg-clean-dark dark:text-clean-white">
    <router-view></router-view>
</div>
<Footer/>
</template>

<style>
</style>
