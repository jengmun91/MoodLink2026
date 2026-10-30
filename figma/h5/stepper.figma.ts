// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-584
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppStepper.vue
// component=AppStepper
import figma from 'figma'

const instance = figma.selectedInstance

const s1 = instance.getString('step-1')
const s2 = instance.getString('step-2')
const s3 = instance.getString('step-3')
const current = instance.getEnum('current', { '1': '1', '2': '2', '3': '3' })
export default {
  example: figma.code`<AppStepper :steps="['${s1}', '${s2}', '${s3}']" :current="${current}" />`,
  imports: ["import { AppStepper } from '@/components'"],
  id: 'stepper',
  metadata: { nestable: true },
}
