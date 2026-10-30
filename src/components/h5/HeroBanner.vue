<script setup lang="ts">
// Figma: hero-banner · node 6186:597 · tagline, title, heading (text) · image (per campaign)
// Image spec 813 × 414 (3×). The image is decorative behind the copy; give it alt="" unless it carries meaning.
withDefaults(
  defineProps<{ tagline?: string; title?: string; heading: string; image?: string; imageAlt?: string; href?: string; slides?: number; current?: number }>(),
  { tagline: '', title: '', image: '', imageAlt: '', href: '', slides: 1, current: 1 },
)
</script>

<template>
  <component :is="href ? 'a' : 'div'" class="ml-hero-banner" :href="href || undefined">
    <img v-if="image" class="ml-hero-banner__image" :src="image" :alt="imageAlt" />
    <span class="ml-hero-banner__copy">
      <span v-if="tagline" class="ml-hero-banner__tagline">{{ tagline }}</span>
      <span v-if="title" class="ml-hero-banner__title">{{ title }}</span>
    </span>
    <span class="ml-hero-banner__heading">{{ heading }}</span>
    <span v-if="slides > 1" class="ml-hero-banner__dots" aria-hidden="true">
      <span v-for="i in slides" :key="i" class="ml-hero-banner__dot" :class="{ 'is-current': i === current }" />
    </span>
  </component>
</template>

<style scoped>
.ml-hero-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-stack-xs);
  min-height: 157px;
  padding: var(--space-scale-12) var(--space-scale-16) var(--space-scale-16);
  overflow: hidden;
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-calm);
  color: var(--color-text-primary);
  text-decoration: none;
}
.ml-hero-banner__image {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 76%;
  height: 88%;
  object-fit: cover;
  object-position: right bottom;
}
.ml-hero-banner__copy,
.ml-hero-banner__heading,
.ml-hero-banner__dots {
  position: relative;
}
.ml-hero-banner__copy {
  display: flex;
  flex-direction: column;
  max-width: 60%;
}
.ml-hero-banner__tagline {
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
.ml-hero-banner__title {
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-bold);
}
.ml-hero-banner__heading {
  max-width: 45%;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
}
.ml-hero-banner__dots {
  display: flex;
  gap: var(--space-scale-4);
}
.ml-hero-banner__dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  background: var(--color-surface-base);
  opacity: 0.5;
}
.ml-hero-banner__dot.is-current {
  opacity: 1;
}
a.ml-hero-banner:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: calc(var(--border-width-focus) * -1);
}
</style>
