// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-2706
// source=src/components/primitives/AppDivider.vue
// component=AppDivider
import figma from 'figma'

const instance = figma.selectedInstance

const orientation = instance.getEnum('orientation', { horizontal: '', vertical: ' orientation="vertical"' })
const tone = instance.getEnum('tone', { default: '', accent: ' tone="accent"', 'on-dark': ' tone="on-dark"' })
export default {
  example: figma.code`<AppDivider${orientation}${tone} />`,
  imports: ["import { AppDivider } from '@/components'"],
  id: 'divider',
  metadata: { nestable: true },
}
