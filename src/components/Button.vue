<!-- Default VueJS SFC Setup -->
<template>
<button @click="$router.push(href)" class="flex flex-row p-2 bg-gray-900 bg-opacity-50 rounded shadow-lg min-w-min hover:bg-primary-200 focus:bg-primary-200 hover:bg-opacity-30 focus:bg-opacity-30" tabindex="0">Watch Now</button>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'Button Text',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
});

</script>
<style lang="scss">

</style>