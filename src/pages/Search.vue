<route lang="yaml">
    name: search
</route>

<template>
    <WindowLayout>
        <Window>
            <ais-instant-search
            class="w-full h-full flex flex-col justify-center"
            :search-client="searchClient"
            index-name="video"
          >
            <ais-search-box />
            <ais-stats />
            <ais-configure
  :hits-per-page.camel="5"
  :distinct="true"
  :enable-personalization.camel="true"
/>

            <ais-hits>
              <template #item="{ item }">
                <PlaylistEntry :id="item.id" :thumbnail="api(item.thumbnail?.url!)" :title="item.title"  />
              </template>
            </ais-hits>
            <ais-pagination :show-first="true" :show-last="true" :padding="1"/>
          </ais-instant-search>
        </Window>
    </WindowLayout>
</template>

<script setup lang="ts">
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Video } from "@/models/types";
import WindowLayout from "@/layouts/WindowLayout.vue";
import Window from "@/stories/atoms/Window/Window.vue";
import PlaylistEntry from "@/stories/molecules/PlaylistEntry.vue";
import { api } from "@/util/paths";

const searchClient = instantMeiliSearch(
        "https://search.bergflix.de",
        "",
      )

</script>

<style>
.ais-SearchBox form {
    @apply flex flex-nowrap w-full
}
.ais-SearchBox-input {
    @apply p-4 rounded-l-md bg-clean-dark-700 w-full
}
.ais-SearchBox-submit {
    @apply p-4 bg-primary-500 rounded-r-md hover:bg-primary-400
}
.ais-SearchBox-reset {
    @apply p-4 bg-primary-500 rounded-md hover:bg-primary-400 mx-2
}
.ais-SearchBox-submitIcon {
    @apply w-5 h-5 text-white
}
.ais-Hits-list {
    @apply flex flex-col gap-4 mt-5
}
.ais-Stats {
    @apply text-delorean-500
}
.ais-Pagination-list {
    @apply flex flex-row gap-2 mt-5 items-center justify-center
}
.ais-Pagination-list {
    @apply flex flex-row gap-2 mt-5 justify-center
}
.ais-Pagination-item {
    @apply bg-clean-dark-700 text-white px-2 rounded-md
}
.ais-Pagination-item--selected {
    @apply bg-primary-500
}
</style>