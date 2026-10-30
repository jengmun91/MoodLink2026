<script setup lang="ts">
// Figma: tag · node 6192:567 · label (text). Read-only keyword chip, not interactive.
defineProps<{ label: string }>()
</script>

<template>
  <span class="ml-tag">{{ label }}</span>
</template>

<style scoped>
.ml-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-scale-4) var(--space-scale-8);
  border-radius: var(--radius-pill);
  background: var(--color-surface-fresh);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
}
</style>
