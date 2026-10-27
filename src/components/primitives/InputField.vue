<script setup lang="ts">
// Figma: input-field · node 6051:4940 · state = default | focus | error | disabled
// focus is CSS; error is shown when the `error` prop has a message.
import { useId } from 'vue'

withDefaults(
  defineProps<{
    label: string
    helper?: string
    error?: string
    placeholder?: string
    type?: string
    disabled?: boolean
  }>(),
  { helper: '', error: '', placeholder: '', type: 'text', disabled: false },
)
const model = defineModel<string>({ default: '' })
const id = useId()
</script>

<template>
  <div class="ml-input-field" :class="{ 'has-error': !!error, 'is-disabled': disabled }">
    <label class="ml-input-field__label" :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      class="ml-input-field__control"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error || helper ? `${id}-help` : undefined"
    />
    <p v-if="error || helper" :id="`${id}-help`" class="ml-input-field__help">
      {{ error || helper }}
    </p>
  </div>
</template>

<style scoped>
.ml-input-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-xs);
  min-width: 240px;
}
.ml-input-field__label {
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
.ml-input-field__control {
  width: 100%;
  min-height: var(--input-height);
  padding: 0 var(--space-scale-20);
  border: var(--border-width-default) solid var(--color-border-input);
  border-radius: var(--radius-md);
  background: var(--color-surface-input);
  color: var(--color-text-primary);
  font: inherit;
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
  transition: border-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-input-field__control::placeholder {
  color: var(--color-text-placeholder);
}
.ml-input-field__control:focus-visible {
  outline: none;
  border: 2px solid var(--color-border-focus);
}
.ml-input-field__help {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}

.has-error .ml-input-field__control {
  border: 2px solid var(--color-border-error);
}
.has-error .ml-input-field__help {
  color: var(--color-text-error);
}

.is-disabled .ml-input-field__label {
  color: var(--color-text-disabled);
}
.is-disabled .ml-input-field__control {
  background: var(--color-surface-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
</style>
