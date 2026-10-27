// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6070-9196
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/MenuButton.vue
// component=MenuButton
import figma from 'figma'

const instance = figma.selectedInstance

const open = instance.getEnum('state', { default: '', hover: '', focus: '', open: ' open' })
export default {
  example: figma.code`<MenuButton${open} @toggle="menuOpen = !menuOpen" />`,
  imports: ["import { MenuButton } from '@/components'"],
  id: 'menu-button',
  metadata: { nestable: true },
}
