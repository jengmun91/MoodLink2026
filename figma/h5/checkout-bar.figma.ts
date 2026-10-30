// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6196-697
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/CheckoutBar.vue
// component=CheckoutBar
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const price = instance.getString('price')
export default {
  example: figma.code`<CheckoutBar label="${label}" price="${price}" />`,
  imports: ["import { CheckoutBar } from '@/components'"],
  id: 'checkout-bar',
  metadata: { nestable: true },
}
