<template>
    <div id="container" class="flex items-center justify-center w-full h-screen">
        <div
            id="window"
            class="relative flex flex-col items-center justify-center p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
        >
        <div class="absolute z-10 -right-5 -top-5 animate-pulse">
            <p class="p-2 font-mono text-white bg-red-500 rounded-sm">WIP</p>
        </div>
            <img src="https://cdn.bergflix.de/logo/light_bg.png" class="w-32 h-32 rounded-full" />
            <h1 class="text-2xl font-bold">{{ user.username }}</h1>
            <p class="text-gray-700">{{ user.email }}</p>
            <Button v-if="store.state.loggedIn" type="link" to="favorites" :icon="StarIcon">
                Favorites
            </Button>
            <Button v-else type="link" to="login?ref=profile" :icon="LoginIcon">
                Login
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Button from '../components/Common/Button.vue';
import { StarIcon, PencilIcon, LoginIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

const store = useStore();
const router = useRouter();

const newUsername = ref('')

const editingUser = ref(false);


const user = store.getters.getUser;
</script>

<style lang="scss">
</style>