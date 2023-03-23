<template>
  <Transition name="modal">
    <Window :transparent="transparent" class="relative">
      <Title>Suchen <BetaBadge /></Title>
      <p class="text-delorean-500">Es kann eine weile dauern, bis die Suche geladen ist.</p>
        <ais-instant-search
        class="w-full h-full flex flex-col justify-center"
        :search-client="searchClient"
        index-name="video"
        >
        <ais-search-box />
        <ais-current-refinements />

        <ais-stats />
        <ais-state-results class="w-full flex justify-center items-center">
          <template #default="{ status }">
            <Spinner
              v-show="status === 'loading' || status === 'stalled'"
            />
          </template>
        </ais-state-results>
        <ais-configure
          :hits-per-page.camel="5"
          :distinct="true"
          :enable-personalization.camel="true"
        />
        <ais-hits>
          <template #item="{ item }">
            <PlaylistEntry
              :id="item.id"
              :thumbnail="api(item.thumbnail?.url!)"
              :title="item.title"
              :episode="item.episode"
              @click="emit('close')"
            />
          </template>
        </ais-hits>
        <ais-pagination :padding="1" />
        <Button v-if="isOverlay" @click="$emit('close'); $router.push({ name: 'search' })">Erweiterte Optionen</Button>
        <div v-else>
          <Subtitle>Erweiterte Optionen</Subtitle>
          <div class="refinements flex flex-col gap-2 py-2 px-7">
            <p class="text-delorean-500">Genre</p>
            <ais-menu-select attribute="genre" />
            <p class="text-delorean-500">Serie</p>
            <ais-menu-select attribute="series" />
          </div>
        </div>
      </ais-instant-search>
    </Window>
  </Transition>
</template>

<script lang="ts" setup>
import { api } from '../../../util/paths';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Window from '@/stories/atoms/Window/Window.vue';
import PlaylistEntry from '@/stories/molecules/PlaylistEntry.vue';
import Spinner from '@/stories/atoms/Spinner.vue';
import Button from '@/stories/atoms/Button.vue';
import Title from '@/stories/atoms/Title/Title.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import BetaBadge from '@/stories/atoms/BetaBadge.vue';
const searchClient = instantMeiliSearch('https://search.bergflix.de', '', {
  finitePagination: true,
});
const emit = defineEmits(['close']);

defineProps<{
  transparent?: boolean;
  isOverlay?: boolean;
}>();
</script>

<style>

/* SearchBox */

.ais-SearchBox form {
  @apply flex flex-nowrap w-full text-white;
}

.ais-SearchBox-input {
  @apply p-4 rounded-l-md bg-clean-dark-700 w-full ring-1 ring-delorean-800;
}

.ais-SearchBox-submit {
  @apply p-4 !bg-primary-500 rounded-r-md hover:bg-primary-400;
}

.ais-SearchBox-reset {
  @apply p-4 !bg-primary-500 rounded-md hover:bg-primary-400 mx-2;
}

.ais-SearchBox-submitIcon {
  @apply w-5 h-5 text-white;
}

/* Hits */

.ais-Hits-list {
  @apply flex flex-col gap-4 mt-5;
}

/* Stats */

.ais-Stats {
  @apply text-delorean-500;
}

/* Pagination */

.ais-Pagination-list {
  @apply flex flex-row gap-2 mt-5 items-center justify-center;
}

.ais-Pagination-link {
  @apply bg-clean-dark-700 text-white px-2 rounded-md;
}

.ais-Pagination-item--selected > .ais-Pagination-link {
  @apply bg-primary-500;
}

/* MenuSelect */
.ais-MenuSelect-select {
  @apply bg-clean-dark-700 text-white rounded-md p-2 w-full;
}

.ais-MenuSelect-option:hover {
  @apply bg-primary-500;
}

/* CurrentRefinements */
.ais-CurrentRefinements-list {
  @apply flex flex-row gap-2 items-center justify-center w-full m-4;
}

.ais-CurrentRefinements-item {
  @apply bg-clean-dark-700 text-white rounded-md p-2 w-max;
}

.ais-CurrentRefinements-delete {
  @apply text-white mx-2;
}

.ais-CurrentRefinements-delete:hover {
  @apply text-red-500;
}
</style>
