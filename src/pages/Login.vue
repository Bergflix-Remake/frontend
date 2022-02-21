<template>
    <div id="container" class="flex items-center justify-center w-full h-screen">
        <div
            id="window"
            class="flex flex-col items-center justify-center p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
        >
            <h1 class="text-2xl font-bold">Login</h1>
            <p
                class="text-green-300"
                v-if="logged_in"
            >Logged in successfuly! You will be redirected any second...</p>
            <p class="text-red-300" v-if="error">{{ error }}</p>
            <p class="italic text-gray-300" v-if="refer">
                You will be redirected to
                <span class="font-mono">{{ refer }}</span> afterwards
            </p>
            <form class="flex flex-col items-center justify-center" @submit.prevent="login">
                <input
                    type="email"
                    class="w-full p-2 my-2 rounded-md shadow-md bg-gray-50 dark:bg-gray-800"
                    placeholder="Email"
                    v-model="email"
                    required
                />
                <input
                    type="password"
                    class="w-full p-2 my-2 rounded-md shadow-md bg-gray-50 dark:bg-gray-800"
                    placeholder="Password"
                    v-model="password"
                    required
                />
                <Button
                    type="link"
                    :to="refer ? `register?ref=${refer}` : 'register'"
                >Don't have an account yet?</Button>
                <input
                    type="submit"
                    class="inline p-2 transition-colors ease-in-out bg-gray-300 bg-opacity-25 rounded cursor-pointer h-min group dark:text-white dark:bg-darkest-dark dark:bg-opacity-25 dark:hover:bg-primary hover:bg-primary hover:bg-opacity-50 dark:hover:bg-opacity-50"
                    value="Login"
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import Button from '../components/Common/Button.vue';
import { useStore } from 'vuex';
import { strapi } from '../main'
import { StrapiAuthenticationResponse } from 'strapi-sdk-js';

const store = useStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const logged_in = ref(false);
const error = ref('');

const route = useRoute();
const refer = route.query.ref;

// if the user is logged in, redirect to the refer page, or to the home page if no refer page is specified
if (store.state.accounts.loggedIn) {
    router.push(refer ? "/" + refer : '/home');
}

const login = () => {
    strapi.login({ identifier: email.value, password: password.value }).then((res: StrapiAuthenticationResponse) => {
        logged_in.value = true;
        store.commit('login', res.user);
        router.push(refer ? "/" + refer : '/home');
    }).catch((err: any) => {
        error.value = err.error.message;
    });
}
</script>

<style lang="scss">
</style>