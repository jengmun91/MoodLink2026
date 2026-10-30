// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6172-565
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/BottomTabBar.vue
// component=BottomTabBar
import figma from 'figma'

const instance = figma.selectedInstance

const active = instance.getEnum('active', { home: 'home', care: 'care', messages: 'messages', me: 'me' })
export default {
  example: figma.code`<BottomTabBar active="${active}" />`,
  imports: ["import { BottomTabBar } from '@/components'"],
  id: 'bottom-tab-bar',
  metadata: { nestable: true },
}
