<script setup lang="ts">
// Figma: section-title · node 6185:601 · title (text). Decorative accent lines; the title is a heading.
withDefaults(defineProps<{ title: string; as?: 'h2' | 'h3' }>(), { as: 'h2' })
</script>

<template>
  <div class="ml-section-title">
    <span class="ml-section-title__accent" aria-hidden="true" />
    <component :is="as" class="ml-section-title__text">{{ title }}</component>
    <span class="ml-section-title__accent" aria-hidden="true" />
  </div>
</template>

<style scoped>
.ml-section-title {
  display: flex;
  align-items: center;
  gap: var(--space-scale-8);
}
.ml-section-title__accent {
  flex: 1;
  height: 2px;
  background: var(--color-brand-expressive);
}
.ml-section-title__text {
  margin: 0;
  color: var(--color-text-secondary);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
  text-align: center;
}
</style>
