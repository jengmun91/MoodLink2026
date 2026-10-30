// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6051-5027
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/EmptyIllustration.vue
// component=EmptyIllustration
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getEnum('name', { 'no-results': 'no-results', 'no-content': 'no-content', offline: 'offline' })
export default {
  example: figma.code`<EmptyIllustration name="${name}" />`,
  imports: ["import { EmptyIllustration } from '@/components'"],
  id: 'empty-illustration',
  metadata: { nestable: true },
}
