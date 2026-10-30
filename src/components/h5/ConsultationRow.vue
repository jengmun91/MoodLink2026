<script setup lang="ts">
// Figma: consultation-row · node 6193:643 · title, price (text) · icon (swap) · button (exposed)
// tone = teal | violet | orange · divider = yes | no (last row: no). Prices in RM, format RM1.00.
import IconUi, { type IconUiName } from './IconUi.vue'
import AppButton from '../primitives/AppButton.vue'

withDefaults(
  defineProps<{ title: string; price?: string; icon?: IconUiName; tone?: 'teal' | 'violet' | 'orange'; divider?: boolean; buttonLabel?: string }>(),
  { price: '', icon: 'message-circle', tone: 'teal', divider: true, buttonLabel: 'Consult' },
)
defineEmits<{ action: [] }>()
</script>

<template>
  <div class="ml-consultation-row" :class="{ 'has-divider': divider }">
    <div class="ml-consultation-row__header">
      <span class="ml-consultation-row__badge" :class="`ml-consultation-row__badge--${tone}`"><IconUi :name="icon" :size="20" /></span>
      <span class="ml-consultation-row__title">{{ title }}</span>
      <AppButton size="sm" :label="buttonLabel" @click="$emit('action')" />
    </div>
    <p v-if="price" class="ml-consultation-row__price">{{ price }}</p>
  </div>
</template>

<style scoped>
.ml-consultation-row {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-10);
  padding: var(--space-scale-16) 0;
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
}
.ml-consultation-row.has-divider {
  border-bottom: var(--border-width-thin) solid var(--color-border-default);
}
.ml-consultation-row__header {
  display: flex;
  align-items: center;
  gap: var(--space-scale-10);
}
.ml-consultation-row__badge {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-pill);
}
.ml-consultation-row__badge :deep(.ml-icon-ui) {
  color: var(--color-icon-inverse);
}
.ml-consultation-row__badge--teal {
  background: var(--color-surface-accent);
}
.ml-consultation-row__badge--violet {
  background: var(--color-surface-expressive);
}
.ml-consultation-row__badge--orange {
  background: var(--color-surface-emphasis);
}
.ml-consultation-row__title {
  flex: 1;
  min-width: 0;
  font-size: var(--font-size-label);
  line-height: var(--font-line-height-label);
  font-weight: var(--font-weight-bold);
}
.ml-consultation-row__price {
  margin: 0;
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
</style>
