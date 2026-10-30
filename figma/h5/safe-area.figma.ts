// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6171-475
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/SafeArea.vue
// component=SafeArea
import figma from 'figma'

const instance = figma.selectedInstance

const edge = instance.getEnum('edge', { top: 'top', bottom: 'bottom' })
export default {
  example: figma.code`<SafeArea edge="${edge}" />`,
  imports: ["import { SafeArea } from '@/components'"],
  id: 'safe-area',
  metadata: { nestable: true },
}
