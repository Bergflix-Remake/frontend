<template>
    <div class="flex flex-col bg-black">
        <Hero />
        <section class="p-4">
            <Title class="mb-2"><Logo :long="true" class="!text-5xl">Originals</Logo></Title>
            <ScrollableRow>
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
            </ScrollableRow>
            <Title class="mb-2">Filme</Title>
            <ScrollableRow>
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
            </ScrollableRow>
            <Title class="mb-2">Serien</Title>
            <ScrollableRow>
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
                <Poster :loading="true" />
            </ScrollableRow>
        </section>
    </div>
</template>

<script setup lang="ts">
import Hero from '../../organisms/Hero/Hero.vue';
import ScrollableRow from '../../cells/ScrollableRow.vue';
import Poster from '../../molecules/Poster.vue';
import Title from '../../atoms/Title/Title.vue';
import Logo from '../../atoms/Logo.vue';
</script>

<style>
</style>
