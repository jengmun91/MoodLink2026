<script setup lang="ts">
// Figma: notice-block · node 6195:680 · heading, action, body (text) · show-action (boolean). Sits on the page background.
withDefaults(defineProps<{ heading: string; action?: string; showAction?: boolean; body?: string }>(), {
  action: '',
  showAction: true,
  body: '',
})
defineEmits<{ action: [] }>()
</script>

<template>
  <section class="ml-notice-block">
    <div class="ml-notice-block__head">
      <h2 class="ml-notice-block__heading">{{ heading }}</h2>
      <button v-if="showAction && action" type="button" class="ml-notice-block__action" @click="$emit('action')">{{ action }}</button>
    </div>
    <div class="ml-notice-block__body"><slot>{{ body }}</slot></div>
  </section>
</template>

<style scoped>
.ml-notice-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  padding: var(--space-scale-16) var(--space-scale-12);
  color: var(--color-text-secondary);
}
.ml-notice-block__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-8);
}
.ml-notice-block__heading {
  margin: 0;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
}
.ml-notice-block__action {
  min-height: 44px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}
.ml-notice-block__action:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
.ml-notice-block__body {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
  white-space: pre-line;
}
</style>
