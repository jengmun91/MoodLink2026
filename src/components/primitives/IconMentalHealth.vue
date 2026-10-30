<script setup lang="ts">
// Figma: Mental health icon library · Variables (Design Tokens) › 6.Icons (node 6042:2638)
// Figma names: "Mental Health / <Style> / <Concept>" (25 concepts × 5 styles).
// SVGs come from `npm run figma:icons` → src/assets/icons/mental-health/<variant>/<name>.svg
import { computed } from 'vue'

export type MentalHealthIconName =
  | 'acceptance' | 'anxiety' | 'awareness' | 'balance' | 'connection'
  | 'coping' | 'courage' | 'depression' | 'emotions' | 'empowerment'
  | 'gratitude' | 'healing' | 'hope' | 'inspiration' | 'meditation'
  | 'mind' | 'recovery' | 'renewal' | 'resilience' | 'self-care'
  | 'strength' | 'stress' | 'support' | 'therapy' | 'wellness'
export type MentalHealthIconVariant = 'flat' | 'solid' | 'outline' | 'outline-color' | 'outline-color-dark'

const props = withDefaults(
  defineProps<{
    name: MentalHealthIconName
    /** Figma style. `outline-color-dark` is for navy / dark surfaces. */
    variant?: MentalHealthIconVariant
    /** Pixel size (square). Use the icon-size tokens' values: 24 · 40 · 96. */
    size?: number
    /** Accessible label. Leave empty for decorative icons (aria-hidden). */
    label?: string
  }>(),
  { variant: 'outline-color', size: 40, label: '' },
)

const files = import.meta.glob('../../assets/icons/mental-health/*/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const src = computed(
  () => files[`../../assets/icons/mental-health/${props.variant}/${props.name}.svg`] ?? '',
)
</script>

<template>
  <img
    v-if="src"
    class="ml-icon-mh"
    :src="src"
    :width="size"
    :height="size"
    :alt="label"
    :aria-hidden="label ? undefined : 'true'"
    loading="lazy"
  />
  <span
    v-else
    class="ml-icon-mh ml-icon-mh--missing"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :title="`Missing SVG: ${variant}/${name} — run npm run figma:icons`"
    aria-hidden="true"
  />
</template>

<style scoped>
.ml-icon-mh {
  display: inline-block;
  flex: none;
  object-fit: contain;
}
.ml-icon-mh--missing {
  border: var(--border-width-thin) dashed var(--color-border-default);
  border-radius: var(--radius-xs);
}
</style>
