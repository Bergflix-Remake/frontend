<template>
  <span class="font-bold text-white relative" @click="$emit('click')">
    {{ long ? 'Bergflix' : 'Bf'
    }}<span class="text-primary-500">.
      <slot />
    </span>
  </span>
</template>
<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{
  long?: boolean;
}>();
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>