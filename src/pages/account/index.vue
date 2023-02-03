<route lang="json">
{
  "name": "account",
  "meta": {
    "requiresAuth": true,
    "backgroundImage": "https://cdn.bergflix.de/imgs/Background/2.png"
  }
}
</route>

<template>
  <WindowLayout>
    <!-- Items -->
    <Window full-width>
      <Title>Dein Profil</Title>
      <div class="w-56 h-56">
        <Avatar :image="user.avatar" />
      </div>
      <CInput
        v-model="user.username"
        type="text"
        class="text-3xl font-bold"
        @confirm="update()"
      />
      <CInput v-model="user.email" type="email" @confirm="update()" />
    </Window>
    <Window full-width>
      <Title>Sicherheit</Title>
      <Subtitle>Passwort Ändern</Subtitle>
      <ChangePasswordForm />
      <p class="text-delorean-500 italic mt-20 text-center">
        Um deinen Account zu löschen, bitte sende eine E-Mail mit dem Betreff <span class="font-mono">"Account Deletion Request"</span>, deinem Benutzernamen und deiner E-Mail an <a class="text-white font-bold" :href="`mailto:support@bergflix.de?cc=anniken@bergflix.de&subject=Account%20Deletion%20Request&body=I%2C%20${user.username}%2C%20hereby%20request%20that%20my%20account%20with%20the%20email%20address%20${user.email}%20is%20deleted.%0D%0A%0D%0A`">support@bergflix.de</a>.
      </p>
    </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import { strapi, useStrapiUpdateMutation } from '@/util/api';
import Avatar from '@molecules/Avatar.vue';
import CInput from '@/stories/molecules/Input/ConfirmableInput.vue';
import { reactive } from 'vue';
import WindowLayout from '@/layouts/WindowLayout.vue';
import Window from '@/stories/atoms/Window/Window.vue';
import { useRouter } from 'vue-router';
import { StrapiUser } from '@anniken/strapi-sdk-js';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import ChangePasswordForm from '@/stories/organisms/ChangePassword/ChangePasswordForm.vue';

const router = useRouter();

if (!strapi.user) {
  router.push({ name: 'login' });
}

const user = reactive({
  username: strapi.user!.username as string,
  email: strapi.user!.email as string,
  avatar: strapi.user!.avatar as string,
});

const mutation = useStrapiUpdateMutation<StrapiUser>({
  onSuccess: () => {
    console.debug('Updated!');
  },
  onError: (error) => {
    console.error(error);
  },
});

const update = () => {
  if (!strapi.user) return;
  console.debug('Updating user...', user.username, user.email);
  mutation.mutate({
    contentType: 'users',
    id: 'me',
    data: { email: user.email, username: user.username },
  });
};
</script>
