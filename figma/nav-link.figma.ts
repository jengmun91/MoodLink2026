// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-2683
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/NavLink.vue
// component=NavLink
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { default: '', hover: '', focus: '', active: ' active', disabled: ' disabled' })
const label = instance.getString('label')
export default {
  example: figma.code`<NavLink label="${label}" href="#"${state} />`,
  imports: ["import { NavLink } from '@/components'"],
  id: 'nav-link',
  metadata: { nestable: true },
}
