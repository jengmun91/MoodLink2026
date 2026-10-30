// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6313-3021
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/LogoMark.vue
// component=LogoMark
import figma from 'figma'

const instance = figma.selectedInstance

const theme = instance.getEnum('theme', { default: '', 'on-dark': ' theme="on-dark"' })
export default {
  example: figma.code`<LogoMark${theme} />`,
  imports: ["import { LogoMark } from '@/components'"],
  id: 'logo-mark',
  metadata: { nestable: true },
}
