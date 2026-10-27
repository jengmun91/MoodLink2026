<script setup lang="ts">
// Figma: language-selector · node 6044:2699 · state = default | hover | focus
// A button that opens the language list. The list itself lives in nav-menu-mobile
// (mobile) or a dropdown (desktop, not designed yet).
withDefaults(defineProps<{ label?: string; expanded?: boolean }>(), {
  label: 'EN',
  expanded: false,
})
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="ml-language-selector"
    aria-haspopup="listbox"
    :aria-expanded="expanded ? 'true' : 'false'"
    aria-label="Change language"
    @click="$emit('toggle')"
  >
    <span>{{ label }}</span>
    <span aria-hidden="true">▾</span>
  </button>
</template>

<style scoped>
.ml-language-selector {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-scale-8);
  min-width: 80px;
  min-height: 40px;
  padding: var(--space-scale-8) var(--space-scale-16);
  border: 0;
  border-radius: var(--radius-md);
  background: var(--color-action-selector-bg);
  color: var(--color-text-inverse);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-language-selector:hover {
  background: var(--color-action-selector-bg-hover);
}
.ml-language-selector:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 2px;
}
</style>
