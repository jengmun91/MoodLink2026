<script setup lang="ts">
// Figma: chip-button · node 6192:595 · label (text) · state = default | pressed | focus
// Visual height 28px (space/scale/28); the hit area is extended to 44px.
withDefaults(defineProps<{ label: string; type?: 'button' | 'submit' }>(), { type: 'button' })
defineEmits<{ click: [MouseEvent] }>()
</script>

<template>
  <button :type="type" class="ml-chip-button" @click="$emit('click', $event)">{{ label }}</button>
</template>

<style scoped>
.ml-chip-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: var(--space-scale-28);
  padding: var(--space-scale-4) var(--space-scale-10);
  border: 0;
  border-radius: var(--radius-pill);
  background: var(--color-surface-calm);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}
.ml-chip-button::before {
  content: '';
  position: absolute;
  inset: -8px -4px;
}
.ml-chip-button:active {
  background: var(--color-surface-calm-tint);
}
.ml-chip-button:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
</style>
