<template>
  <span class="font-bold text-white relative" @click="$emit('click')">
    {{ long ? 'Bergflix' : 'Bf'
    }}<span class="text-primary-500">. <slot /></span>
    <a href="https://cdn.upload.systems/uploads/f9kaTj1Q.png"
      ><span
        v-if="canHaveSlogan"
        class="absolute -right-4 -bottom-4 font-inception text-base text-indigo-500 -rotate-12 p-1"
        >Jawohl!</span
      ></a
    >
  </span>
</template>
<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{
  long?: boolean;
  canHaveSlogan?: boolean;
}>();
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>
