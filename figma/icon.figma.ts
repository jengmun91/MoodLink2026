// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-2930
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/AppIcon.vue
// component=AppIcon
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getEnum('name', { awareness: 'awareness', support: 'support', empowerment: 'empowerment', connection: 'connection' })
const size = instance.getEnum('size', { lg: 'lg', md: 'md', sm: 'sm' })
export default {
  example: figma.code`<AppIcon name="${name}" size="${size}" />`,
  imports: ["import { AppIcon } from '@/components'"],
  id: 'icon',
  metadata: { nestable: true },
}
