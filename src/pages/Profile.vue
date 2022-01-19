<template>
    <div id="container" class="flex items-center justify-center w-full h-screen">
        <div
            id="window"
            class="relative flex flex-col items-center justify-center p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
        >
        <!-- create a badge at the top right of the window -->
        <div class="absolute z-10 -right-5 -top-5 animate-pulse">
            <p class="p-2 font-mono text-white bg-red-500 rounded-sm">WIP</p>
        </div>
            <img src="https://cdn.bergflix.de/logo/light_bg.png" class="w-32 h-32 rounded-full" />
            <h1 class="text-2xl font-bold">{{ user.username }}</h1>
            <p class="text-gray-700">{{ user.email }}</p>
            <Button type="link" to="favorites" :icon="StarIcon">
                Favorites
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Button from '../components/Common/Button.vue';
import { StarIcon, PencilIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

const store = useStore();
const router = useRouter();
// // check if the user is logged in
// // if not, redirect to login page
// if (!store.state.accounts.loggedIn) {
//     router.push('/login');
// }

const newUsername = ref('')

const editingUser = ref(false);


const user = store.getters.getUser;
console.log(user, "user");
</script>

<style lang="scss">
</style>