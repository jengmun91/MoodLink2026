// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6192-567
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppTag.vue
// component=AppTag
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
export default {
  example: figma.code`<AppTag label="${label}" />`,
  imports: ["import { AppTag } from '@/components'"],
  id: 'tag',
  metadata: { nestable: true },
}
