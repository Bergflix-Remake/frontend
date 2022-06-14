<template>
  <div class="mt-20">
    <Loader v-if="content.isLoading" />
    <main class="p-10" v-if="content.isSuccess">
      <section
        v-for="item in content.data!.attributes.page!"
        class="my-2"
        :key="item.id!"
      >
        <Textblock
          v-if="item.__component == 'common.text-block'"
          :title="item.title"
          :content="item.text"
        />
        <Button
          v-if="item.__component == 'common.button'"
          :type="item.type"
          :to="item.to"
          :icon="item.icon"
        >
          {{ item.text }}
        </Button>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Textblock from "../components/Common/Textblock.vue";
import Button from "../components/Common/Button.vue";
import { useStrapi } from "../main";
import Loader from "../components/Loader.vue";
import { HomepageEntity } from "../models/types";

const content: any = useStrapi<HomepageEntity>([
  "homepage",
  {
    populate: "*",
  },
]);
</script>

<style lang="scss"></style>
