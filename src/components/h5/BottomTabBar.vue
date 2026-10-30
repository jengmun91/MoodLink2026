<script setup lang="ts">
// Figma: bottom-tab-bar · node 6172:565 · active = home | care | messages | me · 4 × tab-item
import TabItem from './TabItem.vue'
import type { IconUiName } from './IconUi.vue'

export type TabKey = 'home' | 'care' | 'messages' | 'me'
export interface TabDef { key: TabKey; label: string; href: string }

withDefaults(defineProps<{ active?: TabKey; tabs?: TabDef[]; ariaLabel?: string }>(), {
  active: 'home',
  ariaLabel: 'Main',
  tabs: () => [
    { key: 'home', label: 'Home', href: '#home' },
    { key: 'care', label: 'Care', href: '#care' },
    { key: 'messages', label: 'Messages', href: '#messages' },
    { key: 'me', label: 'Me', href: '#me' },
  ],
})
const icons: Record<TabKey, IconUiName> = { home: 'home', care: 'care', messages: 'messages', me: 'me' }
</script>

<template>
  <nav class="ml-bottom-tab-bar" :aria-label="ariaLabel">
    <TabItem v-for="t in tabs" :key="t.key" :label="t.label" :icon="icons[t.key]" :href="t.href" :active="t.key === active" />
  </nav>
</template>

<style scoped>
.ml-bottom-tab-bar {
  display: flex;
  align-items: center;
  padding: var(--space-scale-8) var(--space-stack-sm);
  border: var(--border-width-thin) solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  background: var(--color-surface-base);
}
</style>
