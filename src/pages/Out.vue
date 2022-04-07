<template>
  <div id="container" class="flex items-center justify-center w-full h-screen">
    <div
      id="window"
      class="p-3 text-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 w-96 h-min"
    >
      <h1 class="font-bold dark:text-white">Warning: You are leaving Bergflix</h1>
      <p class="text-gray-700 dark:text-gray-300">
        This link will redirect you to this website:
        <span class="font-mono text-primary">{{ url }}</span>
        You will be redirected in
        <span class="font-mono text-primary">{{ time_remaining }}</span> seconds.
      </p>
      <Button type="button" to="/home">
        <span class="">Home</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
import Button from "../components/Common/Button.vue";
import { useStrapi } from "../main";

const router = useRouter();
const route = useRoute();

const url = route.params.link.toString();

/* const known_routes: any = {
    "github": "https://github.com/bergflix-remake/",
    "patreon": "https://www.patreon.com/bergflixtogo",
    "discord": "https://discord.gg/JP9UKrW",
    "twitter": "https://twitter.com/bergflixtogo",
} */

const known_routes: any = useStrapi(["known-urls"], {
  onSuccess: (data: any) => {
    const links = data.map((data: any) => ({
      [data.attributes.title]: data.attributes.url,
    }));
    const known_url = links.find((link: any) => {
      return Object.keys(link).includes(url);
    });
    if (known_url) {
      window.location.href = known_url[url];
    }
  },
});

const time_remaining = ref(5);

const redirect = setTimeout(() => {
  window.location.href = url;
}, 5000);

const countdown = setInterval(() => {
  if (time_remaining.value > 0) {
    time_remaining.value--;
  } else {
    clearInterval(countdown);
  }
}, 1000);

onBeforeRouteLeave(() => {
  clearTimeout(redirect);
});
</script>

<style lang="scss"></style>
