// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6193-540
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/PractitionerCard.vue
// component=PractitionerCard
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getString('name')
const jobTitle = instance.getString('job-title')
const hospital = instance.getString('hospital')
const grade = instance.getString('grade')
const department = instance.getString('department')
const summary = instance.getString('summary')
export default {
  example: figma.code`<PractitionerCard name="${name}" job-title="${jobTitle}" hospital="${hospital}" grade="${grade}" department="${department}" summary="${summary}" avatar="" :tags="[]" />`,
  imports: ["import { PractitionerCard } from '@/components'"],
  id: 'practitioner-card',
  metadata: { nestable: true },
}
