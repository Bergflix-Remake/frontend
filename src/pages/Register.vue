<template>
    <div id="container" class="flex items-center justify-center w-full h-screen">
        <div
            id="window"
            class="p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min flex flex-col items-center justify-center"
        >
            <h1 class="text-2xl font-bold">Register</h1>
            <p class="text-green-300" v-if="registered">Registered successfuly!</p>
            <p class="text-red-300" v-if="error">{{ error }}</p>
            <form
                class="flex flex-col items-center justify-center"
                @submit.prevent="register"
            >
                <input
                    type="text"
                    class="p-2 w-full bg-gray-800 rounded-md my-2"
                    placeholder="Username"
                    v-model="username"
                    required
                />
                <input
                    type="email"
                    class="p-2 w-full bg-gray-800 rounded-md my-2"
                    placeholder="Email"
                    v-model="email"
                    required
                />
                <input
                    type="password"
                    class="p-2 w-full bg-gray-800 rounded-md my-2"
                    placeholder="Password"
                    v-model="password"
                    required
                />
                <Button type="link" to="/login">Already have an Account?</Button>
                <input
                    type="submit"
                    class="inline p-2 transition-colors ease-in-out bg-gray-300 bg-opacity-25 rounded cursor-pointer h-min group dark:text-white dark:bg-darkest-dark dark:bg-opacity-25 dark:hover:bg-primary hover:bg-primary hover:bg-opacity-50 dark:hover:bg-opacity-50"
                    value="Register"
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const registered = ref(false);
const error = ref('');

const register = () => {
    // https://api.bergflix.de/api/auth/local/register
    // make a post request to the register endpoint, containing the username, email and password
    // if the request is successful, set the registered property to true
    axios.post('https://api.bergflix.de/api/auth/local/register', {
        username: username.value,
        email: email.value,
        password: password.value,
    }).then((res) => {
        console.log(res)
        registered.value = true;
    }).catch((err) => {
        console.error(err.response.data.error.message);
        error.value = err.response.data.error.message;
    });
};
</script>

<style lang="scss">
</style>