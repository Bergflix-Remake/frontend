<template>
<div class="w-screen h-screen p-10 pt-28">
    <SeriesInfo :series="series"/>
    <StyledDialog title="Test dialogue" description="This is a test dialog" :buttons="[{'text': 'More info', 'action': '/media/1'}]"/>
</div>
</template>

<script setup lang="ts">
import { get_series } from '../api_handler';
import SeriesInfo from '../components/SeriesInfo.vue';
import StyledDialog from '../components/StyledDialog.vue';

const series = await get_series(1).then(series => {
    return series;
});
</script>

<style lang="scss">

</style>