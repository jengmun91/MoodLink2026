// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-2692
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/FooterLink.vue
// component=FooterLink
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { default: '', hover: '', focus: '', disabled: ' disabled' })
const label = instance.getString('label')
export default {
  example: figma.code`<FooterLink label="${label}" href="#"${state} />`,
  imports: ["import { FooterLink } from '@/components'"],
  id: 'footer-link',
  metadata: { nestable: true },
}
