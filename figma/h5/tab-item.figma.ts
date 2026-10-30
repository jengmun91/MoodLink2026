// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6171-449
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/TabItem.vue
// component=TabItem
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const state = instance.getEnum('state', { default: '', pressed: '', focus: '', active: ' active' })
export default {
  example: figma.code`<TabItem label="${label}" icon="home" href="#"${state} />`,
  imports: ["import { TabItem } from '@/components'"],
  id: 'tab-item',
  metadata: { nestable: true },
}
