<script setup lang="ts">


defineProps({
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
});

</script>


<template>
  <div class="flex flex-row w-full">
    <input type="text">
  </div>
</template>