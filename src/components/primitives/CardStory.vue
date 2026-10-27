<script setup lang="ts">
// Figma: card-story · node 6044:3131
// tone = aqua | lemon | lilac · state = default | hover (hover is CSS)
// The whole card is one link — no nested links inside.
withDefaults(
  defineProps<{
    title: string
    copy?: string
    linkLabel?: string
    href?: string
    image?: string
    imageAlt?: string
    tone?: 'aqua' | 'lemon' | 'lilac'
  }>(),
  { copy: '', linkLabel: 'Read the story  →', href: '#', image: '', imageAlt: '', tone: 'aqua' },
)
</script>

<template>
  <a class="ml-card-story" :class="`ml-card-story--${tone}`" :href="href">
    <span class="ml-card-story__media">
      <img v-if="image" :src="image" :alt="imageAlt" loading="lazy" />
    </span>
    <span class="ml-card-story__content">
      <span class="ml-card-story__title">{{ title }}</span>
      <span v-if="copy" class="ml-card-story__copy">{{ copy }}</span>
      <span class="ml-card-story__link">{{ linkLabel }}</span>
    </span>
  </a>
</template>

<style scoped>
.ml-card-story {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  overflow: hidden;
  border: var(--border-width-default) solid var(--color-border-default);
  border-radius: var(--radius-card);
  color: var(--color-text-primary);
  text-decoration: none;
  transition:
    box-shadow var(--motion-duration-fast) var(--motion-easing-standard),
    border-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-card-story--aqua {
  background: var(--color-surface-fresh-tint);
}
.ml-card-story--lemon {
  background: var(--color-surface-optimistic-tint);
}
.ml-card-story--lilac {
  background: var(--color-surface-calm-tint);
}

.ml-card-story__media {
  display: block;
  aspect-ratio: 430 / 240;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-surface-skeleton);
}
.ml-card-story__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ml-card-story__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  padding: var(--space-card-padding);
}
.ml-card-story__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  line-height: var(--font-line-height-h3);
  letter-spacing: var(--font-letter-spacing-h3);
  font-weight: var(--font-weight-bold);
}
.ml-card-story__copy {
  color: var(--color-text-secondary);
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
}
.ml-card-story__link {
  padding-top: var(--space-stack-sm);
  font-size: var(--font-size-title-sm);
  line-height: var(--font-line-height-title-sm);
  font-weight: var(--font-weight-semibold);
  transition: color var(--motion-duration-fast) var(--motion-easing-standard);
}

.ml-card-story:hover {
  border-color: var(--color-border-strong);
  box-shadow: 0 var(--elevation-medium-y) var(--elevation-medium-blur) var(--color-shadow-medium);
}
.ml-card-story:hover .ml-card-story__link {
  color: var(--color-text-link-hover);
}
.ml-card-story:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 2px;
}
</style>
