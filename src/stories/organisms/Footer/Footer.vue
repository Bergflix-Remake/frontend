<template>
    <div class="w-full p-8 bg-gray-100 shadow-inner dark:bg-darkest-dark dark:text-white">
        <div class="mb-4 sm:flex">
            <div class="h-auto text-3xl text-center sm:w-1/12 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
                <Logo :long="true"></Logo>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Social Media</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link :icon="ExternalLinkIcon" to="patreon">
                        Patreon
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="discord">
                        Discord
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="twitter">
                        Twitter
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">
                    <Logo :long="true" class="!text-sm">Brand</Logo>
                </div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link to="branding">
                        Bergflix. Branding
                        </Link>
                    </li>
                    <li>
                        <Link to="apply">
                        Mithelfen
                        </Link>
                    </li>
                    <li>
                        <Link :icon="ExternalLinkIcon" to="github">
                        Bergflix Open Source
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Rechtliches & Hilfe</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link to="legal/privacy">
                        Datenschutz<span class="hidden md:inline">erklärung</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="legal/terms">
                        Cookies & Sicherheit
                        </Link>
                    </li>
                    <li>
                        <Link to="legal/impressum">
                        Impressum
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
                <div class="mb-2 font-bold text-delorean">Mehr von "Herr Bergmann"</div>
                <ul class="leading-normal list-reset">
                    <li>
                        <Link :icon="ExternalLinkIcon" to="https://discord.gg/fromthefuture">
                        Joine der “FTF”-Redaktion
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
    </div>
</template>

<script setup lang="ts">
import Link from '../../atoms/Link.vue'
import Logo from '../../atoms/Logo.vue';
import { ExternalLinkIcon } from '@heroicons/vue/outline';
</script>

<style>
</style>
