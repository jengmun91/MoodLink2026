<script setup lang="ts">
// Figma: badge · node 6192:546 · label (text) · show-icon (boolean) · tone = success | info. Not interactive.
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ label: string; tone?: 'success' | 'info'; showIcon?: boolean }>(), { tone: 'success', showIcon: true })
</script>

<template>
  <span class="ml-badge" :class="`ml-badge--${tone}`">
    <IconUi v-if="showIcon" name="badge-check" :size="16" />
    {{ label }}
  </span>
</template>

<style scoped>
.ml-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-scale-4);
  padding: var(--space-scale-4) var(--space-scale-8);
  border-radius: var(--radius-pill);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
  font-weight: var(--font-weight-bold);
  white-space: nowrap;
}
.ml-badge--success {
  background: var(--color-status-success-bg);
}
.ml-badge--success :deep(.ml-icon-ui) {
  color: var(--color-icon-success);
}
.ml-badge--info {
  background: var(--color-status-info-bg);
}
.ml-badge--info :deep(.ml-icon-ui) {
  color: var(--color-icon-info);
}
</style>
