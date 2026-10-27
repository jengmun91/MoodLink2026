// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-2683
// source=src/components/primitives/NavLink.vue
// component=NavLink
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { default: '', hover: '', focus: '', active: ' active', disabled: ' disabled' })
const label = instance.getString('label')
export default {
  example: figma.code`<NavLink href="#"${state}>${label}</NavLink>`,
  imports: ["import { NavLink } from '@/components'"],
  id: 'nav-link',
  metadata: { nestable: true },
}
