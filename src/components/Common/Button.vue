<template>
	<router-link
		v-if="type == 'link'"
		:to="to ? `/${to}` : '#'"
		class="ease-in-out cursor-pointer h-min dark:text-white hover:border-b-primary hover:border-b-2 transition-border"
	>
		<component
			v-if="icon"
			:is="icon"
			class="inline w-5 h-5 mr-1 transition-colors dark:text-white"
		/>
		<slot />
	</router-link>
	<router-link
		target="_blank"
		rel="noopener noreferrer"
		v-else-if="type == 'linkout'"
		:to="to ? `/out/${to}` : '#'"
		class="inline ease-in-out cursor-pointer h-min group dark:text-white hover:border-b-primary hover:border-b-2 transition-border"
	>
		<component
			v-if="icon"
			:is="icon"
			class="inline w-5 h-5 mr-1 transition-colors dark:text-white"
		/>
		<slot />
		<ExternalLinkIcon
			class="inline w-5 h-5 mb-1 ml-0.5 transition-colors dark:text-white group-hover:text-primary"
		/>
	</router-link>
	<router-link
		v-else-if="type == 'button'"
		:to="to ? `${to}` : '#'"
		class="inline p-2 transition-colors ease-in-out bg-gray-300 bg-opacity-25 rounded cursor-pointer h-min group dark:text-white dark:bg-darkest-dark dark:bg-opacity-25 dark:hover:bg-primary hover:bg-primary hover:bg-opacity-50 dark:hover:bg-opacity-50"
	>
		<component
			v-if="icon"
			:is="icon"
			class="inline w-5 h-5 mr-1 transition-colors dark:text-white"
		/>
		<slot />
	</router-link>
</template>

<script setup lang="ts">
import { ExternalLinkIcon } from "@heroicons/vue/outline";
import { RenderFunction } from "@vue/runtime-core";
const props = defineProps({
	type: {
		type: String,
		default: "button",
		validator: (value: string) =>
			["button", "link", "linkout"].includes(value),
	},
	to: {
		type: String,
	},
	icon: {
		type: Object as () => RenderFunction,
		required: false,
	}
	});
</script>

<style></style>
