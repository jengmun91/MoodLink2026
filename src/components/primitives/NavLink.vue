<script setup lang="ts">
// Figma: nav-link · node 6044:2683
// state = default | hover | focus | active | disabled (hover / focus are CSS)
withDefaults(defineProps<{ label?: string; href?: string; active?: boolean; disabled?: boolean }>(), {
  label: '',
  href: '#',
  active: false,
  disabled: false,
})
</script>

<template>
  <a
    class="ml-nav-link"
    :class="{ 'is-active': active, 'is-disabled': disabled }"
    :href="disabled ? undefined : href"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <span class="ml-nav-link__label"><slot>{{ label }}</slot></span>
    <span class="ml-nav-link__indicator" aria-hidden="true" />
  </a>
</template>

<style scoped>
.ml-nav-link {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-stack-2xs);
  padding: var(--space-scale-8) var(--space-scale-16) var(--space-scale-6);
  border-radius: var(--radius-pill);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
  text-align: center;
  text-decoration: none;
  transition:
    background-color var(--motion-duration-fast) var(--motion-easing-standard),
    color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-nav-link__label {
  max-width: 200px;
}
.ml-nav-link__indicator {
  width: 24px;
  height: 2px;
  border-radius: 1px;
  background: transparent;
}
.ml-nav-link:hover {
  background: var(--color-surface-hover);
  color: var(--color-text-link-hover);
}
.ml-nav-link:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 0;
}
.ml-nav-link.is-active .ml-nav-link__indicator {
  background: var(--color-text-primary);
}
.ml-nav-link.is-disabled {
  color: var(--color-text-disabled);
  pointer-events: none;
}
</style>
