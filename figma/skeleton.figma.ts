// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-4919
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/AppSkeleton.vue
// component=AppSkeleton
import figma from 'figma'

const instance = figma.selectedInstance

const shape = instance.getEnum('shape', { text: 'text', heading: 'heading', image: 'image', button: 'button', circle: 'circle' })
export default {
  example: figma.code`<AppSkeleton shape="${shape}" />`,
  imports: ["import { AppSkeleton } from '@/components'"],
  id: 'skeleton',
  metadata: { nestable: true },
}
