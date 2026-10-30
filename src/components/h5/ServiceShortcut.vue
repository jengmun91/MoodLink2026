<script setup lang="ts">
// Figma: service-shortcut · node 6185:546 · label (text) · icon (swap: icon-service) · state = default | pressed | focus
// Label wraps to two lines, never truncates.
import IconService, { type IconServiceName } from './IconService.vue'

withDefaults(defineProps<{ label: string; icon: IconServiceName; href?: string }>(), { href: '#' })
</script>

<template>
  <a class="ml-service-shortcut" :href="href">
    <span class="ml-service-shortcut__tile"><IconService :name="icon" /></span>
    <span class="ml-service-shortcut__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.ml-service-shortcut {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-scale-10);
  min-width: 0;
  padding: var(--space-scale-2);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.ml-service-shortcut__tile {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: var(--color-surface-subtle);
}
.ml-service-shortcut__label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
  text-align: center;
  overflow-wrap: anywhere;
}
.ml-service-shortcut:active {
  background: var(--color-surface-hover);
}
.ml-service-shortcut:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
