<script setup lang="ts">
// Figma: practitioner-card · node 6193:540 · name, job-title, hospital, grade, department, summary (text)
// avatar image (168 × 168, 3×) · badge, tags and "See more" chip are exposed nested instances.
import AppBadge from './AppBadge.vue'
import AppTag from './AppTag.vue'
import ChipButton from './ChipButton.vue'

withDefaults(
  defineProps<{
    name: string
    jobTitle?: string
    hospital?: string
    grade?: string
    department?: string
    summary?: string
    avatar?: string
    avatarAlt?: string
    verified?: boolean
    verifiedLabel?: string
    tags?: string[]
    specialisesLabel?: string
    seeMoreLabel?: string
  }>(),
  {
    jobTitle: '', hospital: '', grade: '', department: '', summary: '', avatar: '', avatarAlt: '',
    verified: true, verifiedLabel: 'Verified', tags: () => [], specialisesLabel: 'Specialises in:', seeMoreLabel: 'See more',
  },
)
defineEmits<{ seeMore: [] }>()
</script>

<template>
  <article class="ml-practitioner-card">
    <div class="ml-practitioner-card__profile">
      <span class="ml-practitioner-card__avatar"><img v-if="avatar" :src="avatar" :alt="avatarAlt" /></span>
      <div class="ml-practitioner-card__details">
        <div class="ml-practitioner-card__name-row">
          <h2 class="ml-practitioner-card__name">{{ name }}</h2>
          <AppBadge v-if="verified" :label="verifiedLabel" tone="success" />
        </div>
        <p v-if="jobTitle" class="ml-practitioner-card__job">{{ jobTitle }}</p>
        <p v-if="hospital" class="ml-practitioner-card__hospital">{{ hospital }}</p>
        <p v-if="grade" class="ml-practitioner-card__grade">{{ grade }}</p>
        <hr class="ml-practitioner-card__divider" />
        <p v-if="department" class="ml-practitioner-card__department">{{ department }}</p>
      </div>
    </div>
    <div v-if="tags.length" class="ml-practitioner-card__expertise">
      <span class="ml-practitioner-card__label">{{ specialisesLabel }}</span>
      <ul class="ml-practitioner-card__tags">
        <li v-for="t in tags" :key="t"><AppTag :label="t" /></li>
      </ul>
    </div>
    <div v-if="summary" class="ml-practitioner-card__summary-row">
      <p class="ml-practitioner-card__summary">{{ summary }}</p>
      <ChipButton :label="seeMoreLabel" @click="$emit('seeMore')" />
    </div>
  </article>
</template>

<style scoped>
.ml-practitioner-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-16);
  padding: var(--space-scale-16) var(--space-scale-12) var(--space-scale-12);
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
}
.ml-practitioner-card p {
  margin: 0;
}
.ml-practitioner-card__profile {
  display: flex;
  gap: var(--space-scale-16);
}
.ml-practitioner-card__avatar {
  flex: none;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: var(--radius-pill);
  background: var(--color-surface-skeleton);
}
.ml-practitioner-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ml-practitioner-card__details {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--space-scale-6);
  min-width: 0;
}
.ml-practitioner-card__name-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-scale-8);
}
.ml-practitioner-card__name {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  line-height: var(--font-line-height-h3);
  font-weight: var(--font-weight-semibold);
}
.ml-practitioner-card__job {
  font-size: var(--font-size-title);
  line-height: var(--font-line-height-title);
  font-weight: var(--font-weight-bold);
}
.ml-practitioner-card__hospital,
.ml-practitioner-card__summary {
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
.ml-practitioner-card__grade,
.ml-practitioner-card__department {
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-practitioner-card__department {
  color: var(--color-text-accent);
}
.ml-practitioner-card__divider {
  width: 100%;
  margin: 0;
  border: 0;
  border-top: var(--border-width-thin) solid var(--color-border-subtle);
}
.ml-practitioner-card__expertise {
  display: flex;
  gap: var(--space-scale-12);
}
.ml-practitioner-card__label {
  flex: none;
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
}
.ml-practitioner-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-scale-8);
  margin: 0;
  padding: 0;
  list-style: none;
}
.ml-practitioner-card__summary-row {
  display: flex;
  align-items: center;
  gap: var(--space-scale-12);
}
.ml-practitioner-card__summary {
  flex: 1;
}
</style>
