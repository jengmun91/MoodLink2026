<script setup lang="ts">
// Figma: menu-button · node 6070:9196 · state = default | hover | focus | open
withDefaults(defineProps<{ open?: boolean; controls?: string }>(), {
  open: false,
  controls: 'mobile-menu',
})
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="ml-menu-button"
    :class="{ 'is-open': open }"
    :aria-expanded="open ? 'true' : 'false'"
    :aria-controls="controls"
    :aria-label="open ? 'Close menu' : 'Open menu'"
    @click="$emit('toggle')"
  >
    <span class="ml-menu-button__line" />
    <span class="ml-menu-button__line" />
    <span class="ml-menu-button__line" />
  </button>
</template>

<style scoped>
.ml-menu-button {
  position: relative;
  display: inline-flex;
  flex: none;
  width: 44px;
  height: 44px;
  padding: 0;
  border: var(--border-width-default) solid var(--color-border-default);
  border-radius: var(--radius-pill);
  background: var(--color-surface-base);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-menu-button:hover {
  background: var(--color-surface-hover);
}
.ml-menu-button:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 0;
}
.ml-menu-button__line {
  position: absolute;
  left: 13px;
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: var(--color-icon-default);
  transition:
    transform var(--motion-duration-fast) var(--motion-easing-standard),
    opacity var(--motion-duration-fast) var(--motion-easing-standard);
}
.ml-menu-button__line:nth-child(1) {
  top: 14px;
}
.ml-menu-button__line:nth-child(2) {
  top: 20px;
}
.ml-menu-button__line:nth-child(3) {
  top: 26px;
}
.ml-menu-button.is-open .ml-menu-button__line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.ml-menu-button.is-open .ml-menu-button__line:nth-child(2) {
  opacity: 0;
}
.ml-menu-button.is-open .ml-menu-button__line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}
</style>
