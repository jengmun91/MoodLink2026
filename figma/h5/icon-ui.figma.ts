// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6170-446
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/IconUi.vue
// component=IconUi
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getEnum('name', Object.fromEntries(["home", "care", "messages", "me", "chevron-left", "chevron-right", "music", "pill", "message-circle", "phone", "video", "stethoscope", "asterisk", "badge-check"].map((n) => [n, n])))
export default {
  example: figma.code`<IconUi name="${name}" />`,
  imports: ["import { IconUi } from '@/components'"],
  id: 'icon-ui',
  metadata: { nestable: true },
}
