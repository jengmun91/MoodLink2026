<script setup lang="ts">
// Figma: nav-item-mobile · node 6071:9208 · state = default | pressed | active
// pressed is the CSS :active state.
withDefaults(defineProps<{ label?: string; href?: string; active?: boolean }>(), {
  label: '',
  href: '#',
  active: false,
})
</script>

<template>
  <a
    class="ml-nav-item-mobile"
    :class="{ 'is-active': active }"
    :href="href"
    :aria-current="active ? 'page' : undefined"
  >
    <span class="ml-nav-item-mobile__label"><slot>{{ label }}</slot></span>
    <span class="ml-nav-item-mobile__chevron" aria-hidden="true">›</span>
  </a>
</template>

<style scoped>
.ml-nav-item-mobile {
  display: flex;
  align-items: center;
  gap: var(--space-scale-12);
  min-height: 56px;
  padding: var(--space-scale-12) var(--space-stack-sm);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-title);
  line-height: var(--font-line-height-title);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-nav-item-mobile__label {
  flex: 1;
  min-width: 0;
}
.ml-nav-item-mobile__chevron {
  font-size: var(--font-size-h4);
  color: var(--color-icon-default);
}
.ml-nav-item-mobile:active {
  background: var(--color-surface-hover);
}
.ml-nav-item-mobile:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 0;
}
.ml-nav-item-mobile.is-active {
  background: var(--color-surface-calm-tint);
  color: var(--color-text-accent);
}
</style>
