<template>
<div class="h-screen" id="background-section">
    <div class="max-w-md p-10 bg-gray-900 bg-opacity-75 rounded-md shadow-lg backdrop-filter backdrop-blur-sm" id="center-thing">
        <h1 class="text-5xl font-bold text-white">Warning<span class="font-bold text-primary-100">.</span></h1>
        <p class="font-mono text-primary-100">You are leaving bergflix</p>
        <p class="italic text-gray-500">
            This link will redirect you to "<span class="font-bold">{{link}}</span>", which is not a part of bergflix.
            You will be redirected in {{timer}} seconds, or by clicking the button below.
        </p>
        <p class="italic text-gray-500">
            If the tab does not open automatically, please click the button below, and check that popups are not blocked.
        </p>
        <br>
        <a class="p-2 m-5 text-white rounded-md bg-primary-100" target="_blank" :href="link" @click="goBack">Go to page</a>
        <br>
        <br>
        <a class="text-white cursor-pointer" @click="goBack">Go back home</a>
    </div>
</div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();

const link = route.params.link[0];

const timer = ref(5)

// every second, decrement timer
var timeout = setInterval(() => {
    timer.value -= 1;
    // if timer is 0, open a new tab with the link
    if (timer.value === 0) {
        window.open(link, '_blank');
        router.push('/');
    }
}, 1000);

function goBack() {
    clearInterval(timeout);
    router.push('/');
}

// check if link is a valid url
if (!link.match(/^(http|https):\/\/[^ "]+$/)) {
    goBack();
}

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