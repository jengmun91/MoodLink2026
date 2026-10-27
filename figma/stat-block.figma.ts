// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-3174
// source=src/components/primitives/StatBlock.vue
// component=StatBlock
import figma from 'figma'

const instance = figma.selectedInstance

const value = instance.getString('value')
const label = instance.getString('label')
const icon = instance.getEnum('icon', { yes: ' icon="awareness"', no: '' })
export default {
  example: figma.code`<StatBlock value="${value}" label="${label}"${icon} />`,
  imports: ["import { StatBlock } from '@/components'"],
  id: 'stat-block',
  metadata: { nestable: true },
}
