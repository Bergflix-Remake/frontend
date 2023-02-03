<route lang="json">
{
  "name": "register",
  "meta": {
    "requiresAuth": false,
    "backgroundImage": "https://cdn.bergflix.de/imgs/Background/2.png"
  }
}
</route>
<template>
  <WindowLayout>
    <Window>
      <Title>Registrieren</Title>
      <p v-if="redirect">
        Nach dem Registrieren wirst du zu
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
        Erfolgreich registriert.
        <span v-if="redirect"
          >Du wirst nach
          <span class="font-mono">
            {{ redirect }}
          </span>
          weitergeleitet.</span
        >
      </p>
      <form class="flex flex-col items-center" @submit.prevent="register">
        <input
          v-model="username"
          class="input"
          type="text"
          placeholder="Username"
          :disabled="auth.isLoading.value"
        />
        <input
          v-model="email"
          class="input"
          type="email"
          placeholder="Email"
          :disabled="auth.isLoading.value"
        />
        <input
          v-model="password"
          class="input"
          type="password"
          placeholder="Password"
          :disabled="auth.isLoading.value"
        />
        <input
          v-model="passwordConfirmation"
          class="input"
          type="password"
          placeholder="Password bestätigen"
          :disabled="auth.isLoading.value"
        />
        <p v-if="!matching" class="text-red-500">
          Passwörter stimmen nicht überein.
        </p>
        <Button :disabled="!matching" @click="register">Registrieren</Button>
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
import { computed, ref } from 'vue';
import { strapi, strapiRegister } from '@/main';
import Spinner from '@/stories/atoms/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const redirect = route.query.redirect as string;

const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const matching = computed(() => password.value === passwordConfirmation.value);

if (strapi.user) {
  if (redirect) {
    router.push({ path: redirect });
  } else {
    router.push({ name: 'account' });
  }
}

const auth = strapiRegister({
  onSuccess: () => {
    if (redirect) {
      router.push({ path: redirect });
    } else {
      router.push({ name: 'account' });
    }
  },
});

const register = () => {
  if (auth.isLoading.value) return;
  if (!matching.value) return;
  auth.mutate({
    email: email.value,
    username: username.value,
    password: password.value,
  });
};
</script>

styles