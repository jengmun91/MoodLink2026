// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-5027
// source=src/components/primitives/EmptyIllustration.vue
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
