<script setup lang="ts">
// Figma: stepper · node 6195:584 · step-1, step-2, step-3 (text) · current = 1 | 2 | 3. Not interactive.
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ steps?: [string, string, string]; current?: 1 | 2 | 3 }>(), {
  steps: () => ['Submit details', 'Waiting for doctor', 'Consultation'],
  current: 1,
})
</script>

<template>
  <ol class="ml-stepper" aria-label="Progress">
    <template v-for="(s, i) in steps" :key="s">
      <li class="ml-stepper__step" :class="{ 'is-current': i + 1 === current }" :aria-current="i + 1 === current ? 'step' : undefined">{{ s }}</li>
      <li v-if="i < steps.length - 1" class="ml-stepper__sep" aria-hidden="true"><IconUi name="chevron-right" :size="16" /></li>
    </template>
  </ol>
</template>

<style scoped>
.ml-stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-4);
  margin: 0;
  padding: var(--space-scale-10) var(--space-page-margin);
  list-style: none;
  background: var(--color-surface-base);
}
.ml-stepper__step {
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-regular);
}
.ml-stepper__step.is-current {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-bold);
}
.ml-stepper__sep {
  display: inline-flex;
}
</style>
