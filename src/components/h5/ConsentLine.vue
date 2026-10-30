<script setup lang="ts">
// Figma: consent-line · node 6195:705 · intro, link, error (text) · show-error (boolean) · checkbox (exposed)
// Unticked by default. Show the error when the user submits without ticking. Store consent with timestamp + agreement version.
import { useId } from 'vue'
import AppCheckbox from './AppCheckbox.vue'

const checked = defineModel<boolean>({ default: false })
withDefaults(
  defineProps<{ intro?: string; link?: string; href?: string; error?: string; showError?: boolean; disabled?: boolean }>(),
  {
    intro: 'I have read and agree to',
    link: 'the Service Agreement',
    href: '#',
    error: 'Tick the box to agree to the Service Agreement.',
    showError: false,
    disabled: false,
  },
)
const uid = useId()
</script>

<template>
  <div class="ml-consent-line">
    <div class="ml-consent-line__row">
      <AppCheckbox
        :id="`consent-${uid}`"
        v-model="checked"
        :error="showError"
        :disabled="disabled"
        :describedby="showError ? `consent-error-${uid}` : undefined"
      />
      <label class="ml-consent-line__text" :for="`consent-${uid}`">
        {{ intro }} <a class="ml-consent-line__link" :href="href" target="_blank" rel="noopener">{{ link }}</a>
      </label>
    </div>
    <p v-if="showError" :id="`consent-error-${uid}`" class="ml-consent-line__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.ml-consent-line {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-4);
}
.ml-consent-line__row {
  display: flex;
  align-items: center;
  gap: var(--space-scale-4);
}
.ml-consent-line__text {
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
}
.ml-consent-line__link {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-bold);
  text-decoration: underline;
}
.ml-consent-line__link:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
.ml-consent-line__error {
  margin: 0;
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
  font-weight: var(--font-weight-bold);
}
</style>
