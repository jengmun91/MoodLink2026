<script setup lang="ts">
// Figma: nav-menu-mobile · node 6071:9311 · state = open | language-open
// Full-screen dialog opened by MenuButton. Esc closes it; focus is trapped while open.
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import AppLogo from '../primitives/AppLogo.vue'
import MenuButton from '../primitives/MenuButton.vue'
import NavItemMobile from '../primitives/NavItemMobile.vue'
import AppDivider from '../primitives/AppDivider.vue'
import LanguageSelector from '../primitives/LanguageSelector.vue'
import AppButton from '../primitives/AppButton.vue'

export interface NavItem {
  label: string
  href: string
  active?: boolean
}
export interface LanguageOption {
  code: 'en' | 'ms' | 'zh-Hans'
  label: string
  short: string
}

const props = withDefaults(
  defineProps<{
    items: NavItem[]
    languages?: LanguageOption[]
    currentLanguage?: LanguageOption['code']
    languageLabel?: string
    ctaLabel?: string
    ctaHref?: string
    /** Start with the language list expanded (Figma state=language-open). */
    languageOpen?: boolean
  }>(),
  {
    languages: () => [
      { code: 'en', label: 'English', short: 'EN' },
      { code: 'ms', label: 'Bahasa Melayu', short: 'MS' },
      { code: 'zh-Hans', label: '简体中文', short: '中文' },
    ],
    currentLanguage: 'en',
    languageLabel: 'Language',
    ctaLabel: 'Talk to our team',
    ctaHref: '#contact',
    languageOpen: false,
  },
)
const emit = defineEmits<{ close: []; selectLanguage: [code: LanguageOption['code']] }>()

const panel = ref<HTMLElement>()
const showLanguages = ref(props.languageOpen)
const current = () => props.languages.find((l) => l.code === props.currentLanguage) ?? props.languages[0]

const focusable = () =>
  Array.from(panel.value?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
  if (event.key !== 'Tab') return
  const items = focusable()
  if (!items.length) return
  const first = items[0]!
  const last = items[items.length - 1]!
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(async () => {
  document.addEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = 'hidden'
  await nextTick()
  focusable()[0]?.focus()
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})

function choose(code: LanguageOption['code']) {
  emit('selectLanguage', code)
  showLanguages.value = false
}
</script>

<template>
  <div id="mobile-menu" ref="panel" class="ml-nav-menu" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="ml-nav-menu__top">
      <AppLogo size="sm" />
      <MenuButton open @toggle="$emit('close')" />
    </div>

    <nav class="ml-nav-menu__list" aria-label="Main">
      <NavItemMobile v-for="item in items" :key="item.href" :href="item.href" :active="item.active">
        {{ item.label }}
      </NavItemMobile>
    </nav>

    <div class="ml-nav-menu__divider"><AppDivider /></div>

    <div class="ml-nav-menu__language">
      <div class="ml-nav-menu__language-row">
        <span class="ml-text-label ml-nav-menu__language-label">{{ languageLabel }}</span>
        <LanguageSelector
          :label="current().short"
          :expanded="showLanguages"
          @toggle="showLanguages = !showLanguages"
        />
      </div>
      <ul v-if="showLanguages" class="ml-nav-menu__options" role="listbox" :aria-label="languageLabel">
        <li v-for="lang in languages" :key="lang.code">
          <button
            type="button"
            role="option"
            class="ml-nav-menu__option"
            :class="{ 'is-selected': lang.code === currentLanguage }"
            :aria-selected="lang.code === currentLanguage ? 'true' : 'false'"
            :lang="lang.code"
            @click="choose(lang.code)"
          >
            <span>{{ lang.label }}</span>
            <span v-if="lang.code === currentLanguage" aria-hidden="true">✓</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="ml-nav-menu__cta">
      <AppButton :href="ctaHref" class="ml-nav-menu__cta-button">{{ ctaLabel }}</AppButton>
    </div>
  </div>
</template>

<style scoped>
.ml-nav-menu {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: var(--color-surface-base);
  animation: ml-menu-in var(--motion-duration-base) var(--motion-easing-enter);
}
.ml-nav-menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-stack-xs);
  padding: var(--space-scale-12) var(--space-page-margin);
}
.ml-nav-menu__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-2xs);
  padding: var(--space-stack-md) var(--space-page-margin);
}
.ml-nav-menu__divider {
  padding-inline: var(--space-page-margin);
}
.ml-nav-menu__language {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-12);
  padding: var(--space-scale-20) var(--space-page-margin);
}
.ml-nav-menu__language-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-scale-12);
}
.ml-nav-menu__language-label {
  color: var(--color-text-secondary);
}
.ml-nav-menu__options {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-2xs);
  margin: 0;
  padding: var(--space-scale-8);
  list-style: none;
  border-radius: var(--radius-md);
  background: var(--color-surface-subtle);
}
.ml-nav-menu__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 48px;
  padding: var(--space-scale-12);
  border: 0;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-text-primary);
  font: inherit;
  font-size: var(--font-size-title-sm);
  line-height: var(--font-line-height-title-sm);
  font-weight: var(--font-weight-semibold);
  text-align: left;
  cursor: pointer;
}
.ml-nav-menu__option.is-selected {
  background: var(--color-surface-base);
}
.ml-nav-menu__option.is-selected span:last-child {
  color: var(--color-status-success);
}
.ml-nav-menu__option:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
}
.ml-nav-menu__cta {
  padding: var(--space-scale-8) var(--space-page-margin) var(--space-scale-32);
}
.ml-nav-menu__cta-button {
  width: 100%;
}
.ml-nav-menu__cta-button :deep(.ml-button__label) {
  max-width: none;
}

@keyframes ml-menu-in {
  from {
    transform: translateX(16px);
    opacity: 0;
  }
}
</style>
