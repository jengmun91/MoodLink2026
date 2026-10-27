<script setup lang="ts">
// Figma: header-main · node 6044:3242 · viewport = desktop | mobile
// One component: the layout switches with CSS at 481px instead of a viewport prop.
// Mobile header and menu are proposals pending client sign-off.
import { ref } from 'vue'
import AppLogo from '../primitives/AppLogo.vue'
import NavLink from '../primitives/NavLink.vue'
import LanguageSelector from '../primitives/LanguageSelector.vue'
import MenuButton from '../primitives/MenuButton.vue'
import NavMenuMobile, { type LanguageOption, type NavItem } from './NavMenuMobile.vue'

withDefaults(
  defineProps<{
    items?: NavItem[]
    announcement?: string
    currentLanguage?: LanguageOption['code']
    languageShort?: string
  }>(),
  {
    items: () => [
      { label: 'Approach', href: '#approach' },
      { label: 'Platform', href: '#platform' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Impact', href: '#impact' },
      { label: 'About', href: '#about' },
    ],
    announcement: 'Mood Link — Human-centred wellbeing for Southeast Asia',
    currentLanguage: 'en',
    languageShort: 'EN',
  },
)
const emit = defineEmits<{ selectLanguage: [code: LanguageOption['code']]; languageToggle: [] }>()
const menuOpen = ref(false)
</script>

<template>
  <header class="ml-header">
    <p class="ml-header__announcement">{{ announcement }}</p>

    <div class="ml-header__bar">
      <span class="ml-header__balance" aria-hidden="true" />
      <a href="/" class="ml-header__logo ml-header__logo--desktop" aria-label="Moodlink home">
        <AppLogo size="lg" alt="" />
      </a>
      <a href="/" class="ml-header__logo ml-header__logo--mobile" aria-label="Moodlink home">
        <AppLogo size="sm" alt="" />
      </a>
      <div class="ml-header__actions">
        <LanguageSelector :label="languageShort" @toggle="emit('languageToggle')" />
        <MenuButton class="ml-header__menu-button" :open="menuOpen" @toggle="menuOpen = !menuOpen" />
      </div>
    </div>

    <nav class="ml-header__nav" aria-label="Main">
      <NavLink v-for="item in items" :key="item.href" :href="item.href" :active="item.active">
        {{ item.label }}
      </NavLink>
    </nav>

    <NavMenuMobile
      v-if="menuOpen"
      :items="items"
      :current-language="currentLanguage"
      @close="menuOpen = false"
      @select-language="(code) => emit('selectLanguage', code)"
    />
  </header>
</template>

<style scoped>
.ml-header {
  background: var(--color-surface-base);
}
.ml-header__announcement {
  margin: 0;
  padding: var(--space-scale-8) var(--space-page-margin);
  background: var(--color-surface-calm);
  color: var(--color-text-primary);
  font-size: var(--font-size-caption);
  line-height: var(--font-line-height-caption);
  font-weight: var(--font-weight-medium);
  text-align: center;
}
.ml-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-stack-xs);
  padding: var(--space-scale-12) var(--space-page-margin);
}
.ml-header__logo {
  display: inline-flex;
  min-width: 0;
}
.ml-header__balance,
.ml-header__logo--desktop,
.ml-header__nav {
  display: none;
}
.ml-header__logo:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 4px;
}
.ml-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-stack-xs);
}

/* Desktop (designed at 1440) */
@media (min-width: 481px) {
  .ml-header__announcement {
    font-size: var(--font-size-label);
    line-height: var(--font-line-height-label);
  }
  .ml-header__bar {
    align-items: flex-start;
    padding: var(--space-scale-28) var(--space-page-margin) var(--space-scale-24);
  }
  .ml-header__balance {
    display: block;
    width: 112px;
  }
  .ml-header__logo--desktop {
    display: inline-flex;
    padding-top: var(--space-scale-20);
  }
  .ml-header__logo--mobile,
  .ml-header__menu-button {
    display: none;
  }
  .ml-header__nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-stack-sm);
    padding: var(--space-scale-8) var(--space-page-margin);
  }
}
</style>
