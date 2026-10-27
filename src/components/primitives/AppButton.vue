<script setup lang="ts">
// Figma: button · node 6044:2667
// variant = primary | secondary · state = default | hover | focus | disabled | loading
// hover / focus come from CSS; disabled and loading are props.
import AppSpinner from './AppSpinner.vue'

withDefaults(
  defineProps<{
    /** Figma text property `label`. A default slot still works for rich content. */
    label?: string
    variant?: 'primary' | 'secondary'
    disabled?: boolean
    loading?: boolean
    /** Render as a link instead of a <button>. */
    href?: string
    type?: 'button' | 'submit' | 'reset'
    /** Shown instead of the label while loading. */
    loadingLabel?: string
  }>(),
  { label: '', variant: 'primary', disabled: false, loading: false, type: 'button', loadingLabel: 'Sending…' },
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="ml-button"
    :class="[`ml-button--${variant}`, { 'is-loading': loading }]"
    :href="href && !disabled ? href : undefined"
    :type="href ? undefined : type"
    :disabled="href ? undefined : disabled || loading"
    :aria-disabled="disabled || loading ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
  >
    <AppSpinner
      v-if="loading"
      size="sm"
      :tone="variant === 'primary' ? 'on-dark' : 'default'"
      label=""
    />
    <span class="ml-button__label">
      <template v-if="loading">{{ loadingLabel }}</template>
      <slot v-else>{{ label }}</slot>
    </span>
  </component>
</template>

<style scoped>
.ml-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-scale-10);
  min-height: var(--button-height);
  padding: var(--space-scale-12) var(--button-padding-x);
  border: 0;
  border-radius: var(--radius-pill);
  font-family: var(--font-family-body);
  font-size: var(--font-size-button);
  line-height: var(--font-line-height-button);
  font-weight: var(--font-weight-medium);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}

/* Labels wrap to two lines instead of truncating (EN / MS). */
.ml-button__label {
  max-width: 256px;
}

.ml-button--primary {
  background: var(--color-action-primary-bg);
  color: var(--color-action-primary-text);
}
.ml-button--primary:hover {
  background: var(--color-action-primary-bg-hover);
}

.ml-button--secondary {
  background: var(--color-action-secondary-bg);
  color: var(--color-action-secondary-text);
}
.ml-button--secondary:hover {
  background: var(--color-action-secondary-bg-hover);
}

.ml-button:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 0;
}

.ml-button:disabled:not(.is-loading),
.ml-button[aria-disabled='true']:not(.is-loading) {
  background: var(--color-surface-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.ml-button.is-loading {
  cursor: progress;
}
</style>
