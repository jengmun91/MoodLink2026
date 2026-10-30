<script setup lang="ts">
// Figma: textarea · node 6196:613 · value, counter, helper (text) · show-helper (boolean) · field-label (exposed)
// state = default | focus | error | disabled. Same tokens as input-field: 1.5px border, Focus ring on focus.
import { computed, useId } from 'vue'
import FieldLabel from './FieldLabel.vue'

const value = defineModel<string>({ default: '' })
const props = withDefaults(
  defineProps<{ label: string; required?: boolean; placeholder?: string; maxlength?: number; helper?: string; error?: string; disabled?: boolean; rows?: number }>(),
  { required: true, placeholder: '', maxlength: 2000, helper: '', error: '', disabled: false, rows: 5 },
)
const uid = useId()
const id = `ml-textarea-${uid}`
const describedBy = computed(() => [props.error || props.helper ? `${id}-help` : '', `${id}-count`].filter(Boolean).join(' '))
</script>

<template>
  <div class="ml-textarea" :class="{ 'is-error': error, 'is-disabled': disabled }">
    <FieldLabel :for="id" :label="label" :required="required" />
    <div class="ml-textarea__field">
      <textarea
        :id="id"
        v-model="value"
        class="ml-textarea__input"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :rows="rows"
        :disabled="disabled"
        :required="required"
        :aria-invalid="error ? 'true' : undefined"
        :aria-describedby="describedBy"
      />
      <span :id="`${id}-count`" class="ml-textarea__counter" aria-live="polite">{{ value.length }}/{{ maxlength }}</span>
    </div>
    <p v-if="error || helper" :id="`${id}-help`" class="ml-textarea__helper" :role="error ? 'alert' : undefined">{{ error || helper }}</p>
  </div>
</template>

<style scoped>
.ml-textarea {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  font-family: var(--font-family-body);
}
.ml-textarea__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  min-height: 120px;
  padding: var(--space-scale-12) var(--space-scale-12) var(--space-scale-12) var(--space-scale-16);
  border: var(--border-width-default) solid var(--color-border-input);
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-input);
}
.ml-textarea__field:focus-within {
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 var(--border-width-focus) var(--color-border-focus);
}
.ml-textarea__input {
  flex: 1;
  min-height: 104px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-text-primary);
  font: inherit;
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
  resize: vertical;
}
.ml-textarea__input:focus {
  outline: none;
}
.ml-textarea__input::placeholder {
  color: var(--color-text-placeholder);
}
.ml-textarea__counter,
.ml-textarea__helper {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-textarea.is-error .ml-textarea__field {
  border-color: var(--color-border-error);
}
.ml-textarea.is-error .ml-textarea__helper {
  color: var(--color-text-error);
}
.ml-textarea.is-disabled .ml-textarea__field {
  border-color: var(--color-border-default);
  background: var(--color-surface-disabled);
}
.ml-textarea.is-disabled .ml-textarea__input {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
</style>
