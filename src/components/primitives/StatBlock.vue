<script setup lang="ts">
// Figma: stat-block · node 6044:3174 · icon = yes | no · icon-name (instance swap)
// Sizes follow the screen: value 56px desktop / 36px mobile.
import AppIcon, { type IconName } from './AppIcon.vue'

withDefaults(
  defineProps<{
    value: string
    label: string
    /** Figma `icon = yes | no`. */
    icon?: boolean
    /** Figma `icon-name` (instance swap of the `icon` component). */
    iconName?: IconName
  }>(),
  { icon: true, iconName: 'awareness' },
)
</script>

<template>
  <div class="ml-stat-block">
    <span v-if="icon" class="ml-stat-block__icon">
      <AppIcon :name="iconName" size="md" />
    </span>
    <strong class="ml-stat-block__value">{{ value }}</strong>
    <span class="ml-stat-block__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.ml-stat-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-stack-xs);
  min-width: 140px;
  text-align: center;
}
.ml-stat-block__icon {
  display: inline-flex;
  margin-bottom: var(--space-stack-xs);
}
.ml-stat-block__icon :deep(img) {
  width: var(--icon-size-feature);
  height: var(--icon-size-feature);
}
.ml-stat-block__value {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-display-sm);
  line-height: var(--font-line-height-display-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.ml-stat-block__label {
  color: var(--color-text-secondary);
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
}
</style>
