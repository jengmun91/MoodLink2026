// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6186-537
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/MediaCard.vue
// component=MediaCard
import figma from 'figma'

const instance = figma.selectedInstance

const title = instance.getString('title')
const meta = instance.getString('meta')
export default {
  example: figma.code`<MediaCard title="${title}" meta="${meta}" image="" image-alt="" href="#" />`,
  imports: ["import { MediaCard } from '@/components'"],
  id: 'media-card',
  metadata: { nestable: true },
}
