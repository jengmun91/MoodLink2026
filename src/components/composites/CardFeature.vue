<script setup lang="ts">
// Figma: card-feature · node 6044:3399
// type = insight | people | platform · state = default | hover (hover is CSS)
import AppButton from '../primitives/AppButton.vue'

withDefaults(
  defineProps<{
    type?: 'insight' | 'people' | 'platform'
    title: string
    copy?: string
    href?: string
    image?: string
    imageAlt?: string
    /** insight only */
    category?: string
    /** people: link text · platform: button label */
    actionLabel?: string
  }>(),
  {
    type: 'insight',
    copy: '',
    href: '#',
    image: '',
    imageAlt: '',
    category: 'MOODLINK INSIGHT',
    actionLabel: '',
  },
)
</script>

<template>
  <!-- platform: the button is the only link -->
  <article v-if="type === 'platform'" class="ml-card-feature ml-card-feature--platform">
    <div class="ml-card-feature__media">
      <img v-if="image" :src="image" :alt="imageAlt" loading="lazy" />
    </div>
    <div class="ml-card-feature__bubble">
      <h3 class="ml-text-h2 ml-card-feature__title">{{ title }}</h3>
      <p v-if="copy" class="ml-text-body-lg ml-card-feature__copy">{{ copy }}</p>
      <div class="ml-card-feature__action">
        <AppButton :href="href">{{ actionLabel || 'Find out more' }}</AppButton>
      </div>
    </div>
  </article>

  <!-- insight / people: the whole card is one link -->
  <a v-else class="ml-card-feature" :class="`ml-card-feature--${type}`" :href="href">
    <span class="ml-card-feature__media">
      <img v-if="image" :src="image" :alt="imageAlt" loading="lazy" />
    </span>
    <span class="ml-card-feature__content">
      <span v-if="type === 'insight'" class="ml-text-label ml-card-feature__category">{{ category }}</span>
      <span class="ml-card-feature__title">{{ title }}</span>
      <span v-if="copy" class="ml-text-body ml-card-feature__copy">{{ copy }}</span>
      <span v-if="type === 'people'" class="ml-text-title-sm ml-card-feature__link">
        {{ actionLabel || 'Learn more  →' }}
      </span>
    </span>
  </a>
</template>

<style scoped>
.ml-card-feature {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  overflow: hidden;
  color: var(--color-text-primary);
  text-decoration: none;
  transition:
    box-shadow var(--motion-duration-fast) var(--motion-easing-standard),
    border-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-card-feature__media {
  display: block;
  overflow: hidden;
  background: var(--color-surface-skeleton);
}
.ml-card-feature__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ml-card-feature__copy {
  margin: 0;
  color: var(--color-text-secondary);
}

/* insight + people */
.ml-card-feature--insight,
.ml-card-feature--people {
  border: var(--border-width-default) solid var(--color-border-default);
  background: var(--color-surface-base);
}
.ml-card-feature--insight {
  border-radius: var(--radius-card);
}
.ml-card-feature--insight .ml-card-feature__media {
  aspect-ratio: 476 / 400;
  border-radius: var(--radius-lg);
}
.ml-card-feature--people {
  border-radius: var(--radius-2xl);
}
.ml-card-feature--people .ml-card-feature__media {
  aspect-ratio: 670 / 450;
  border-radius: var(--radius-xl);
}
.ml-card-feature__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  padding: var(--space-card-padding);
}
.ml-card-feature--people .ml-card-feature__content {
  padding: var(--space-card-padding-lg);
}
.ml-card-feature__category {
  color: var(--color-text-accent);
}
.ml-card-feature__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  line-height: var(--font-line-height-h3);
  letter-spacing: var(--font-letter-spacing-h3);
  font-weight: var(--font-weight-bold);
}
.ml-card-feature--people .ml-card-feature__title {
  font-weight: var(--font-weight-semibold);
}
.ml-card-feature__link {
  padding-top: var(--space-scale-20);
  transition: color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-card-feature--insight:hover,
.ml-card-feature--people:hover {
  border-color: var(--color-border-strong);
  box-shadow: 0 var(--elevation-medium-y) var(--elevation-medium-blur) var(--color-shadow-medium);
}
.ml-card-feature--people:hover .ml-card-feature__link {
  color: var(--color-text-link-hover);
}
.ml-card-feature:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 2px;
}

/* platform */
.ml-card-feature--platform .ml-card-feature__media {
  aspect-ratio: 670 / 528;
  border-radius: var(--radius-xl);
}
.ml-card-feature__bubble {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--space-stack-sm);
  padding: var(--space-scale-20) var(--space-card-padding-lg) var(--space-scale-48);
  border-radius: var(--radius-2xl);
  background: var(--color-surface-base);
  transition: box-shadow var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-card-feature--platform:hover .ml-card-feature__bubble {
  box-shadow: 0 var(--elevation-medium-y) var(--elevation-medium-blur) var(--color-shadow-medium);
}
.ml-card-feature--platform .ml-card-feature__title {
  margin: 0;
  font-size: var(--font-size-h2);
  line-height: var(--font-line-height-h2);
  letter-spacing: var(--font-letter-spacing-h2);
  font-weight: var(--font-weight-semibold);
}
.ml-card-feature__action {
  padding-top: var(--space-scale-20);
}
</style>
