<template>
  <span class="font-bold text-white relative" @click="$emit('click')">
    {{ long ? 'Bergflix' : 'Bf'
    }}<span class="text-primary-500"
      >.
      <slot />
    </span>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  long?: boolean;
}>();

defineEmits(['click']);
</script>
