<script setup lang="ts">
// Figma: field-label · node 6195:636 · label (text) · required = yes | no
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ label: string; required?: boolean; for?: string; requiredText?: string }>(), {
  required: true,
  for: undefined,
  requiredText: '(required)',
})
</script>

<template>
  <label class="ml-field-label" :for="$props.for">
    <IconUi v-if="required" name="asterisk" :size="20" />
    <span>{{ label }}</span>
    <span v-if="required" class="ml-visually-hidden">{{ requiredText }}</span>
  </label>
</template>

<style scoped>
.ml-field-label {
  display: flex;
  align-items: center;
  gap: var(--space-scale-6);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
}
.ml-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
