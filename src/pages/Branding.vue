<template>
  <section class="flex flex-col justify-center w-full h-screen">
    <h3 class="text-xl text-delorean">Die “FTF”-Redaktion präsentiert</h3>
    <h1 class="font-black text-7xl text-nice-red">
      <span class="text-white">Bergflix</span>. Branding
    </h1>
  </section>
  <section class="w-full h-screen mb-60 md:mb-0">
    <h3 class="text-xl text-white">Unsere Brand</h3>
    <h2 class="text-4xl font-bold text-nice-red">
      Nichts offizielles, aber dennoch wichtig.
    </h2>
    <p class="pt-6 text-xl font-bold text-delorean">
      Bergflix ist kein angemeldetes Unternehmen, geschweige irgendeine offizielle
      Organisation. Dennoch haben wir für uns einen speziellen
      <span class="text-white"
        ><span class="text-primary">“</span>Brand-Kodex<span class="text-primary"
          >”</span
        ></span
      >
      geschaffen welcher im verbund mit dem namen Bergflix möglichst beachtet werden
      sollte.
    </p>
    <div class="flex-col w-full py-8 md:flex-row">
      <div class="inline-flex flex-col w-full md:w-1/2">
        <h3 class="text-xl text-white">
          Das “Bergflix<span class="text-primary">.</span>” Logo
        </h3>
        <h2 class="text-3xl font-bold text-nice-red">Unser Markenzeichen</h2>
        <div class="flex flex-row items-center w-1/2 h-32">
          <Button type="link" to="branding">
            <img
              src="https://cdn.bergflix.de/logo/long_light.png"
              alt="Bergflix Logo"
              class="w-full h-full"
            />
          </Button>
        </div>
      </div>
      <div class="inline-flex flex-col w-full md:w-1/2">
        <h3 class="text-xl text-white">
          Die “Bergflix<span class="text-primary">.</span>” Farben
        </h3>
        <h2 class="text-3xl font-bold text-nice-red">Unsere Markenfarben.</h2>
        <div
          class="grid grid-cols-2 grid-rows-3 gap-10 m-2 h-96 md:grid-cols-3 md:grid-rows-2"
        >
          <div
            class="flex flex-col items-center justify-center w-full aspect-square bg-primary"
          >
            <h1 class="text-xl font-bold text-darkest-dark">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#FF0230')"
                >#FF0230</Button
              >
            </h1>
            <h1 class="text-xl text-white">Schickes Rot</h1>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full aspect-square bg-clean-white"
          >
            <h1 class="text-xl font-bold text-darkest-dark">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#FFFFFF')"
                >#FFFFFF</Button
              >
            </h1>
            <h1 class="text-xl text-darkest-dark">Naja, Weiß halt</h1>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full aspect-square bg-darkest-dark"
          >
            <h1 class="text-xl font-bold text-white">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#000000')"
                >#000000</Button
              >
            </h1>
            <h1 class="text-xl text-white">Unsere Seele</h1>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full border-2 border-white aspect-square bg-clean-dark"
          >
            <h1 class="text-xl font-bold text-white">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#111111')"
                >#111111</Button
              >
            </h1>
            <h1 class="text-xl text-white">Unsere Seele 2</h1>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full aspect-square bg-delorean"
          >
            <h1 class="text-xl font-bold text-white">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#6B6B6B')"
                >#6B6B6B</Button
              >
            </h1>
            <h1 class="text-xl text-white">Delorean</h1>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full aspect-square bg-concrete"
          >
            <h1 class="text-xl font-bold text-white">
              <Button
                :to="'branding'"
                :icon="DuplicateIcon"
                type="link"
                @click="copyToClipboard('#989898')"
                >#989898</Button
              >
            </h1>
            <h1 class="text-xl text-white">Plattenbau</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../components/Common/Button.vue";
import { DuplicateIcon } from "@heroicons/vue/outline";

const clipboardWritePermission = "clipboard-write" as PermissionName;

// Create a function to copy the text to the clipboard
// use navigator.clipboard.writeText()
function copyToClipboard(text: string) {
  navigator.permissions.query({ name: clipboardWritePermission }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      /* write to the clipboard now */
      navigator.clipboard.writeText(text);
    }
  });
}
</script>

<style lang="scss"></style>
