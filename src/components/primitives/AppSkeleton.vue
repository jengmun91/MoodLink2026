<script setup lang="ts">
// Figma: skeleton · node 6051:4919 · shape = text | heading | image | button | circle
// Set aria-busy="true" on the container that is loading.
withDefaults(
  defineProps<{ shape?: 'text' | 'heading' | 'image' | 'button' | 'circle'; width?: string }>(),
  { shape: 'text', width: '' },
)
</script>

<template>
  <span
    class="ml-skeleton"
    :class="`ml-skeleton--${shape}`"
    :style="width ? { width } : undefined"
    aria-hidden="true"
  />
</template>

<style scoped>
.ml-skeleton {
  display: block;
  background: linear-gradient(
    90deg,
    var(--color-surface-skeleton) 0%,
    var(--color-surface-skeleton-highlight) 50%,
    var(--color-surface-skeleton) 100%
  );
  background-size: 200% 100%;
  animation: ml-shimmer var(--motion-duration-shimmer) linear infinite;
}
.ml-skeleton--text {
  width: 240px;
  height: 14px;
  border-radius: var(--radius-xs);
}
.ml-skeleton--heading {
  width: 320px;
  height: 28px;
  border-radius: var(--radius-xs);
}
.ml-skeleton--image {
  width: 100%;
  aspect-ratio: 430 / 240;
  border-radius: var(--radius-lg);
}
.ml-skeleton--button {
  width: 200px;
  height: var(--button-height);
  border-radius: var(--radius-pill);
}
.ml-skeleton--circle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-pill);
}

@keyframes ml-shimmer {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ml-skeleton {
    animation: none !important;
    background: var(--color-surface-skeleton);
  }
}
</style>
