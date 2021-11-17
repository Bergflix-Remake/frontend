<template>
<div class="h-screen" id="background-section">
    <div class="max-w-md p-10 bg-gray-900 bg-opacity-75 rounded-md shadow-lg backdrop-filter backdrop-blur-sm" id="center-thing">
        <h1 class="text-5xl font-bold text-white">404<span class="font-bold text-primary-100">.</span></h1>
        <p class="font-mono text-primary-100">Page not found</p>
        <p class="italic text-gray-500">
            The page you are trying to visit is not available at this time.
            Please check the URL and try again.
        </p>
    </div>
</div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
@import '../styles/colors.scss';
#background-section {
    background-image: url("https://cdn.bergflix.de/imgs/bergi.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
}
#center-thing {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>