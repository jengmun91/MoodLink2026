// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6193-643
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/ConsultationRow.vue
// component=ConsultationRow
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const price = instance.getString('price')
const tone = instance.getEnum('tone', { teal: 'teal', violet: 'violet', orange: 'orange' })
const divider = instance.getEnum('divider', { yes: '', no: ' :divider="false"' })
export default {
  example: figma.code`<ConsultationRow title="${title}" price="${price}" icon="message-circle" tone="${tone}"${divider} />`,
  imports: ["import { ConsultationRow } from '@/components'"],
  id: 'consultation-row',
  metadata: { nestable: true },
}
