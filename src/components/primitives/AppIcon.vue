<script setup lang="ts">
// Figma: icon · node 6044:2930
// name = awareness | support | empowerment | connection · size = lg (96) | md (40) | sm (24)
import { computed } from 'vue'
import awareness from '../../assets/icons/awareness.svg'
import support from '../../assets/icons/support.svg'
import empowerment from '../../assets/icons/empowerment.svg'
import connection from '../../assets/icons/connection.svg'

export type IconName = 'awareness' | 'support' | 'empowerment' | 'connection'

const props = withDefaults(
  defineProps<{ name: IconName; size?: 'lg' | 'md' | 'sm'; label?: string }>(),
  { size: 'md', label: '' },
)

const sources: Record<IconName, string> = { awareness, support, empowerment, connection }
const px = { lg: 96, md: 40, sm: 24 } as const
const src = computed(() => sources[props.name])
</script>

<template>
  <img
    class="ml-icon"
    :src="src"
    :alt="label"
    :aria-hidden="label ? undefined : 'true'"
    :width="px[size]"
    :height="px[size]"
  />
</template>

<style scoped>
.ml-icon {
  flex: none;
}
</style>
