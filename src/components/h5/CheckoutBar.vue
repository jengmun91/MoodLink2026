<script setup lang="ts">
// Figma: checkout-bar · node 6196:697 · label, price (text) · button (exposed). Price in RM, format RM1.00.
import AppButton from '../primitives/AppButton.vue'

withDefaults(defineProps<{ label?: string; price: string; buttonLabel?: string; loading?: boolean; disabled?: boolean }>(), {
  label: 'Total to pay:',
  buttonLabel: 'Submit',
  loading: false,
  disabled: false,
})
defineEmits<{ submit: [] }>()
</script>

<template>
  <div class="ml-checkout-bar">
    <p class="ml-checkout-bar__total">
      <span class="ml-checkout-bar__label">{{ label }}</span>
      <strong class="ml-checkout-bar__price">{{ price }}</strong>
    </p>
    <AppButton size="sm" type="submit" :label="buttonLabel" :loading="loading" :disabled="disabled" @click="$emit('submit')" />
  </div>
</template>

<style scoped>
.ml-checkout-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-12);
  padding: var(--space-scale-16) var(--space-scale-12);
  border-radius: var(--radius-sm);
  background: var(--color-surface-base);
  font-family: var(--font-family-body);
}
.ml-checkout-bar__total {
  display: flex;
  align-items: baseline;
  gap: var(--space-scale-4);
  margin: 0;
}
.ml-checkout-bar__label {
  color: var(--color-text-accent);
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-medium);
}
.ml-checkout-bar__price {
  color: var(--color-text-primary);
  font-size: var(--font-size-body);
  line-height: var(--font-line-height-body);
  font-weight: var(--font-weight-bold);
}
</style>
