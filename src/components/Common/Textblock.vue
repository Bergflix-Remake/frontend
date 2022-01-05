<template>
    <section class="w-full">
        <h1 class="text-xl font-bold">{{title}}</h1>
        <Markdown :source="content" :breaks="true" />
    </section>
</template>
<script setup lang="ts">
import Markdown from 'vue3-markdown-it'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
})
</script>