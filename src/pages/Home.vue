<template>
	<section class="w-full h-screen mt-20">
		<h1 class="text-xl font-bold">Home Page</h1>
		<Markdown :source="md" :breaks="true" />
	</section>
</template>

<script setup lang="ts">
// Our API URL is https://wizardly-galileo121114.a.eun01.geode.host/api/
// asyncrhonously fetch the data from the /homepage endpoint, using the populate query param with the * value.
// This will populate the data for us, and we can use it in our template.
const response = await fetch(`https://wizardly-galileo121114.a.eun01.geode.host/api/homepage?populate=*`).then(res => res.json()).then(data => data);
const md = `# Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
			omnis amet ducimus minima repellat tempore, reiciendis fugiat fugit
			totam, ab et quaerat accusamus veniam! Labore molestias accusamus
			veritatis odio beatae corrupti sequi eligendi ullam perferendis,
			nihil optio ex qui soluta.`;
</script>

<style lang="scss"></style>
