<script setup lang="ts">
// Figma: card-heading · node 6195:605 · heading, action (text) · show-action (boolean)
withDefaults(defineProps<{ heading: string; action?: string; showAction?: boolean; as?: 'h2' | 'h3' }>(), {
  action: '',
  showAction: true,
  as: 'h2',
})
defineEmits<{ action: [] }>()
</script>

<template>
  <div class="ml-card-heading">
    <component :is="as" class="ml-card-heading__heading">{{ heading }}</component>
    <button v-if="showAction && action" type="button" class="ml-card-heading__action" @click="$emit('action')">{{ action }}</button>
  </div>
</template>

<style scoped>
.ml-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-8);
}
.ml-card-heading__heading {
  flex: 1;
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  line-height: var(--font-line-height-h4);
  font-weight: var(--font-weight-bold);
}
.ml-card-heading__action {
  min-height: 44px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}
.ml-card-heading__action:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
</style>
