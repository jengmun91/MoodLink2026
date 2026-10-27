<script setup lang="ts">
// Figma: logo · node 6044:2803 · theme = default | on-dark · size = lg | md | sm
import { computed } from 'vue'
import logoDefault from '../../assets/logo/logo-default.svg'
import logoOnDark from '../../assets/logo/logo-on-dark.svg'

const props = withDefaults(
  defineProps<{ theme?: 'default' | 'on-dark'; size?: 'lg' | 'md' | 'sm'; alt?: string }>(),
  { theme: 'default', size: 'md', alt: 'Moodlink' },
)

const widths = { lg: 592, md: 240, sm: 160 } as const
const src = computed(() => (props.theme === 'on-dark' ? logoOnDark : logoDefault))
</script>

<template>
  <img
    class="ml-logo"
    :src="src"
    :alt="alt"
    :style="{ width: `${widths[size]}px` }"
    decoding="async"
  />
</template>

<style scoped>
.ml-logo {
  height: auto;
  max-width: 100%;
}
</style>
