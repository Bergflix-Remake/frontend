<route lang="yaml">
name: '404'
meta:
  requiresAuth: false
  backgroundImage: 'https://cdn.bergflix.de/imgs/bergflix-404.png'
</route>

<template>
  <WindowLayout>
    <h1
      class="text-[15.5vw] font-inception text-primary-500 font-medium glow leading-40"
    >
      404
    </h1>
    <h2 class="text-center font-upheaval text-xl">
      Le Flambeur, ist nicht hier...
    </h2>

    <transition name="fade">
      <span v-if="showWindow" class="space-y-2">
        <Window>
          <h3 class="text-center font-upheaval text-xl">
            Die Seite, die du suchst, existiert nicht.
          </h3>
          <p class="text-center">
            Du kannst aber zur
            <Link :to="{ name: 'home' }">Startseite</Link>
            zurückkehren.
          </p>
        </Window>
        <Window>
          <h3 class="text-center font-upheaval text-xl">
            <AnnotationIcon class="w-5 h-5 text-primary-500 inline" />
            Moment, aber hier sollte etwas sein!
          </h3>
          <p class="text-center">
            Wir arbeiten noch an <Logo long class="inline" /> Wenn du eine Seite
            gefunden hast, die nicht funktioniert, dann melde sie gerne auf
            unserem <Link to="/discord">Discord</Link>.
          </p>
        </Window>
      </span>
    </transition>
  </WindowLayout>
</template>

<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import { useRoute } from 'vue-router';
import { isValidUrl } from '@/utils';
import { watch, ref } from 'vue';
import Link from '@atoms/Link.vue';
import Window from '@/stories/atoms/Window/Window.vue';
import { AnnotationIcon } from '@heroicons/vue/outline';
import Logo from '@/stories/atoms/Logo.vue';

const knownLinks: { [key: string]: string } = {
  discord: 'https://discord.bergflix.de/',
  twitter: 'https://twitter.com/@bergflixtogo',
};

const showWindow = ref(false);

const route = useRoute();

watch(route, () => {
  console.debug('Route changed');
  let path = route.fullPath;

  // Remove the first slash
  path = path.substring(1);

  if (path in knownLinks) {
    const link = knownLinks[path];
    console.debug('Redirecting to', link);
    window.location.href = link;
  }

  // Check if the path is an url. If yes redirect to the url.
  if (isValidUrl(path)) {
    console.debug('Redirecting to', path);
    window.location.href = path;
  }
});

setTimeout(() => {
  showWindow.value = true;
}, 3000);
</script>

<style scoped>
.glow {
  text-shadow:
    0 0 10px #ff0230,
    0 0 20px #ff3559,
    0 0 30px #ff6783,
    0 0 40px #ff9aac;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  z-index: 1000;
  transition: all 2s ease;
}
</style>
