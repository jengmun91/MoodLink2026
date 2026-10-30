<script setup lang="ts">
// Figma: pattern-h5 · node 6313:2768 (02 · Components › 9. H5 states) · state = loading | empty | error | offline
// Screens: pattern-h5-loading 6313:2771 · -empty 6313:2850 · -error 6313:2898 · -offline 6313:2944 (04 · Mobile - Dev Ready Screen)
// Page-state content for the H5 app. Place it inside the app shell (safe areas + app-top-bar / logo + bottom-tab-bar).
// Timing: show nothing for the first 300ms (motion-delay-loading), then the skeleton; after 10s add "Still loading…" + Try again.
import { computed } from 'vue'
import AppSkeleton from '../primitives/AppSkeleton.vue'
import EmptyIllustration from '../primitives/EmptyIllustration.vue'
import AppButton from '../primitives/AppButton.vue'
import AppAlert from '../primitives/AppAlert.vue'

const props = withDefaults(
  defineProps<{
    state: 'loading' | 'empty' | 'error' | 'offline'
    title?: string
    body?: string
    primaryLabel?: string
    secondaryLabel?: string
    slow?: boolean
  }>(),
  { title: '', body: '', primaryLabel: '', secondaryLabel: '', slow: false },
)
defineEmits<{ primary: []; secondary: [] }>()

const copy = {
  empty: { title: 'No consultations available', body: 'Our doctors are fully booked right now. Please check again later, or choose another service.', primary: 'Back to home', secondary: 'Browse wellbeing resources', art: 'no-content' },
  error: { title: 'Something went wrong', body: "We couldn't load this page. Please try again in a moment.", primary: 'Try again', secondary: 'Back to home', art: 'no-results' },
  offline: { title: 'No internet connection', body: 'Check your Wi-Fi or mobile data, then try again. Saved articles and audio are still available.', primary: 'Try again', secondary: '', art: 'offline' },
} as const
const c = computed(() => (props.state === 'loading' ? null : copy[props.state]))
</script>

<template>
  <div v-if="state === 'loading'" class="ml-pattern-h5 ml-pattern-h5--loading" aria-busy="true" aria-live="polite">
    <span class="ml-visually-hidden">Loading…</span>
    <AppSkeleton shape="image" class="ml-pattern-h5__hero" />
    <div class="ml-pattern-h5__grid" aria-hidden="true">
      <span v-for="i in 8" :key="i" class="ml-pattern-h5__cell"><AppSkeleton shape="circle" /><AppSkeleton shape="text" width="64px" /></span>
    </div>
    <div class="ml-pattern-h5__row" aria-hidden="true"><AppSkeleton shape="image" class="ml-pattern-h5__tile" /><AppSkeleton shape="image" class="ml-pattern-h5__tile" /></div>
    <AppSkeleton shape="heading" width="160px" />
    <div class="ml-pattern-h5__row" aria-hidden="true"><AppSkeleton shape="image" class="ml-pattern-h5__media" /><AppSkeleton shape="image" class="ml-pattern-h5__media" /></div>
    <p v-if="slow" class="ml-pattern-h5__slow">Still loading… <AppButton variant="secondary" size="sm" label="Try again" @click="$emit('primary')" /></p>
  </div>

  <div v-else class="ml-pattern-h5" :class="`ml-pattern-h5--${state}`">
    <AppAlert v-if="state === 'offline'" type="warning" variant="banner" title="You're offline" message="Showing saved content. We'll refresh when you're back online." />
    <div class="ml-pattern-h5__message" :role="state === 'error' ? 'alert' : undefined">
      <EmptyIllustration :name="c!.art" />
      <h2 class="ml-pattern-h5__title">{{ title || c!.title }}</h2>
      <p class="ml-pattern-h5__body">{{ body || c!.body }}</p>
      <div class="ml-pattern-h5__actions">
        <AppButton :label="primaryLabel || c!.primary" @click="$emit('primary')" />
        <AppButton v-if="secondaryLabel || c!.secondary" variant="secondary" :label="secondaryLabel || c!.secondary" @click="$emit('secondary')" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ml-pattern-h5 {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--space-stack-md);
}
.ml-pattern-h5__hero {
  width: 100%;
  height: 157px;
}
.ml-pattern-h5__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-stack-md) var(--space-stack-xs);
}
.ml-pattern-h5__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-stack-xs);
}
.ml-pattern-h5__row {
  display: flex;
  gap: var(--space-stack-sm);
}
.ml-pattern-h5__tile,
.ml-pattern-h5__media {
  flex: 1;
}
.ml-pattern-h5__tile {
  height: 64px;
}
.ml-pattern-h5__media {
  height: 96px;
}
.ml-pattern-h5__slow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-stack-sm);
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-body-sm);
}
.ml-pattern-h5__message {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-stack-md);
  padding: var(--space-stack-xl) 0;
  text-align: center;
}
.ml-pattern-h5__title {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
}
.ml-pattern-h5__body {
  margin: 0;
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
}
.ml-pattern-h5__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  width: 100%;
}
.ml-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
