<template>
<h1 class="text-xl font-bold mt-20">Imprint</h1>
<div class="div" v-html="content.attributes?.impressum"></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { strapi } from '../main';
import { ImprintEntity } from '../models/types';

const content = await strapi.find('imprint', {
    fields: ['impressum'],
}).then(res => {
    return res.data as ImprintEntity;
});
</script>

<style lang="scss">
</style>