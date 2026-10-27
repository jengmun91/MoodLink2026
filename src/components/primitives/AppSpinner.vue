<script setup lang="ts">
// Figma: spinner · node 6051:4913 · size = sm | md | lg · tone = default | on-dark
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    tone?: 'default' | 'on-dark'
    /** Accessible label. Pass an empty string when the parent already announces loading. */
    label?: string
  }>(),
  { size: 'md', tone: 'default', label: 'Loading' },
)
</script>

<template>
  <span
    class="ml-spinner"
    :class="[`ml-spinner--${size}`, `ml-spinner--${tone}`]"
    :role="label ? 'status' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
  />
</template>

<style scoped>
.ml-spinner {
  --ml-spinner-size: 24px;
  display: inline-block;
  flex: none;
  width: var(--ml-spinner-size);
  height: var(--ml-spinner-size);
  border-radius: 50%;
  border: calc(var(--ml-spinner-size) / 8) solid var(--color-icon-muted);
  border-top-color: var(--color-brand-primary);
  border-right-color: var(--color-brand-primary);
  animation: ml-spin var(--motion-duration-spin) linear infinite;
}
.ml-spinner--sm {
  --ml-spinner-size: 16px;
}
.ml-spinner--lg {
  --ml-spinner-size: 40px;
}
.ml-spinner--on-dark {
  border-color: color-mix(in srgb, var(--color-text-inverse) 30%, transparent);
  border-top-color: var(--color-text-inverse);
  border-right-color: var(--color-text-inverse);
}

@keyframes ml-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ml-spinner {
    animation: ml-pulse 1.6s ease-in-out infinite !important;
  }
  @keyframes ml-pulse {
    50% {
      opacity: 0.4;
    }
  }
}
</style>
