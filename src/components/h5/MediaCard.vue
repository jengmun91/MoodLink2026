<script setup lang="ts">
// Figma: media-card · node 6186:537 · title, meta (text) · thumbnail image · state = default | focus
// Thumbnail spec 510 × 288 (3×) — see the Figma annotation.
withDefaults(defineProps<{ title: string; meta?: string; image?: string; imageAlt?: string; href?: string }>(), {
  meta: '',
  image: '',
  imageAlt: '',
  href: '#',
})
</script>

<template>
  <a class="ml-media-card" :href="href">
    <span class="ml-media-card__thumb">
      <img v-if="image" :src="image" :alt="imageAlt" loading="lazy" />
    </span>
    <span class="ml-media-card__content">
      <span class="ml-media-card__title">{{ title }}</span>
      <span v-if="meta" class="ml-media-card__meta">{{ meta }}</span>
    </span>
  </a>
</template>

<style scoped>
.ml-media-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  min-width: 0;
  padding-bottom: var(--space-scale-12);
  overflow: hidden;
  border: var(--border-width-default) solid var(--color-border-default);
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-base);
  color: var(--color-text-primary);
  text-decoration: none;
}
.ml-media-card__thumb {
  display: block;
  aspect-ratio: 170 / 96;
  background: var(--color-surface-skeleton);
}
.ml-media-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ml-media-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-4);
  padding: 0 var(--space-scale-12);
}
.ml-media-card__title {
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-bold);
}
.ml-media-card__meta {
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-media-card:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
