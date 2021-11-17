<template>
<Navbar/>
<Suspense>
    <router-view :key="$route.fullPath">
    </router-view>
</Suspense>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss">
@import 'styles/main.scss';
@import 'styles/colors.scss';
</style>