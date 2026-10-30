// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-636
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/FieldLabel.vue
// component=FieldLabel
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const required = instance.getEnum('required', { yes: '', no: ' :required="false"' })
export default {
  example: figma.code`<FieldLabel label="${label}" for="field-id"${required} />`,
  imports: ["import { FieldLabel } from '@/components'"],
  id: 'field-label',
  metadata: { nestable: true },
}
