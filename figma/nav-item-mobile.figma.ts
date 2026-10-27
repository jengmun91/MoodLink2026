// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6071-9208
// source=src/components/primitives/NavItemMobile.vue
// component=NavItemMobile
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { default: '', pressed: '', active: ' active' })
const label = instance.getString('label')
export default {
  example: figma.code`<NavItemMobile href="#"${state}>${label}</NavItemMobile>`,
  imports: ["import { NavItemMobile } from '@/components'"],
  id: 'nav-item-mobile',
  metadata: { nestable: true },
}
