// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-705
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/ConsentLine.vue
// component=ConsentLine
import figma from 'figma'

const instance = figma.selectedInstance

const intro = instance.getString('intro')
const link = instance.getString('link')
const showError = instance.getBoolean('show-error', { true: ' show-error', false: '' })
export default {
  example: figma.code`<ConsentLine v-model="agreed" intro="${intro}" link="${link}" href="/service-agreement"${showError} />`,
  imports: ["import { ConsentLine } from '@/components'"],
  id: 'consent-line',
  metadata: { nestable: true },
}
