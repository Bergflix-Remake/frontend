<template>
	<div id="spacer" class="mt-20"></div>
	<section v-for="item in items" class="my-2">
		<Textblock v-if="item.__component == 'common.text-block'" :title="item.title" :content="item.text" />
		<Button v-if="item.__component == 'common.button'" :type="item.type" :to="item.to" :icon="item.icon" >
			{{ item.text }}
		</Button>
	</section>
</template>

<script setup lang="ts">
import Textblock from '../components/Common/Textblock.vue';
import Button from '../components/Common/Button.vue';
// Our API URL is https://wizardly-galileo121114.a.eun01.geode.host/api/
// asyncrhonously fetch the data from the /homepage endpoint, using the populate query param with the * value.
// This will populate the data for us, and we can use it in our template.
const response = await fetch(`https://wizardly-galileo121114.a.eun01.geode.host/api/homepage?populate=*`).then(res => res.json()).then(data => data);
const items = response.data.attributes.page;

</script>

<style lang="scss"></style>
