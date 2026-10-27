// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6071-9311
// source=src/components/composites/NavMenuMobile.vue
// component=NavMenuMobile
import figma from 'figma'

const instance = figma.selectedInstance

const languageOpen = instance.getEnum('state', { open: '', 'language-open': '\n  language-open' })
export default {
  example: figma.code`<!-- Usually opened by HeaderMain's MenuButton -->
<NavMenuMobile
  v-if="menuOpen"
  :items="navItems"
  :current-language="lang"${languageOpen}
  @close="menuOpen = false"
  @select-language="setLanguage"
/>`,
  imports: ["import { NavMenuMobile } from '@/components'"],
  id: 'nav-menu-mobile',
}
