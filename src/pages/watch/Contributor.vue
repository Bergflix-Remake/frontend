<template>
  <div
    class='cursor-pointer bg-clean-dark-800 flex flex-row flex-shrink-0 rounded-lg shadow-lg h-24 w-52 overflow-hidden hover:-translate-y-1 hover:shadow-primary-500/5 hover:shadow-xl transition-all'>
    <div class='w-1/3 bg-cover h-full' :style='`background-image: url(${image});`'></div>
    <div class='flex flex-col w-full h-full justify-center items-center'>
      <h3>{{ name }}</h3>
      <h4 class='text-gray-500'>{{ role }}</h4>
    </div>
  </div>
</template>
<script setup lang='ts'>
defineProps<{
  name: string;
  role: string;
  image: string;
}>();
</script>
