// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6313-2768
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/PatternH5.vue
// component=PatternH5
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('state', { loading: 'loading', empty: 'empty', error: 'error', offline: 'offline' })
export default {
  example: figma.code`<PatternH5 state="${state}" />`,
  imports: ["import { PatternH5 } from '@/components'"],
  id: 'pattern-h5',
  metadata: { nestable: true },
}
