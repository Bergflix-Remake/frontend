<script setup lang="ts">
import { PencilIcon, CheckIcon, XIcon } from '@heroicons/vue/outline';
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['update:modelValue', 'confirm', 'reset']);

const props = defineProps({
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

const backupValue = ref(props.modelValue);
const isActive = ref(false);
const input = ref<HTMLSpanElement>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLSpanElement;
  emit('update:modelValue', target.innerText);
};

watchEffect(() => {
  if (isActive.value) {
    input.value?.focus();
  } else {
    input.value?.blur();
  }
});

const setActive = (status: boolean) => {
  if (props.disabled && status) return;
  isActive.value = status;
};

const confirm = () => {
  console.debug(`Confirming value ${props.modelValue}`);
  backupValue.value = props.modelValue;
  emit('confirm');
  setActive(false);
};

const reset = () => {
  console.debug(`Resetting value ${props.modelValue} to ${backupValue.value}`);
  emit('update:modelValue', backupValue.value);
  emit('reset');
  setActive(false);
};
</script>

<template>
  <div class="flex flex-row items-center">
    <span
      ref="input"
      :tabindex="0"
      :contenteditable="isActive"
      v-bind="props"
      :value="modelValue"
      class="input"
      :class="{ disabled: !isActive }"
      @input="handleInput"
      @keydown="
        (e) => {
          if (!isActive) return;
          if (e.key === 'Enter') {
            confirm();
          } else if (e.key === 'Escape') {
            reset();
          }
        }
      "
    >
      {{ modelValue }}
    </span>
    <PencilIcon v-if="!isActive && !disabled" class="icon" @click="setActive(true)" />
    <div v-else-if="!disabled" class="flex flex-row">
      <CheckIcon class="icon" @click="() => confirm()" />
      <XIcon class="icon" @click="() => reset()" />
    </div>
  </div>
</template>

<style scoped>
.disabled {
  @apply !bg-transparent cursor-text;
}

.icon {
  @apply w-5 h-5 text-delorean-500 hover:text-primary-500 cursor-pointer;
}
</style>
