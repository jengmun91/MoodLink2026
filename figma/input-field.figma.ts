// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-4940
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/InputField.vue
// component=InputField
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const state = instance.getEnum('state', {
  default: ' helper="We’ll only use this to reply to you."',
  focus: '',
  error: ' error="Enter a valid email address, e.g. name@company.com"',
  disabled: ' disabled',
})
export default {
  example: figma.code`<InputField v-model="email" label="${label}" type="email"${state} />`,
  imports: ["import { InputField } from '@/components'"],
  id: 'input-field',
  metadata: { nestable: true },
}
