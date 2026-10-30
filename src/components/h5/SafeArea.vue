<script setup lang="ts">
// Figma: safe-area · node 6171:475 · edge = top | bottom
// The Figma layer is a placeholder; in code this is an empty spacer sized by the device inset.
withDefaults(defineProps<{ edge?: 'top' | 'bottom' }>(), { edge: 'top' })
</script>

<template>
  <div class="ml-safe-area" :class="`ml-safe-area--${edge}`" aria-hidden="true" />
</template>

<style scoped>
.ml-safe-area--top {
  height: env(safe-area-inset-top, 0px);
}
.ml-safe-area--bottom {
  height: env(safe-area-inset-bottom, 0px);
}
</style>
