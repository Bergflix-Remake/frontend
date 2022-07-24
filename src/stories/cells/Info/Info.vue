<template>
    <div class="flex flex-col justify-center w-full space-y-2 text-white items-left ">
        <img v-if="image" :src="image" :alt="title">
        <h1 class="text-5xl font-black" v-else>{{ title }}</h1>
        <Logo :long="true">Original</Logo>
        <InfoRow :year="year" :age="age" :episodes="episodes" :genre="genre"></InfoRow>
        <p class="overflow-hidden text-clean-dark-200 max-h-20 md:max-h-max text-ellipsis whitespace-nowrap md:whitespace-normal">
            {{ description }}
        </p>
        <div class="flex space-x-2"><Button v-for="button in buttons" v-bind="button">{{ button.text }}</Button></div>
    </div>
</template>

<script setup lang="ts">
import Logo from '../../atoms/Logo.vue';
import InfoRow from '../../molecules/InfoRow/InfoRow.vue';
import Button from '../../atoms/Button.vue';

const props = defineProps<{
    title: string;
    year: number;
    age: number;
    episodes: number;
    genre: string;
    image?: string;
    description: string;
    buttons: {
        text: string,
        to: string,
        type?: "solid" | "outline" | "ghost",
        color?: string,
        icon?: any,
    }[];
}>()


</script>

<style>
</style>
