<template>
	<div class="w-full p-8 bg-gray-100 shadow-inner dark:bg-darkest-dark dark:text-white">
		<div class="mb-4 sm:flex">
			<div class="h-auto text-3xl text-center sm:w-1/12 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
				<div class="mb-2 font-bold dark:text-white text-clean-dark">Bergflix<span class="text-primary">.</span></div>
			</div>
			<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
				<div class="mb-2 font-bold text-delorean">Social Media</div>
				<ul class="leading-normal list-reset">
                    <li>
                        <Button type="linkout" to="patreon">
                            Patreon
                        </Button>
                    </li>
                    <li>
                        <Button type="linkout" to="discord">
                            Discord
                        </Button>
                    </li>
                    <li>
                        <Button type="linkout" to="twitter">
                            Twitter
                        </Button>
                    </li>
				</ul>
			</div>
			<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
				<div class="mb-2 font-bold text-delorean">Bergflix. Brand</div>
				<ul class="leading-normal list-reset">
                    <li>
                        <Button type="link" to="branding">
                            Bergflix. Branding
                        </Button>
                    </li>
                    <li>
                        <Button type="link" to="apply">
                            Mithelfen
                        </Button>
                    </li>
                    <li>
                        <Button type="linkout" to="github">
                            Bergflix Open Source
                        </Button>
                    </li>
				</ul>
			</div>
			<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
				<div class="mb-2 font-bold text-delorean">Rechtliches & Hilfe</div>
				<ul class="leading-normal list-reset">
                    <li>
                        <Button type="link" to="your-data">
                            Datenschutz<span class="hidden md:inline">erklärung</span>
                        </Button>
                    </li>
                    <li>
                        <Button type="link" to="cookies">
                            Cookies & Sicherheit
                        </Button>
                    </li>
                    <li>
                        <Button type="link" to="imprint">
                            Impressum
                        </Button>
                    </li>
				</ul>
			</div>
			<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
				<div class="mb-2 font-bold text-delorean">Mehr von "Herr Bergmann"</div>
				<ul class="leading-normal list-reset">
                    <li>
                        <Button type="linkout" to="https://discord.gg/fromthefuture">
                            Joine der “FTF”-Redaktion
                        </Button>
                    </li>
                    <li>
                        <Button type="linkout" to="https://www.patreon.com/herrbergmann">
                            Unterstütze seine Projekte
                        </Button>
                    </li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
</script>

<style></style>
