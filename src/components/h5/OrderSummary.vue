<script setup lang="ts">
// Figma: order-summary · node 6196:661 · title, price, validity (text) · detail-row ×3 (exposed). Prices RM1.00.
import DetailRow from './DetailRow.vue'

withDefaults(defineProps<{ title: string; price: string; validity?: string; details?: { term: string; value: string }[] }>(), {
  validity: '',
  details: () => [],
})
</script>

<template>
  <div class="ml-order-summary">
    <div class="ml-order-summary__header">
      <span>{{ title }}</span>
      <strong>{{ price }}</strong>
    </div>
    <p v-if="validity" class="ml-order-summary__validity">{{ validity }}</p>
    <hr class="ml-order-summary__divider" />
    <dl class="ml-order-summary__list">
      <DetailRow v-for="d in details" :key="d.term" :term="d.term" :value="d.value" />
    </dl>
  </div>
</template>

<style scoped>
.ml-order-summary {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  padding: var(--space-scale-16);
  border: var(--border-width-thin) solid var(--color-border-subtle);
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
}
.ml-order-summary__header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-scale-8);
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
}
.ml-order-summary__header strong {
  font-weight: var(--font-weight-bold);
}
.ml-order-summary__validity {
  margin: 0;
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-order-summary__divider {
  width: 100%;
  margin: 0;
  border: 0;
  border-top: var(--border-width-thin) solid var(--color-border-subtle);
}
.ml-order-summary__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-8);
  margin: 0;
}
</style>
