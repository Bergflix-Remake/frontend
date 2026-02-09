<route lang="yaml">
name: brand
</route>

<template>
  <WindowLayout>
    <Window>
      <h1 class="text-3xl font-bold mb-4"><Logo long /> - Unsere Mission</h1>
      <p class="mb-4">
        Unsere Mission bei Bergflix ist es, eine Plattform für organisierten
        Machinima-Inhalt zu schaffen und gleichzeitig unseren Wurzeln als
        Hobbyprojekt treu zu bleiben. Vor drei Jahren begann Bergflix als
        spaßige Idee, eine kurzfristige Netflix-Kopie für die YouTube-Videos von
        Herr Bergmann zu erstellen. Im Laufe der Zeit kamen immer mehr Menschen
        und Funktionen hinzu.
      </p>
      <p class="mb-4">
        Allerdings wurde das ursprüngliche Bergflix-Projekt aufgrund von
        Motivationsmangel am 28. Juli 2021 eingestellt. Das "neue" Team
        entschied sich jedoch, das Projekt wieder aufzugreifen und etwas
        ernsthafter anzugehen: Eine allgemeine Plattform für organisierten
        Machinima-Inhalt war geboren. Aktuell sind nur Inhalte von Herr Bergmann
        verfügbar, aber wir sind offen für zukünftige Erweiterungen.
      </p>
      <p class="mb-4">
        Trotz der neuen Ausrichtung bleibt Bergflix in erster Linie ein
        Hobbyprojekt. Wir verfolgen keine finanziellen Interessen, schalten
        keine Werbung (außer den YouTube-Anzeigen, deren Einnahmen an den
        Videoproduzenten gehen) und betreiben keine Datensammlung oder -verkauf.
        Unser Ziel ist es, hochwertigen und unterhaltsamen Machinima-Inhalt zu
        organisieren und einer breiteren Öffentlichkeit zugänglich zu machen,
        ohne dabei unsere Leidenschaft und Freude am Projekt zu verlieren.
      </p>
    </Window>
  </WindowLayout>
</template>

<script setup lang="ts">
import WindowLayout from '@/layouts/WindowLayout.vue';
import Logo from '@/stories/atoms/Logo.vue';
import Window from '@/stories/atoms/Window/Window.vue';
</script>
