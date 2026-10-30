// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6196-613
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppTextarea.vue
// component=AppTextarea
import figma from 'figma'

const instance = figma.selectedInstance

const helper = instance.getString('helper')
const state = instance.getEnum('state', { default: '', focus: '', error: ` error="${helper}"`, disabled: ' disabled' })
export default {
  example: figma.code`<AppTextarea v-model="concern" label="Describe your concern" helper="${helper}"${state} />`,
  imports: ["import { AppTextarea } from '@/components'"],
  id: 'textarea',
  metadata: { nestable: true },
}
