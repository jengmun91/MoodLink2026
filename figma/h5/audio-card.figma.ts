// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6186-576
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AudioCard.vue
// component=AudioCard
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const meta = instance.getString('meta')
export default {
  example: figma.code`<AudioCard title="${title}" meta="${meta}" href="#" />`,
  imports: ["import { AudioCard } from '@/components'"],
  id: 'audio-card',
  metadata: { nestable: true },
}
