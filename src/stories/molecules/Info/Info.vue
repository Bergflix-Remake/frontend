<template>
  <div class='flex flex-col justify-center w-full space-y-2 text-white items-left'>
    <img v-if='title_image' :src="api(title_image)" :alt='title'>
    <h1 v-else class='text-5xl font-black'>{{ title }}</h1>
    <Logo :long='true'>Original</Logo>
    <InfoRow :year='year' :age='age' :episodes='episodes' :genre='genre'></InfoRow>
    <p
      class='overflow-hidden text-clean-dark-200 text-ellipsis md:whitespace-normal'>
      {{ description }}
    </p>
    <div class='flex space-x-2'>
      <Button v-for='button in buttons' v-bind='button' :key='button.text' @click='()=> $router.push(button.to)'>{{ button.text }}</Button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Logo from '@atoms/Logo.vue';
import InfoRow from '../InfoRow/InfoRow.vue';
import Button from '@atoms/Button.vue';
import { api } from '@/util/paths';

defineProps<{
  title: string;
  year: number;
  age: number;
  episodes: number;
  genre: string;
  title_image?: string;
  description: string;
  buttons: {
    text: string,
    to: string,
    type?: 'solid' | 'outline' | 'ghost',
    color?: string,
    icon?: any,
  }[];
}>();


</script>

<style>
</style>
