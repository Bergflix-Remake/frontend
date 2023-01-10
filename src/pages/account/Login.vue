<route lang="json">
{
  "name": "login",
  "meta": {
    "requiresAuth": false,
    "backgroundImage": "https://cdn.bergflix.de/imgs/Background/2.png"
  }
}
</route>
<template>
  <WindowLayout>
    <Window>
      <Title>Login</Title>
      <p v-if="redirect">
        Nach dem Login wirst du zu
        <span class="font-mono">
          {{ redirect }}
        </span>
        weitergeleitet.
      </p>
      <p v-if="auth.isError.value" class="text-red-500">
        Es ist ein Fehler aufgetreten:
        {{ auth.error.value?.error.message }}
      </p>
      <p v-if="auth.isSuccess.value" class="text-green-500">
        Erfolgreich eingeloggt.
        <span v-if="redirect"
          >Du wirst nach
          <span class="font-mono">
            {{ redirect }}
          </span>
          weitergeleitet.</span
        >
      </p>
      <form class="flex flex-col items-center" @submit.prevent="login">
        <input
          v-model="username"
          class="input"
          type="text"
          placeholder="Username"
          :disabled="auth.isLoading.value"
        />
        <input
          v-model="password"
          class="input"
          type="password"
          placeholder="Password"
          :disabled="auth.isLoading.value"
        />
        <Button @click="login">Login</Button>
      </form>
      <Spinner v-if="auth.isLoading.value" />
    </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import Window from '@atoms/Window/Window.vue';
import Title from '@atoms/Title/Title.vue';
import Button from '@/stories/atoms/Button.vue';
import { ref, watchEffect } from 'vue';
import { strapi, strapiLogin } from '@/main';
import Spinner from '@/stories/atoms/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const redirect = route.query.redirect as string;

const router = useRouter();

const username = ref('');
const password = ref('');

if (strapi.user) {
  if (redirect) {
    router.push({ path: redirect });
  } else {
    router.push({ name: 'account' });
  }
}

const auth = strapiLogin({
  onSuccess: () => {
    if (redirect) {
      router.push({ path: redirect })
    } else {
      router.push({ name: 'account' });
    }
  },
});

const login = () => {
  if (auth.isLoading.value) return;
  auth.mutate({ identifier: username.value, password: password.value });
  
};
</script>
