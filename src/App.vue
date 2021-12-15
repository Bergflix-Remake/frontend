<script setup lang="ts">
import Button from './components/Button.vue';
import { BeakerIcon } from '@heroicons/vue/outline';
import Footer from './components/Footer.vue';
</script>

<template>
<div class="flex flex-col min-h-screen">
    <router-view></router-view>
</div>
<Footer/>
</template>

<style>
</style>
