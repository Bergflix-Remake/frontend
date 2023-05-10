<template>
  <span class="font-bold text-white relative" @click="$emit('click')">
    {{ long ? 'Bergflix' : 'Bf'
    }}<span class="text-primary-500">. <slot /></span>
    <a href="https://cdn.upload.systems/uploads/f9kaTj1Q.png"
      ><span
        v-if="canHaveSlogan"
        class="absolute -right-4 -bottom-4 font-inception text-base text-indigo-500 p-1"
        ><img
          src="https://cdn.discordapp.com/emojis/1102957082019364936.webp?size=96&quality=lossless"
          class="Jawohl"
          style="width:30px; height:30px"/></span
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