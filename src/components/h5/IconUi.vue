<script setup lang="ts">
// Figma: icon-ui · node 6170:446 · 24px line icons, 2px round stroke (Lucide style).
// Colour follows `currentColor` (default color/icon/default). Decorative unless `label` is set.
import { computed } from 'vue'

const raw = import.meta.glob('../../assets/icons/ui/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
export type IconUiName =
  | 'home' | 'care' | 'messages' | 'me' | 'chevron-left' | 'chevron-right' | 'music'
  | 'pill' | 'message-circle' | 'phone' | 'video' | 'stethoscope' | 'asterisk' | 'badge-check'

const props = withDefaults(defineProps<{ name: IconUiName; size?: number; label?: string }>(), { size: 24, label: '' })
const svg = computed(() =>
  (raw[`../../assets/icons/ui/${props.name}.svg`] ?? '').replace(/width="24" height="24"/, `width="${props.size}" height="${props.size}"`),
)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- trusted local SVG from Figma -->
  <span class="ml-icon-ui" :role="label ? 'img' : undefined" :aria-label="label || undefined" :aria-hidden="label ? undefined : 'true'" v-html="svg" />
</template>

<style scoped>
.ml-icon-ui {
  display: inline-flex;
  flex: none;
  color: var(--color-icon-default);
}
.ml-icon-ui :deep(svg) {
  display: block;
}
</style>
