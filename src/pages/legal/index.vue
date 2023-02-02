<route lang="json">
{
  "name": "legal",
  "meta": {
    "backgroundImage": "https://cdn.bergflix.de/imgs/Background/2.png"
  }
}
</route>

<script setup lang="ts">
import { useStrapi } from '@/main';
import { ImprintEntity } from '@/models/types';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import Title from '@/stories/atoms/Title/Title.vue';
const data = useStrapi<ImprintEntity>(['imprint']);
</script>

<template>
  <Title>Rechtliches</Title>
  <Subtitle id="imprint">Impressum</Subtitle>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <section
  v-if="data.isSuccess"
  class="p-5 mt-5"
  v-html="data.data?.attributes?.impressum"
  />
  <Subtitle id="privacy">Datenschutz</Subtitle>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <section
    v-if="data.isSuccess"
    
    class="p-5 mt-5"
    v-html="data.data?.attributes?.privacy"
  />
  <Subtitle id="terms">Benuzungsbedingungen</Subtitle>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <section
    v-if="data.isSuccess"
    class="p-5 mt-5"
    v-html="data.data?.attributes?.terms"
  />
</template>
