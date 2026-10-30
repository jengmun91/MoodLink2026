<script setup lang="ts">
// Figma: section-header · node 6185:625 · label, link (text) · show-link (boolean)
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ label: string; link?: string; href?: string; showLink?: boolean }>(), {
  link: 'More',
  href: '#',
  showLink: true,
})
</script>

<template>
  <div class="ml-section-header">
    <span class="ml-section-header__label">{{ label }}</span>
    <a v-if="showLink" class="ml-section-header__link" :href="href">
      {{ link }}<IconUi name="chevron-right" />
    </a>
  </div>
</template>

<style scoped>
.ml-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-8);
}
.ml-section-header__label,
.ml-section-header__link {
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
}
.ml-section-header__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-scale-4);
  min-height: 44px;
  text-decoration: none;
}
.ml-section-header__link:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  border-radius: var(--radius-xs);
}
</style>
