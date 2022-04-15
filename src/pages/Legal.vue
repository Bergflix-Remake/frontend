<template>
  <h1 class="mt-20 text-xl font-bold underline">{{ part.toUpperCase() }}</h1>
  <Loader v-if="content.isLoading" />
  <div
    class="mb-10 div"
    v-html="
      content.data.attributes?.terms ||
      content.data.attributes?.privacy ||
      content.data.attributes?.impressum
    "
    v-if="content.isSuccess"
  ></div>
</template>

<script setup lang="ts">
import { useStrapi } from "../main";
import Loader from "../components/Loader.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { ImprintEntity } from "../models/types";

const route = useRoute();

const part = ref(route.params.part as string);

const content = useStrapi<ImprintEntity>([
  "imprint",
  {
    fields: [part],
  },
]);
</script>

<style lang="scss">
.div {
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
  }
  li {
    list-style: square;
    margin-left: 2.5rem;
  }
}
</style>
