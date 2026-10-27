<script setup lang="ts">
// Figma: toast · node 6051:5005 · type = success | error | info
// Auto-dismisses after motion/duration/toast (5s); pauses while hovered.
import { onBeforeUnmount, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{ type?: 'success' | 'error' | 'info'; message: string; duration?: number }>(),
  { type: 'success', duration: 5000 },
)
const emit = defineEmits<{ dismiss: [] }>()
const glyph = { success: '✓', error: '×', info: 'i' } as const

let timer: ReturnType<typeof setTimeout> | undefined
const start = () => {
  if (props.duration > 0) timer = setTimeout(() => emit('dismiss'), props.duration)
}
const stop = () => clearTimeout(timer)
onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="ml-toast"
    :class="`ml-toast--${type}`"
    role="status"
    aria-live="polite"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <span class="ml-toast__icon" aria-hidden="true">{{ glyph[type] }}</span>
    <span class="ml-toast__message">{{ message }}</span>
    <button type="button" class="ml-toast__close" aria-label="Dismiss" @click="$emit('dismiss')">
      ×
    </button>
  </div>
</template>

<style scoped>
.ml-toast {
  --ml-toast-accent: var(--color-status-success);
  display: flex;
  align-items: center;
  gap: var(--space-scale-12);
  min-width: 280px;
  max-width: 480px;
  padding: var(--space-stack-sm) var(--space-scale-20);
  border-radius: var(--radius-md);
  background: var(--color-surface-inverse);
  color: var(--color-text-inverse);
  box-shadow: 0 var(--elevation-high-y) var(--elevation-high-blur) var(--color-shadow-high);
  animation: ml-toast-in var(--motion-duration-base) var(--motion-easing-enter);
}
.ml-toast--error {
  --ml-toast-accent: var(--color-status-error);
}
.ml-toast--info {
  --ml-toast-accent: var(--color-status-info);
}
.ml-toast__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-pill);
  background: var(--ml-toast-accent);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-bold);
}
.ml-toast__message {
  flex: 1;
  min-width: 0;
  font-size: var(--font-size-body-sm);
  line-height: var(--font-line-height-body-sm);
  font-weight: var(--font-weight-medium);
}
.ml-toast__close {
  flex: none;
  min-width: 32px;
  min-height: 32px;
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-on-dark-accent);
  font-size: var(--font-size-title);
  cursor: pointer;
}
.ml-toast__close:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}

@keyframes ml-toast-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
</style>
