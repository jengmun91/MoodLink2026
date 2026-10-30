// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6172-596
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppTopBar.vue
// component=AppTopBar
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const back = instance.getEnum('back', { yes: '', no: ' :back="false"' })
export default {
  example: figma.code`<AppTopBar title="${title}"${back} @back="router.back()" />`,
  imports: ["import { AppTopBar } from '@/components'"],
  id: 'app-top-bar',
  metadata: { nestable: true },
}
