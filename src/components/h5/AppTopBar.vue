<script setup lang="ts">
// Figma: app-top-bar · node 6172:596 · title (text) · back = yes | no
// The title is the page <h1>. Back button: 44 × 44 target with an accessible name.
import IconUi from './IconUi.vue'

withDefaults(defineProps<{ title: string; back?: boolean; backLabel?: string }>(), { back: true, backLabel: 'Back' })
defineEmits<{ back: [] }>()
</script>

<template>
  <header class="ml-app-top-bar">
    <button v-if="back" type="button" class="ml-app-top-bar__back" :aria-label="backLabel" @click="$emit('back')">
      <IconUi name="chevron-left" />
    </button>
    <span v-else class="ml-app-top-bar__spacer" aria-hidden="true" />
    <h1 class="ml-app-top-bar__title">{{ title }}</h1>
    <span class="ml-app-top-bar__spacer" aria-hidden="true"><slot name="trailing" /></span>
  </header>
</template>

<style scoped>
.ml-app-top-bar {
  display: flex;
  align-items: center;
  padding: var(--space-scale-8);
  background: var(--color-surface-base);
}
.ml-app-top-bar__back,
.ml-app-top-bar__spacer {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}
.ml-app-top-bar__back {
  padding: 0;
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  cursor: pointer;
}
.ml-app-top-bar__back:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
.ml-app-top-bar__title {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--color-text-secondary);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
  text-align: center;
}
</style>
