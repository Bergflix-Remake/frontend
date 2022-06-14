<template>
  <div id="container" class="flex items-center justify-center w-full h-screen">
    <div
      id="window"
      class="flex flex-col items-center justify-center p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
    >
      <h1 class="text-2xl font-bold">Register</h1>
      <p class="text-green-300" v-if="registered">
        Registered successfuly! You will be redirected any second...
      </p>
      <p class="text-red-300" v-if="error">{{ error }}</p>
      <p class="italic text-gray-300" v-if="refer">
        You will be redirected to
        <span class="font-mono">{{ refer }}</span> afterwards
      </p>
      <form class="flex flex-col items-center justify-center" @submit.prevent="register">
        <input
          type="text"
          class="w-full p-2 my-2 bg-gray-800 rounded-md"
          placeholder="Username"
          v-model="username"
          required
        />
        <input
          type="email"
          class="w-full p-2 my-2 bg-gray-800 rounded-md"
          placeholder="Email"
          v-model="email"
          required
        />
        <input
          type="password"
          class="w-full p-2 my-2 bg-gray-800 rounded-md"
          placeholder="Password"
          v-model="password"
          required
        />
        <Button type="link" :to="refer ? `login?ref=${refer}` : 'login'"
          >Don't have an account yet?</Button
        >
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
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "../components/Common/Button.vue";
import { strapi } from "../main";
import { useQueryClient } from "vue-query";

const queryClient = useQueryClient();

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const registered = ref(false);
const error = ref("");

const route = useRoute();
const refer = route.query.ref;

// if the user is logged in, redirect to the refer page, or to the home page if no refer page is specified
if (strapi.user) {
  router.push(refer ? "/" + refer : "/home");
}

const register = () => {
  strapi
    .register({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    .then((res: any) => {
      registered.value = true;
      queryClient.invalidateQueries(["user"]);
      router.push(refer ? "/" + refer : "/home");
    })
    .catch((err) => {
      error.value = err.error.message;
    });
};
</script>

<style lang="scss"></style>
