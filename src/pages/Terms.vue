<template>
<h1 class="mt-20 text-xl font-bold">Terms</h1>
<div class="mb-10 div" v-html="content.attributes?.terms"></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { strapi } from '../main';
import { ImprintEntity } from '../models/types';

const content = await strapi.find('imprint', {
    fields: ['terms'],
}).then(res => {
    return res.data as ImprintEntity;
});
</script>

<style lang="scss">
.div {
    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 1.5rem;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        margin-top: 1.5rem;
    }
    p {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5;
    }
    li {
        list-style: square;
        margin-left: 2.5rem;
    }
}
</style>