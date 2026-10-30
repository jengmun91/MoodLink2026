// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6185-580
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/WellbeingTile.vue
// component=WellbeingTile
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const subtitle = instance.getString('subtitle')
const tone = instance.getEnum('tone', { aqua: 'aqua', lemon: 'lemon' })
export default {
  example: figma.code`<WellbeingTile title="${title}" subtitle="${subtitle}" tone="${tone}" href="#" />`,
  imports: ["import { WellbeingTile } from '@/components'"],
  id: 'wellbeing-tile',
  metadata: { nestable: true },
}
