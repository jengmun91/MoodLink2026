// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6185-601
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/SectionTitle.vue
// component=SectionTitle
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
export default {
  example: figma.code`<SectionTitle title="${title}" />`,
  imports: ["import { SectionTitle } from '@/components'"],
  id: 'section-title',
  metadata: { nestable: true },
}
