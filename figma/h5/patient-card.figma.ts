// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6196-634
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/PatientCard.vue
// component=PatientCard
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getString('name')
const details = instance.getString('details')
const phone = instance.getString('phone')
export default {
  example: figma.code`<PatientCard name="${name}" details="${details}" phone="${phone}" />`,
  imports: ["import { PatientCard } from '@/components'"],
  id: 'patient-card',
  metadata: { nestable: true },
}
