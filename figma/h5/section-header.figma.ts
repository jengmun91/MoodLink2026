// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6185-625
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/SectionHeader.vue
// component=SectionHeader
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const link = instance.getString('link')
const showLink = instance.getBoolean('show-link', { true: '', false: ' :show-link="false"' })
export default {
  example: figma.code`<SectionHeader label="${label}" link="${link}" href="#"${showLink} />`,
  imports: ["import { SectionHeader } from '@/components'"],
  id: 'section-header',
  metadata: { nestable: true },
}
