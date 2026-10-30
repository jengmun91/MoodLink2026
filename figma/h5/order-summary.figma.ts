// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6196-661
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/OrderSummary.vue
// component=OrderSummary
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const price = instance.getString('price')
const validity = instance.getString('validity')
export default {
  example: figma.code`<OrderSummary title="${title}" price="${price}" validity="${validity}" :details="details" />`,
  imports: ["import { OrderSummary } from '@/components'"],
  id: 'order-summary',
  metadata: { nestable: true },
}
