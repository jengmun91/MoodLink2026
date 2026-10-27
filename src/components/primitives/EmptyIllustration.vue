<script setup lang="ts">
// Figma: empty-illustration · node 6051:5027 · name = no-results | no-content | offline
import { computed } from 'vue'
import noResults from '../../assets/illustrations/no-results.svg'
import noContent from '../../assets/illustrations/no-content.svg'
import offline from '../../assets/illustrations/offline.svg'

const props = withDefaults(
  defineProps<{ name?: 'no-results' | 'no-content' | 'offline' }>(),
  { name: 'no-content' },
)
const sources = { 'no-results': noResults, 'no-content': noContent, offline }
const src = computed(() => sources[props.name])
</script>

<template>
  <img class="ml-empty-illustration" :src="src" alt="" aria-hidden="true" width="160" height="160" />
</template>

<style scoped>
.ml-empty-illustration {
  flex: none;
}
</style>
