// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6185-546
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/ServiceShortcut.vue
// component=ServiceShortcut
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
export default {
  example: figma.code`<ServiceShortcut label="${label}" icon="therapy" href="#" />`,
  imports: ["import { ServiceShortcut } from '@/components'"],
  id: 'service-shortcut',
  metadata: { nestable: true },
}
