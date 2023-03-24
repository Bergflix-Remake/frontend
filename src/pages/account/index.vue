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
        <Avatar :image="user.image?.data?.attributes?.url" :loading="mutation.isLoading.value || false" />
      </div>
      <CInput
        v-model="user.username"
        type="text"
        class="text-3xl font-bold"
        :max-length="20"
        @confirm="update()"
      >
        <img
          v-if="userQuery.isSuccess && userQuery.data.badge?.length! > 0"
          class="w-5 h-5"
          :src="api((userQuery.data.badge?.find((value => parseInt(value?.id!) === userQuery.data?.selected_badge))?.badge as Badge).icon.url || (userQuery.data?.badge![0]?.badge as Badge).icon.url)"
        />
      </CInput>
      <CInput
        v-model="user.email"
        type="email"
        :validator="checkEmail"
        @confirm="update()"
      >
        <BadgeCheckIcon v-if="user.confirmed" class="w-5 h-5 text-green-500" />
        <ExclamationCircleIcon v-else class="w-5 h-5 text-red-500" />
      </CInput>
      <p v-if="!user.confirmed" class="text-red-500">
        Deine E-Mail ist nicht bestätigt. Bitte überprüfe dein Postfach.
      </p>
      <p class="text-delorean-500">
        Wenn du diese Daten änderst, musst du potentiell deine E-Mail Adresse
        erneut bestätigen, oder dich neu Anmelden.
      </p>
      <Error :error="mutation.error.value" />
    </Window>
    <Window>
      <Title id="badges">Erfolge & Statistiken</Title>
      <Subtitle>Auszeichnungen</Subtitle>
      <p class="text-delorean-500 mb-3">
        Auszeichnungen werden durch das Bergflix Team vergeben. Sie werden neben
        deinem Benutzernamen in den Kommentaren <BetaBadge /> angezeigt. Es kann
        eine Weile dauern bis Auszeichnungen überall angezeigt werden.
      </p>
      <Spinner v-if="userQuery.isLoading" />
      <div
        v-else-if="userQuery.isSuccess"
        class="flex flex-row items-center w-full flex-nowrap overflow-x-auto space-x-2 h-96 p-6"
      >
        <article
          v-for="badge in (userQuery.data?.badge as BadgeComponent[])"
          :key="badge?.id"
          class="p-4 flex flex-col justify-center w-52 flex-shrink-0 bg-clean-dark-700 rounded-lg shadow-lg hover:shadow-primary-500/20 transition-all relative h-full ring-1 ring-delorean-800"
        >
          <img
            :src="api(badge?.badge?.icon.url)"
            class="h-32 mb-auto"
            :alt="badge?.badge?.icon.alternativeText || badge?.badge?.name"
          />
          <h3 class="font-extrabold">{{ badge?.badge?.name }}</h3>
          <h5 class="absolute top-3 left-4 font-mono text-delorean-500">
            {{ badge?.id }}
          </h5>
          <p class="text-xs text-delorean-500">
            Erhalten am
            {{ new Date(badge?.awarded).toLocaleDateString('de-DE') }}
          </p>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="badge?.badge?.description" />
          <Button
            :data-button="badge?.id"
            class="mt-auto"
            width="full"
            :disabled="parseInt(badge?.id) == user.selected_badge"
            type="outline"
            @click="
              {
                user.selected_badge = parseInt(badge?.id!);
                update();
              }
            "
            >{{
              parseInt(badge?.id) == user.selected_badge
                ? 'Ausgewählt'
                : 'Auswählen'
            }}</Button
          >
        </article>
        <img
          v-if="userQuery.data.badge?.length! <= 0"
          src="/no_badges.png"
          class="w-52 rounded-lg shadow-lg hover:shadow-primary-500/20 transition-all h-full"
        />
      </div>
    </Window>
    <Window>
      <Title>Sicherheit</Title>
      <Subtitle>Passwort Ändern</Subtitle>
      <ChangePasswordForm />
      <p class="text-delorean-500 italic text-center max-w-md">
        Um deinen Account zu löschen, sende bitte eine E-Mail mit dem Betreff
        <span class="font-mono">"Account Deletion Request"</span>, deinem
        Benutzernamen und deiner E-Mail an
        <Href
          :to="`mailto:support@bergflix.de?cc=anniken@bergflix.de&subject=Account%20Deletion%20Request&body=I%2C%20${user.username}%2C%20hereby%20request%20that%20my%20account%20with%20the%20email%20address%20${user.email}%20is%20deleted.%0D%0A%0D%0A`"
          >support@bergflix.de</Href
        >.
      </p>
    </Window>
    <Window>
      <Title id="settings">Einstellungen</Title>
      <Button :icon="LogoutIcon" type="ghost">Logout</Button>

      <Subtitle>User Data <TagIcon class="w-5 h-5 inline" /></Subtitle>

      <details class="w-full">
        <summary>
          <p class="text-delorean-500 mb-3 cursor-pointer">
            Diese Option ist hauptsächlich für Entwickler interessant. Hier findest du alle Daten,
            die wir über dich speichern. Dein Passwort wird nicht angezeigt. Dieses kann weder von dir, noch von unserem Team eingesehen werden, da es verschlüsselt gespeichert wird.
          </p>
        </summary>
        <pre
          v-if="userQuery.isSuccess"
          class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto text-left w-full"
          >{{ userQuery.data }}
  
        </pre>
      </details>
    </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import { getUser, strapi, useStrapiUpdateMutation } from '@/util/api';
