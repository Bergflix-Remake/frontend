<template>
    <footer class="w-full p-8 shadow-inner bg-darkest-dark text-white pb-20 md:pb-8">
        <div class="mb-4 sm:flex">
            <div class="h-auto text-3xl text-center sm:w-1/12 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
                <Logo :long="true"></Logo>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Social Media</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://bflx.de/instagram">
                        Instagram
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://bflx.de/discord">
                        Discord
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://bflx.de/twitter">
                        Twitter
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">
                    <Logo :long="true" class="text-sm!">Brand</Logo>
                </div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link to="https://bflx.de/discord">
                        Mithelfen
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExclamationIcon" to="https://bflx.de/bug-report">
                        Fehler Melden
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Rechtliches & Hilfe</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link :to="{ name: 'legal', hash: '#privacy'}">
                        Datenschutz<span class="hidden md:inline">erklärung</span>
                        </Link>
                    </li>
                    <li>
                        <Link :to="{ name: 'legal', hash: '#imprint' }">
                        Impressum
                        </Link>
                    </li>
                    <li>
                        <Link :to="{ name: 'legal', hash: '#terms' }">
                        Benutzungsbedingungen
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Mehr von "Herr Bergmann"</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://discord.gg/fromthefuture">
                        Trete der “FTF”-Redaktion bei
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://www.patreon.com/herrbergmann">
                        Unterstütze seine Projekte
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">
import Link from '../../atoms/Link.vue'
import Logo from '../../atoms/Logo.vue';
import { ExclamationIcon, ExternalLinkIcon } from '@heroicons/vue/outline';
</script>

<style>
</style>
