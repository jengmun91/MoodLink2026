<script setup lang="ts">
// Figma: footer-link · node 6044:2692 · state = default | hover | focus | disabled
// Use on color/surface/inverse (dark footer).
withDefaults(defineProps<{ label?: string; href?: string; disabled?: boolean }>(), {
  label: '',
  href: '#',
  disabled: false,
})
</script>

<template>
  <a
    class="ml-footer-link"
    :class="{ 'is-disabled': disabled }"
    :href="disabled ? undefined : href"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<style scoped>
.ml-footer-link {
  display: inline-block;
  max-width: 240px;
  padding-block: var(--space-scale-4);
  border-radius: var(--radius-xs);
  color: var(--color-text-on-dark-accent);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
  text-decoration: none;
  transition: color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-footer-link:hover {
  color: var(--color-text-on-dark-hover);
  text-decoration: underline;
}
.ml-footer-link:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 2px;
}
.ml-footer-link.is-disabled {
  color: var(--color-text-disabled);
  pointer-events: none;
}
</style>
