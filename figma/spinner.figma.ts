// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6051-4913
// source=src/components/primitives/AppSpinner.vue
// component=AppSpinner
import figma from 'figma'

const instance = figma.selectedInstance

const size = instance.getEnum('size', { sm: 'sm', md: 'md', lg: 'lg' })
const tone = instance.getEnum('tone', { default: '', 'on-dark': ' tone="on-dark"' })
export default {
  example: figma.code`<AppSpinner size="${size}"${tone} />`,
  imports: ["import { AppSpinner } from '@/components'"],
  id: 'spinner',
  metadata: { nestable: true },
}
