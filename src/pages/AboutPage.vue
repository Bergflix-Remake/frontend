<template>
  <div class="mt-20">
    <Loader v-if="content.isLoading" />
    <main v-if="content.isSuccess">
      <section
        v-for="item in content.data.attributes!.page"
        class="my-2"
        :key="item?.__typename"
      >
        <Textblock
          v-if="item?.__typename == 'ComponentCommonTextBlock'"
          :title="item!.title!"
          :content="item!.text!"
        />
        <Button
          v-if="item?.__typename == 'ComponentCommonButton'"
          :type="item.type"
          :to="item.to"
          :icon="item.icon!"
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
import { AboutEntity } from "../models/types";

const content = useStrapi<AboutEntity>([
  "about",
  {
    populate: "*",
  },
]);
</script>

<style lang="scss"></style>
