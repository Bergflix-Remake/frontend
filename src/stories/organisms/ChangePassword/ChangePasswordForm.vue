<template>
  <form
    class="flex flex-col items-center sm:w-1/2 w-full"
    @submit.prevent="changePassword"
  >
    <input
      id="currentPassword"
      v-model="currentPassword"
      type="password"
      name="currentPassword"
      placeholder="Aktuelles Passwort"
      class="input w-full"
    />
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
      placeholder="Neues Passwort"
      class="input w-full"
    />
    <input
      id="passwordConfirmation"
      v-model="passwordConfirmation"
      type="password"
      name="passwordConfirmation"
      placeholder="Neues Passwort bestätigen"
      class="input w-full"
    />
    <p
      v-if="message"
      class="text-center"
      :class="isError ? 'text-red-500' : 'text-green-500'"
    >
      {{ message }}
    </p>
    <Button
      type="solid"
      color="primary"
      :disabled="!matching"
      @click="changePassword"
      >Passwort ändern</Button
    >
  </form>
</template>

<script setup lang="ts">
import { strapi } from '@/main';
import Button from '@/stories/atoms/Button.vue';
import { ref, computed, watchEffect } from 'vue';
import { useMutation } from 'vue-query';

const currentPassword = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const message = ref('');
const isError = ref(false);

const matching = computed(() => password.value === passwordConfirmation.value);

watchEffect(() => {
  if (!matching.value) {
    message.value = 'Passwörter stimmen nicht überein!';
    isError.value = true;
  } else {
    message.value = '';
  }
});

type ChangePasswordData = {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
};

const mutation = useMutation(
  (payload: ChangePasswordData) => strapi.changePassword(payload),
  {
    onSuccess: () => {
      isError.value = false;
      message.value = 'Passwort erfolgreich geändert!';
      currentPassword.value = '';
      password.value = '';
      passwordConfirmation.value = '';
    },
    onError: (err: any) => {
      message.value =
        'Oops! Es ist ein Fehler aufgetreten: ' +
        (err.error?.message || 'Unbekannter Fehler');
      isError.value = true;
    },
  },
);

const changePassword = async () => {
  mutation.mutate({
    currentPassword: currentPassword.value,
    password: password.value,
    passwordConfirmation: passwordConfirmation.value,
  });
};
</script>
