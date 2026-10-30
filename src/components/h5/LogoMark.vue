<script setup lang="ts">
// Figma: logo-mark · node 6313:3021 (01 · Foundations › 8. App assets) · theme = default | on-dark
// Symbol only. Use where the full wordmark (AppLogo) does not fit: avatars, app chrome, favicons.
import markDefault from '../../assets/logo/mark-default.svg'
import markOnDark from '../../assets/logo/mark-on-dark.svg'

withDefaults(defineProps<{ theme?: 'default' | 'on-dark'; size?: number; alt?: string }>(), {
  theme: 'default',
  size: 36,
  alt: 'Moodlink',
})
</script>

<template>
  <img class="ml-logo-mark" :src="theme === 'on-dark' ? markOnDark : markDefault" :alt="alt" :width="size" :height="size" />
</template>

<style scoped>
.ml-logo-mark {
  display: block;
  flex: none;
  object-fit: contain;
}
</style>