import Avatar from '@molecules/Avatar.vue';
import CInput from '@/stories/molecules/Input/ConfirmableInput.vue';
import { reactive } from 'vue';
import WindowLayout from '@/layouts/WindowLayout.vue';
import Window from '@/stories/atoms/Window/Window.vue';
import { useRouter } from 'vue-router';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import ChangePasswordForm from '@/stories/organisms/ChangePassword/ChangePasswordForm.vue';
import Button from '@/stories/atoms/Button.vue';
import {
  BadgeCheckIcon,
  LogoutIcon,
  ExclamationCircleIcon,
  TagIcon,
} from '@heroicons/vue/outline';
import {
  Maybe,
  Scalars,
  UploadFile,
  UsersPermissionsUser,
} from '@/models/types';
import Error from '@/stories/atoms/State/Error.vue';
import Href from '@/stories/atoms/Href.vue';
import { api } from '@/util/paths';
import Spinner from '@/stories/atoms/Spinner.vue';
import BetaBadge from '@/stories/atoms/BetaBadge.vue';

export type Badge = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  icon: UploadFile;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
};

export type BadgeComponent = {
  awarded: Maybe<Scalars['DateTime']>;
  badge: Maybe<Badge>;
  id: Scalars['ID'];
};

const checkEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const router = useRouter();

const userQuery = getUser({
  populate: ['image', 'badge', 'badge.badge', 'badge.badge.icon'],
});

if (!strapi.user) {
  router.push({ name: 'login' });
}

let user: Partial<UsersPermissionsUser> = reactive(
  strapi.user as Partial<UsersPermissionsUser>
);

const mutation = useStrapiUpdateMutation<UsersPermissionsUser>({
  onMutate: () => {
    return { ...(strapi.user as Partial<UsersPermissionsUser>) };
  },
  onSuccess: () => {
    console.debug('Updated!');
  },
  onError: (error, variables, context) => {
    console.error(error);
    console.debug(`Rolling back optimistic update...`);
    user = context!;
    console.debug(context, user);
  },
  onSettled: () => {
    console.debug('Settled!');
    userQuery.refetch();
  },
});

const update = () => {
  if (!strapi.user) return;
  console.debug('Updating user...', user, strapi.user);
  if (strapi.user! === user) {
    console.debug('No changes detected. Not updating.');
    return;
  }
  mutation.mutate({
    contentType: 'users',
    id: 'me',
    data: { ...user },
  });
};

</script>
