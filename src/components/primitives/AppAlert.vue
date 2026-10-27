<script setup lang="ts">
// Figma: alert · node 6051:4989
// type = info | success | warning | error · style = inline | banner
withDefaults(
  defineProps<{
    type?: 'info' | 'success' | 'warning' | 'error'
    variant?: 'inline' | 'banner'
    title: string
    message?: string
  }>(),
  { type: 'info', variant: 'inline', message: '' },
)
const glyph = { info: 'i', success: '✓', warning: '!', error: '×' } as const
</script>

<template>
  <div
    class="ml-alert"
    :class="[`ml-alert--${type}`, `ml-alert--${variant}`]"
    :role="type === 'error' ? 'alert' : 'status'"
  >
    <span class="ml-alert__icon" aria-hidden="true">{{ glyph[type] }}</span>
    <div class="ml-alert__content">
      <strong class="ml-alert__title">{{ title }}</strong>
      <span v-if="message" class="ml-alert__message">{{ message }}</span>
    </div>
  </div>
</template>

<style scoped>
.ml-alert {
  --ml-alert-accent: var(--color-status-info);
  --ml-alert-bg: var(--color-status-info-bg);
  display: flex;
  gap: var(--space-scale-12);
  background: var(--ml-alert-bg);
  color: var(--color-text-primary);
}
.ml-alert--success {
  --ml-alert-accent: var(--color-status-success);
  --ml-alert-bg: var(--color-status-success-bg);
}
.ml-alert--warning {
  --ml-alert-accent: var(--color-status-warning);
  --ml-alert-bg: var(--color-status-warning-bg);
}
.ml-alert--error {
  --ml-alert-accent: var(--color-status-error);
  --ml-alert-bg: var(--color-status-error-bg);
}

.ml-alert--inline {
  align-items: flex-start;
  min-width: 280px;
  padding: var(--space-stack-sm);
  border-left: 4px solid var(--ml-alert-accent);
  border-radius: var(--radius-md);
}
.ml-alert--banner {
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--space-grid-gap-sm) var(--space-page-margin);
}

.ml-alert__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-pill);
  background: var(--ml-alert-accent);
  color: var(--color-text-inverse);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-bold);
}
.ml-alert--banner .ml-alert__icon {
  width: 20px;
  height: 20px;
  font-size: var(--font-size-caption);
}

.ml-alert__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-2xs);
  min-width: 0;
}
.ml-alert--banner .ml-alert__content {
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-stack-2xs) var(--space-stack-xs);
}
.ml-alert__title {
  font-size: var(--font-size-title-sm);
  line-height: var(--font-line-height-title-sm);
  font-weight: var(--font-weight-semibold);
}
.ml-alert--banner .ml-alert__title {
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
}
.ml-alert__message {
  color: var(--color-text-secondary);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
</style>
