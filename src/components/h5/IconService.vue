<script setup lang="ts">
// Figma: icon-service · node 6186:1799 · 24px outline service icons (local copies of the icon library).
import { computed } from 'vue'

const raw = import.meta.glob('../../assets/icons/service/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
export type IconServiceName = 'therapy' | 'awareness' | 'support' | 'mind' | 'resilience' | 'inspiration' | 'meditation' | 'wellness'

const props = withDefaults(defineProps<{ name: IconServiceName; size?: number; label?: string }>(), { size: 24, label: '' })
const svg = computed(() =>
  (raw[`../../assets/icons/service/${props.name}.svg`] ?? '').replace(/width="24" height="24"/, `width="${props.size}" height="${props.size}"`),
)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- trusted local SVG from Figma -->
  <span class="ml-icon-service" :role="label ? 'img' : undefined" :aria-label="label || undefined" :aria-hidden="label ? undefined : 'true'" v-html="svg" />
</template>

<style scoped>
.ml-icon-service {
  display: inline-flex;
  flex: none;
}
.ml-icon-service :deep(svg) {
  display: block;
}
</style>
