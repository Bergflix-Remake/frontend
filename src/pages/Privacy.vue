<template>
<h1 class="text-xl font-bold mt-20">Privacy</h1>
<div class="div" v-html="content.attributes?.privacy"></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { strapi } from '../main';
import { ImprintEntity } from '../models/types';

const content = await strapi.find('imprint', {
    fields: ['privacy'],
}).then(res => {
    return res.data as ImprintEntity;
});
</script>

<style lang="scss">
</style>