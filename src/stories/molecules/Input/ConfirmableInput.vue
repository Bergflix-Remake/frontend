<script setup lang="ts">
import {
  PencilIcon,
  CheckIcon,
  XIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/outline';
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['update:modelValue', 'confirm', 'reset']);

const props = defineProps<{
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: null;
  modelValue?: string;
  maxLength?: number;
  validator?: (value: string) => boolean;
}>();

const backupValue = ref(props.modelValue);
const isActive = ref(false);
const input = ref<HTMLSpanElement>();
const inputError = ref(false);

const handleInput = (e: Event) => {
  const target = e.target as HTMLSpanElement;
  if (props.maxLength) {
    inputError.value = target.innerText.length > props.maxLength;
  }
  if (props.validator) {
    inputError.value = !props.validator(target.innerText);
  }
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

const reset = () => {
  console.debug(`Resetting value ${props.modelValue} to ${backupValue.value}`);
  // Remove error
  inputError.value = false;
  emit('update:modelValue', backupValue.value);
  emit('reset');
  setActive(false);
};

const confirm = () => {
  console.debug(`Confirming value ${props.modelValue}`);
  // make sure the value is valid
  if (props.validator && !props.validator(props.modelValue || '')) {
    console.debug(`Value ${props.modelValue} is invalid`);
    // Reset to backup value
    reset();
    return;
  }
  // make sure the value is not too long
  if (props.maxLength && (props.modelValue?.length || 0) > props.maxLength) {
    console.debug(
      `Value ${props.modelValue} is longer than ${props.maxLength} characters`,
    );
    // Reset to backup value
    reset();
    return;
  }
  backupValue.value = props.modelValue;
  emit('confirm');
  setActive(false);
};
</script>

<template>
  <div class="flex flex-row items-center relative max-w-full">
    <ExclamationCircleIcon v-if="inputError" class="h-5 w-5 text-red-500" />
    <span
      ref="input"
      :tabindex="0"
      :contenteditable="isActive"
      v-bind="props"
      :value="modelValue"
      class="input max-w-full overflow-hidden"
      :class="{
        disabled: !isActive,
        'border-red-500 animate-pulse': inputError,
      }"
      :maxlength="props.maxLength"
      @input="handleInput"
      @keydown="
        ($event: KeyboardEvent) => {
          if (!isActive) return;

          if ($event.key === 'Enter') {
            confirm();
          } else if ($event.key === 'Escape') {
            reset();
          }
        }
      "
    >
      {{ modelValue }}
    </span>
    <span v-if="!isActive" class="absolute right-6 top-1/2 -translate-y-1/2">
      <slot />
    </span>
    <PencilIcon
      v-if="!isActive && !disabled"
      class="icon"
      @click="setActive(true)"
    />
    <div v-else-if="!disabled" class="flex flex-row">
      <CheckIcon class="icon" @click="() => confirm()" />
      <XIcon class="icon" @click="() => reset()" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/index.css";

.disabled {
  @apply bg-transparent! cursor-text;
}

.icon {
  @apply w-5 h-5 text-delorean-500 hover:text-primary-500 cursor-pointer ml-2;
}
</style>
