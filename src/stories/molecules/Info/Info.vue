<!-- eslint-disable vue/no-v-html -->
<template>
  <div class='flex flex-col justify-center w-full space-y-2 text-white items-left'>
    <img v-if='titleImage' :src="api(titleImage)" :alt='title'>
    <h1 v-else class='text-5xl font-black'>{{ title }}</h1>
    <Logo :long='true'>Original</Logo>
    <InfoRow :year='year' :age='age' :episodes='episodes' :genre='genre'></InfoRow>
    <div
      class='overflow-hidden text-clean-dark-200 text-ellipsis md:whitespace-normal'
      v-html="description" />
    <div class='flex space-x-2'>
      <Button v-for='button in buttons' v-bind='button' :key='button.text' @click='()=> isExternalLink(button.to) ? openExternalLink(button.to) :  $router.push(button.to) '>{{ button.text }}</Button>
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
  titleImage?: string;
  year: number;
  age: number;
  episodes: number;
  genre: string;
  description: string;
  buttons: {
    text: string;
    to: string;
    icon?: any;
  }[];
}>();

// write a function that checks if a given link is an external link
const isExternalLink = (link: string) => {
  return link.startsWith('http');
};

const openExternalLink = (link: string) => {
  window.open(link, '_blank');
};
</script>

<style>
</style>
