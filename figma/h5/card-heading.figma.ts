// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-605
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/CardHeading.vue
// component=CardHeading
import figma from 'figma'

const instance = figma.selectedInstance

const heading = instance.getString('heading')
const action = instance.getString('action')
const showAction = instance.getBoolean('show-action', { true: '', false: ' :show-action="false"' })
export default {
  example: figma.code`<CardHeading heading="${heading}" action="${action}"${showAction} />`,
  imports: ["import { CardHeading } from '@/components'"],
  id: 'card-heading',
  metadata: { nestable: true },
}
