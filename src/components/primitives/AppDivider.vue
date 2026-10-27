<script setup lang="ts">
// Figma: divider · node 6044:2706
// orientation = horizontal | vertical · tone = default | accent | on-dark
withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    tone?: 'default' | 'accent' | 'on-dark'
  }>(),
  { orientation: 'horizontal', tone: 'default' },
)
</script>

<template>
  <span
    class="ml-divider"
    :class="[`ml-divider--${orientation}`, `ml-divider--${tone}`]"
    :role="tone === 'accent' ? undefined : 'separator'"
    :aria-orientation="tone === 'accent' ? undefined : orientation"
    :aria-hidden="tone === 'accent' ? 'true' : undefined"
  />
</template>

<style scoped>
.ml-divider {
  display: block;
  flex: none;
  background: var(--color-border-default);
}
.ml-divider--horizontal {
  width: 100%;
  height: var(--border-width-thin);
}
.ml-divider--vertical {
  width: var(--border-width-thin);
  align-self: stretch;
  min-height: 24px;
}
.ml-divider--accent {
  background: var(--color-surface-calm);
  border-radius: var(--radius-xs);
}
.ml-divider--accent.ml-divider--horizontal {
  height: 8px;
}
.ml-divider--accent.ml-divider--vertical {
  width: 8px;
}
.ml-divider--on-dark {
  background: color-mix(in srgb, var(--color-text-on-dark-accent) 30%, transparent);
}
</style>
