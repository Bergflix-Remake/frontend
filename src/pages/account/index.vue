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
      <input class="input" placeholder="Old Password">
      <input class="input" placeholder="New Password">
      <input class="input" placeholder="Confirm New Password">
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
import { StrapiUser } from 'strapi-sdk-js';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';

const router = useRouter();

if (!strapi.user) {
  router.push({ name: 'login' });
}

const user = reactive({
  username: strapi.user!.username as string,
  email: strapi.user!.email as string,
  avatar: strapi.user!.avatar as string,
});

const changePassword = reactive({

})

const mutation = useStrapiUpdateMutation<StrapiUser>({ onSuccess: () => {
  console.debug('Updated!')
}});

const update = () => {
  if (!strapi.user) return;
  console.debug('Updating user...', user.username, user.email);
  mutation.mutate({
    contentType: 'users',
    id: 'me',
    data: { "email": user.email, "username": user.username },
  });
};
</script>
