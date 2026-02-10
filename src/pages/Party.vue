<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import Window from '@/stories/atoms/Window/Window.vue';
import Subtitle from '@/stories/atoms/Subtitle/Subtitle.vue';
import Logo from '@/stories/atoms/Logo.vue';
import Title from '@/stories/atoms/Title/Title.vue';
import Button from '@/stories/atoms/Button.vue';
import { ExclamationIcon } from '@heroicons/vue/outline';
import { getCurrentInstance, ref } from 'vue';
import InfoRow from '@/stories/molecules/InfoRow/InfoRow.vue';
import BetaBadge from '@/stories/atoms/BetaBadge.vue';

const partyEnabled = ref(false);
const $confetti =
  getCurrentInstance()?.appContext.config.globalProperties.$confetti;

const toggleParty = () => {
  partyEnabled.value = !partyEnabled.value;
  if (partyEnabled.value) {
    document.body.classList.add('partymode');
    $confetti.start();
  } else {
    document.body.classList.remove('partymode');
    $confetti.stop();
  }
};
</script>
<route lang="yaml">
name: party
</route>

<template>
  <WindowLayout>
    <Window>
      <Title>
        <Logo long>Partymode</Logo>
      </Title>
      <InfoRow :year="2023" :age="16" genre="Drama" />
      <figure>
        <vue-plyr class="rounded-md">
          <video
            controls
            crossorigin="anonymous"
            playsinline
            data-poster="poster.jpg"
          >
            <source size="1080" src="/wo-partymode.mp4" type="video/mp4" />
          </video>
        </vue-plyr>
        <figcaption class="italic">❤️ an @DanHub für das Video!</figcaption>
      </figure>

      <Subtitle> Aber mal ernsthaft: </Subtitle>
      <p>
        <b>Wo ist der <Logo long>Partymode</Logo>?</b>
        Wir haben uns entschieden, die v1.0 ohne Partymode zu releasen. Das hat
        mehrere Gründe:
      </p>

      <ul>
        <li>
          <h2>Komplexität.</h2>
          Der Partymode ist ein sehr komplexes Feature. Klar, nach 3 Jahren
          Entwicklung hätte man es schon längst fertig haben können, aber wir
          haben uns entschieden, euch erstmal eine stabile Version zu liefern,
          die ihr auch ohne Partymode nutzen könnt.
        </li>
        <li>
          <h2>Aufwand.</h2>
          Bergflix ist haubsächlich ein Hobby-Projekt. Der zeitliche Aufwand für
          den Partymode ist sehr hoch.
          <b>Wir wollen damit nicht sagen,</b> dass es nie einen Partymode geben
          wird. Partymode ist und bleibt ein sehr wichtiges Feature für uns.
          Aber wir wollen gerne erstmal sehen, wie viel interesse in dem projekt
          besteht, bevor wir uns in die Entwicklung eines solch komplexen
          Features stürzen.
        </li>
        <li>
          <h2>Kosten</h2>
          Wir haben uns entschieden, Bergflix als Open-Source-Projekt zu
          entwickeln. Das bedeutet, dass wir euch die Software kostenlos zur
          Verfügung stellen. Wir schalten keine Werbung (Ausgenommen von der,
          die YouTube schaltet, von denen alle Einnahmen an die jeweiligen
          Videoinhaber gehen), und wir verkaufen keine Daten. Im aktuellen
          Zustand ist <Logo long /> günstig zu betreiben. Der Partymode würde
          das ändern. Auch hier wollen wir erstmal sehen, wie viel Interesse an
          dem Projekt besteht.
        </li>
      </ul>

      <span>Hoffentlich habt ihr trotzdem Spaß mit <Logo long />!</span>
      <br />
      <Button
        @click="
          {
            toggleParty();
          }
        "
        >Partymodus<BetaBadge />
        {{ partyEnabled ? 'Deaktivieren' : 'Aktivieren' }}</Button
      >
      <p>
        <ExclamationIcon class="text-orange-500 w-5 h-5 inline" />
        Achtung: Kann bei empfindlichen Personen epileptische Anfälle auslösen!
      </p>
    </Window>
  </WindowLayout>
</template>

<style scoped>
@reference "@/index.css";

h2 {
  @apply font-bold text-xl;
}
</style>
