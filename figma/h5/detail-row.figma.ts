// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-657
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/DetailRow.vue
// component=DetailRow
import figma from 'figma'

const instance = figma.selectedInstance

const term = instance.getString('key')
const value = instance.getString('value')
export default {
  example: figma.code`<DetailRow term="${term}" value="${value}" />`,
  imports: ["import { DetailRow } from '@/components'"],
  id: 'detail-row',
  metadata: { nestable: true },
}
