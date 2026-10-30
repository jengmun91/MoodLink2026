<script setup lang="ts">
// Figma: patient-card · node 6196:634 · name, details, phone (text) · button (exposed). Phone is always masked.
import AppButton from '../primitives/AppButton.vue'

withDefaults(defineProps<{ name: string; details?: string; phone?: string; buttonLabel?: string }>(), {
  details: '',
  phone: '',
  buttonLabel: 'Details',
})
defineEmits<{ details: [] }>()
</script>

<template>
  <div class="ml-patient-card">
    <div class="ml-patient-card__info">
      <p class="ml-patient-card__name">{{ name }}</p>
      <p v-if="details">{{ details }}</p>
      <p v-if="phone">{{ phone }}</p>
    </div>
    <AppButton size="sm" :label="buttonLabel" @click="$emit('details')" />
  </div>
</template>

<style scoped>
.ml-patient-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-12);
  padding: var(--space-scale-12) var(--space-scale-16);
  border: var(--border-width-thin) solid var(--color-border-subtle);
  border-radius: var(--radius-card-sm);
  background: var(--color-surface-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
.ml-patient-card__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-6);
  min-width: 0;
}
.ml-patient-card p {
  margin: 0;
}
.ml-patient-card__name {
  font-size: var(--font-size-title-sm);
  line-height: var(--font-line-height-title-sm);
  font-weight: var(--font-weight-bold);
}
</style>
