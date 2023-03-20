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
    <Window>
      <Title>Dein Profil</Title>
      <div class="w-56 h-56">
        <Avatar :image="user.image?.data?.attributes?.url" />
      </div>
      <CInput
        v-model="user.username"
        type="text"
        class="text-3xl font-bold"
        @confirm="update()"
      />
        <CInput v-model="user.email" type="email" @confirm="update()">
          <BadgeCheckIcon v-if="user.confirmed" class="w-5 h-5 text-green-500" />
          <ExclamationCircleIcon v-else class="w-5 h-5 text-red-500" />
        </CInput>
        <p v-if="!user.confirmed" class="text-red-500">Deine E-Mail ist nicht bestätigt. Bitte überprüfe dein Postfach.</p>
        <p class="text-delorean-500">Wenn du diese Daten änderst, musst du potentiell deine E-Mail Adresse erneut bestätigen, oder dich neu Anmelden.</p>
        <Error :error="mutation.error.value" />
</Window>
<Window>
  <Title>Erfolge & Statistiken</Title>
  <Subtitle>Auszeichnungen</Subtitle>
  <Spinner v-if="userQuery.isLoading" />
  <div v-else-if="userQuery.isSuccess" class="flex flex-row items-center justify-center w-full">
    <article v-for="badge in userQuery.data?.badge" :key="badge?.id" class="flex flex-col justify-center w-52 bg-clean-dark-700 p-2 rounded-lg shadow-lg hover:shadow-primary-500/20 transition-all relative">
      <img :src="api(badge?.badge?.icon.url)" class="h-32" :alt="badge?.badge?.icon.alternativeText || badge?.badge?.name">
      <h3 class="font-extrabold">{{ badge?.badge?.name }}</h3>
      <p v-html="badge?.badge?.description" />
    </article>
  </div>
      </Window>
    <Window>
      <Title>Sicherheit</Title>
      <Subtitle>Passwort Ändern</Subtitle>
      <ChangePasswordForm />
      <p class="text-delorean-500 italic text-center max-w-md">
        Um deinen Account zu löschen, sende bitte eine E-Mail mit dem Betreff <span class="font-mono">"Account Deletion Request"</span>, deinem Benutzernamen und deiner E-Mail an <Href :to="`mailto:support@bergflix.de?cc=anniken@bergflix.de&subject=Account%20Deletion%20Request&body=I%2C%20${user.username}%2C%20hereby%20request%20that%20my%20account%20with%20the%20email%20address%20${user.email}%20is%20deleted.%0D%0A%0D%0A`">support@bergflix.de</Href>.
      </p>
      </Window>
      <Window>
        <Title id="settings">Einstellungen</Title>
      <Button :icon="LogoutIcon" type="ghost">Logout</Button>

      <Subtitle>User Data <TagIcon class="w-5 h-5 inline"/></Subtitle>
      <p>Diese option ist haubsächlich für Entwickler gedacht. Hier findest du alle daten, die wir über dich speichern.</p>
      <pre
        v-if="userQuery.isSuccess"
        class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto text-left w-full"
      >
{{ userQuery.data }}

      </pre>

      </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import { getUser, strapi, useStrapiUpdateMutation } from '@/util/api';
import Avatar from '@molecules/Avatar.vue';
import CInput from '@/stories/molecules/Input/ConfirmableInput.vue';
import { computed, reactive } from 'vue';
import WindowLayout from '@/layouts/WindowLayout.vue';
import Window from '@/stories/atoms/Window/Window.vue';
import { useRouter } from 'vue-router';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import ChangePasswordForm from '@/stories/organisms/ChangePassword/ChangePasswordForm.vue';
import Button from '@/stories/atoms/Button.vue';
import { BadgeCheckIcon, LogoutIcon, ExclamationCircleIcon, TagIcon } from '@heroicons/vue/outline';
import { UploadFileEntityResponse, UsersPermissionsUser } from '@/models/types';
import Error from '@/stories/atoms/State/Error.vue';
import Href from '@/stories/atoms/Href.vue';
import { api } from '@/util/paths';
import Spinner from '@/stories/atoms/Spinner.vue';

const router = useRouter();

const userQuery = getUser({
  populate: ['image', 'badge', 'badge.badge', 'badge.badge.icon']
});


if (!strapi.user) {
  router.push({ name: 'login' });
}

const user: Partial<UsersPermissionsUser> = reactive({
  username: strapi.user!.username as string,
  email: strapi.user!.email as string,
  image: strapi.user!.image as UploadFileEntityResponse,
  confirmed: strapi.user!.confirmed as boolean,
});

const mutation = useStrapiUpdateMutation<UsersPermissionsUser>({
  onMutate: () => {
    return {...strapi.user as Partial<UsersPermissionsUser> };
  },
  onSuccess: () => {
    console.debug('Updated!');
  },
  onError: (error, variables, context) => {
    console.error(error);
    console.debug(`Rolling back optimistic update...`);
    user.username = context!.username as string;
    user.email    = context!.email as string;
    console.debug(context, user);   
  },
});

const update = () => {
  if (!strapi.user) return;
  console.debug('Updating user...', user.username, user.email);
  if (strapi.user?.username === user.username && strapi.user?.email === user.email) {
    console.debug('No changes detected. Not updating.');
    return;
  }
  mutation.mutate({
    contentType: 'users',
    id: 'me',
    data: { email: user.email, username: user.username },
  });
  userQuery.refetch();
};
</script>
