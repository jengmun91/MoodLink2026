// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-2803
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/AppLogo.vue
// component=AppLogo
import figma from 'figma'

const instance = figma.selectedInstance

const theme = instance.getEnum('theme', { default: '', 'on-dark': ' theme="on-dark"' })
const size = instance.getEnum('size', { lg: 'lg', md: 'md', sm: 'sm' })
export default {
  example: figma.code`<AppLogo${theme} size="${size}" />`,
  imports: ["import { AppLogo } from '@/components'"],
  id: 'logo',
  metadata: { nestable: true },
}
