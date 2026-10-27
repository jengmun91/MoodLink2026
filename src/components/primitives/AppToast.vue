<script setup lang="ts">
// Figma: toast · node 6051:5005 · type = success | error | info
// Auto-dismisses after motion/duration/toast (5s); pauses while hovered.
import { onBeforeUnmount, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{ type?: 'success' | 'error' | 'info'; message: string; duration?: number }>(),
  { type: 'success', duration: 5000 },
)
const emit = defineEmits<{ dismiss: [] }>()
// Status glyphs drawn as SVG so they sit exactly in the centre of the 24px circle
// (text characters such as × sit low because of font metrics). Matches Figma toast > status-icon.
const glyph = {
  success: 'M7 12.5l3.2 3.2L17 9',
  error: 'M8.5 8.5l7 7M15.5 8.5l-7 7',
  info: 'M12 11v6M12 7.5v.01',
} as const

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
    <span class="ml-toast__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
        <path :d="glyph[type]" />
      </svg>
    </span>
    <span class="ml-toast__message">{{ message }}</span>
    <button type="button" class="ml-toast__close" aria-label="Dismiss" @click="$emit('dismiss')">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path d="M7 7l10 10M17 7L7 17" />
      </svg>
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
}
.ml-toast__icon svg,
.ml-toast__close svg {
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ml-toast__icon svg {
  stroke-width: 2.25;
}
.ml-toast__close svg {
  stroke-width: 2;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--color-text-on-dark-accent);
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
