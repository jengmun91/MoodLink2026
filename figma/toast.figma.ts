// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-5005
// source=src/components/primitives/AppToast.vue
// component=AppToast
import figma from 'figma'

const instance = figma.selectedInstance

const type = instance.getEnum('type', { success: 'success', error: 'error', info: 'info' })
export default {
  example: figma.code`<AppToast type="${type}" message="Message sent. We’ll be in touch soon." @dismiss="toast = null" />`,
  imports: ["import { AppToast } from '@/components'"],
  id: 'toast',
  metadata: { nestable: true },
}
