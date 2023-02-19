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
      <p v-if="message" class="text-gray-500 max-w-md">
        {{ message }}
      </p>
      <Error :error="auth.error.value" />
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
          v-model="identifier"
          class="input"
          type="text"
          placeholder="Email or Username"
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
        <p>
          Noch keinen Account?
          <Link :to="{ name: 'register', params: { redirect } }">Hier registrieren.</Link>
        </p>
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
import { ref } from 'vue';
import { getUser, strapiLogin } from '@/main';
import Spinner from '@/stories/atoms/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import Link from '@/stories/atoms/Link.vue';
import Error from '@/stories/atoms/State/Error.vue';

const route = useRoute();
const redirect = route.query.redirect as string;
const message = route.query.message as string;

const router = useRouter();

const identifier = ref('');
const password = ref('');

const executeRedirect = () => {
  if (redirect) {
    router.push({ path: redirect })
  } else {
    router.push({ name: 'account' });
  }
};

// If user is already logged in
const user = getUser({
  onSuccess: executeRedirect,
});

// Login logic
const auth = strapiLogin({
  onSuccess: executeRedirect
});

const login = () => {
  if (auth.isLoading.value) return;
  auth.mutate({ identifier: identifier.value, password: password.value });
  
};
</script>
