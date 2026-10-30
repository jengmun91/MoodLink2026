// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6227-605
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppCheckbox.vue
// component=AppCheckbox
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { default: '', focus: '', error: ' error', disabled: ' disabled' })
export default {
  example: figma.code`<AppCheckbox v-model="agreed"${state} />`,
  imports: ["import { AppCheckbox } from '@/components'"],
  id: 'checkbox',
  metadata: { nestable: true },
}
