<script setup lang="ts">
// Figma: tab-item · node 6171:449 · label (text) · icon (swap) · state = default | pressed | focus | active
// pressed = :active, focus = :focus-visible, active = `active` prop (aria-current="page").
import IconUi, { type IconUiName } from './IconUi.vue'

withDefaults(defineProps<{ label: string; icon: IconUiName; href?: string; active?: boolean }>(), { href: '#', active: false })
</script>

<template>
  <a class="ml-tab-item" :class="{ 'is-active': active }" :href="href" :aria-current="active ? 'page' : undefined">
    <IconUi :name="icon" />
    <span class="ml-tab-item__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.ml-tab-item {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-stack-2xs);
  min-width: 44px;
  min-height: 44px;
  padding: var(--space-scale-4) var(--space-stack-2xs);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.ml-tab-item__label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-regular);
  text-align: center;
}
.ml-tab-item.is-active {
  color: var(--color-text-primary);
}
.ml-tab-item:active {
  background: var(--color-surface-hover);
}
.ml-tab-item:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
