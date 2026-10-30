<script setup lang="ts">
// Figma: checkbox · node 6227:605 · checked = no | yes · state = default | focus | error | disabled
// 20px box inside a 44 × 44 hit area. Always pair with a visible label (consent-line does this).
import { useId } from 'vue'

const checked = defineModel<boolean>({ default: false })
const props = withDefaults(defineProps<{ id?: string; error?: boolean; disabled?: boolean; describedby?: string }>(), {
  id: '',
  error: false,
  disabled: false,
  describedby: undefined,
})
const autoId = `ml-checkbox-${useId()}`
</script>

<template>
  <span class="ml-checkbox" :class="{ 'is-error': error, 'is-disabled': disabled }">
    <input
      :id="props.id || autoId"
      v-model="checked"
      class="ml-checkbox__input"
      type="checkbox"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedby"
    />
    <span class="ml-checkbox__box" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="20" height="20"><path d="M5 10.5l3.2 3.2L15 7" /></svg>
    </span>
  </span>
</template>

<style scoped>
.ml-checkbox {
  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}
.ml-checkbox__input {
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}
.ml-checkbox__box {
  display: inline-flex;
  width: 20px;
  height: 20px;
  border: var(--border-width-default) solid var(--color-border-strong);
  border-radius: var(--radius-xs);
  background: var(--color-surface-input);
  pointer-events: none;
}
.ml-checkbox__box svg {
  fill: none;
  stroke: transparent;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ml-checkbox__input:checked + .ml-checkbox__box {
  border-color: var(--color-action-primary-bg);
  background: var(--color-action-primary-bg);
}
.ml-checkbox__input:checked + .ml-checkbox__box svg {
  stroke: var(--color-icon-inverse);
}
.ml-checkbox.is-error .ml-checkbox__box {
  border-color: var(--color-border-error);
}
.ml-checkbox__input:focus-visible + .ml-checkbox__box {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: var(--space-scale-2);
}
.ml-checkbox.is-disabled .ml-checkbox__box,
.ml-checkbox.is-disabled .ml-checkbox__input:checked + .ml-checkbox__box {
  border-color: var(--color-border-default);
  background: var(--color-surface-disabled);
}
.ml-checkbox.is-disabled .ml-checkbox__input:checked + .ml-checkbox__box svg {
  stroke: var(--color-icon-muted);
}
.ml-checkbox.is-disabled .ml-checkbox__input {
  cursor: not-allowed;
}
</style>
