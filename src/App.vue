<script setup lang="ts">
import Button from './components/Button.vue';
import { BeakerIcon } from '@heroicons/vue/outline';
</script>

<template>
<div class="flex flex-row justify-center w-full space-x-2">
    <Button type="button" to="/home" :icon="BeakerIcon" @click="() => {console.log('Button Clicked!')}">Button</Button>
    <Button type="link" to="/home">Link Button</Button>
    <Button type="linkout" to="https://github.com/Bergflix-Remake/frontend">Linkout Button</Button>
</div>
</template>

<style>
</style>
