// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-4989
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/AppAlert.vue
// component=AppAlert
import figma from 'figma'

const instance = figma.selectedInstance

const type = instance.getEnum('type', { info: 'info', success: 'success', warning: 'warning', error: 'error' })
const variant = instance.getEnum('style', { inline: '', banner: ' variant="banner"' })
export default {
  example: figma.code`<AppAlert type="${type}"${variant} title="Message sent" message="Thanks — our team will reply within 2 working days." />`,
  imports: ["import { AppAlert } from '@/components'"],
  id: 'alert',
  metadata: { nestable: true },
}
