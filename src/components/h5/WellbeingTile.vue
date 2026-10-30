<script setup lang="ts">
// Figma: wellbeing-tile · node 6185:580 · title, subtitle (text) · tone = aqua | lemon · state = default | focus
withDefaults(defineProps<{ title: string; subtitle?: string; tone?: 'aqua' | 'lemon'; href?: string }>(), {
  subtitle: '',
  tone: 'aqua',
  href: '#',
})
</script>

<template>
  <a class="ml-wellbeing-tile" :class="`ml-wellbeing-tile--${tone}`" :href="href">
    <span class="ml-wellbeing-tile__title">{{ title }}</span>
    <span v-if="subtitle" class="ml-wellbeing-tile__subtitle">{{ subtitle }}</span>
  </a>
</template>

<style scoped>
.ml-wellbeing-tile {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: var(--space-scale-10) var(--space-scale-8) var(--space-scale-12);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  text-decoration: none;
}
.ml-wellbeing-tile--aqua {
  background: var(--color-surface-fresh);
}
.ml-wellbeing-tile--lemon {
  background: var(--color-surface-optimistic);
}
.ml-wellbeing-tile__title {
  font-family: var(--font-family-body);
  font-size: var(--font-size-title-sm);
  line-height: var(--font-line-height-title-sm);
  font-weight: var(--font-weight-bold);
}
.ml-wellbeing-tile__subtitle {
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-wellbeing-tile:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
