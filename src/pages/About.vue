<template>
	<div id="spacer" class="mt-20"></div>
	<Loader v-if="content.isLoading" />
	<section v-if="content.isSuccess" v-for="item in content.data.attributes!.page" class="my-2">
		<Textblock v-if="item?.__typename == 'ComponentCommonTextBlock'" :title="item!.title!" :content="item!.text!" />
		<Button v-if="item?.__typename == 'ComponentCommonButton'" :type="item.type" :to="item.to" :icon="item.icon!" >
			{{ item.text }}
		</Button>
	</section>
</template>

<script setup lang="ts">
import Textblock from '../components/Common/Textblock.vue';
import Button from '../components/Common/Button.vue';
import { useStrapi } from '../main';
import Loader from '../components/Loader.vue'
import { About, AboutEntity } from '../models/types';

const content = useStrapi<AboutEntity>([
	"about",
	{
		populate: '*'
	}
]);

</script>

<style lang="scss"></style>
