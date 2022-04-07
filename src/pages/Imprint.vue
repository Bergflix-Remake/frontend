<template>
<h1 class="text-xl font-bold mt-20">Imprint</h1>
<Loader v-if="content.isLoading" />
<div class="div" v-if="content.isSuccess" v-html="content.data.attributes?.impressum"></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useStrapi } from '../main';
import { ImprintEntity } from '../models/types';
import Loader from '../components/Loader.vue'

const content: any = useStrapi([
    "imprint",
    {
        fields: ['impressum']
    }
])
</script>

<style lang="scss">
</style>