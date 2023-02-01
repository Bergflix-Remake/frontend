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
      <Title>Security</Title>
      <Subtitle>Change Password</Subtitle>
      <p v-if="passwordChangeMutation.isSuccess" class="text-green-500">Perfekt! Dein Password wurde erfolgreich geändert!</p>
      <p v-if="passwordChangeMutation.isError" class="text-red-500">Etwas ist schiefgelaufen! Bitte versuche es nochmal!</p>
      <input
        v-modal="changePasswordData.currentPassword"
        class="input"
        placeholder="Old Password"
      />
      <input
        v-modal="changePasswordData.password"
        class="input"
        placeholder="New Password"
      />
      <input
        v-modal="changePasswordData.passwordConfirmation"
        class="input"
        placeholder="Confirm New Password"
      />
      <Button>Change Password</Button>
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
import { StrapiUser, StrapiChangePasswordData } from 'strapi-sdk-js';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import { useMutation } from 'vue-query';
import Button from '@/stories/atoms/Button.vue';

const router = useRouter();

if (!strapi.user) {
  router.push({ name: 'login' });
}

const user = reactive({
  username: strapi.user!.username as string,
  email: strapi.user!.email as string,
  avatar: strapi.user!.avatar as string,
});

const changePasswordData: StrapiChangePasswordData = reactive({
  currentPassword: '',
  password: '',
  passwordConfirmation: '',
});

const passwordChangeMutation = useMutation(
  async (data: StrapiChangePasswordData) => await strapi.changePassword(data)
);
const changePassword = () => {
  console.debug('Changing password...');
  passwordChangeMutation.mutate(changePasswordData);
};

const mutation = useStrapiUpdateMutation<StrapiUser>({
  onSuccess: () => {
    console.debug('Updated!');
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
