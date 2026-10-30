<script setup lang="ts">
// Figma: detail-row · node 6195:657 · key, value (text). Figma `key` is the `term` prop (`key` is reserved in Vue). Use inside a <dl> (order-summary does this).
defineProps<{ term: string; value: string }>()
</script>

<template>
  <div class="ml-detail-row">
    <dt class="ml-detail-row__key">{{ term }}</dt>
    <dd class="ml-detail-row__value">{{ value }}</dd>
  </div>
</template>

<style scoped>
.ml-detail-row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-scale-8);
  font-family: var(--font-family-body);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
}
.ml-detail-row__key {
  color: var(--color-text-accent);
}
.ml-detail-row__value {
  margin: 0;
  color: var(--color-text-primary);
  text-align: right;
}
</style>
