<script setup lang="ts">
// Figma: audio-card · node 6186:576 · title, meta (text) · state = default | focus. Tapping opens the audio player.
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ title: string; meta?: string; href?: string }>(), { meta: '', href: '#' })
</script>

<template>
  <a class="ml-audio-card" :href="href">
    <span class="ml-audio-card__icon"><IconUi name="music" :size="16" /></span>
    <span class="ml-audio-card__content">
      <span class="ml-audio-card__title">{{ title }}</span>
      <span v-if="meta" class="ml-audio-card__meta">{{ meta }}</span>
    </span>
  </a>
</template>

<style scoped>
.ml-audio-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-scale-8);
  min-width: 0;
  padding: var(--space-scale-12) var(--space-scale-10);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background: var(--color-surface-base);
  color: var(--color-text-primary);
  text-decoration: none;
}
.ml-audio-card__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--color-surface-inverse);
}
.ml-audio-card__icon :deep(.ml-icon-ui) {
  color: var(--color-icon-inverse);
}
.ml-audio-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-4);
  min-width: 0;
}
.ml-audio-card__title {
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-bold);
}
.ml-audio-card__meta {
  color: var(--color-text-accent);
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-audio-card:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
