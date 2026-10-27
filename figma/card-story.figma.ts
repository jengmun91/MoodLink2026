// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-3131
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/CardStory.vue
// component=CardStory
import figma from 'figma'

const instance = figma.selectedInstance

const tone = instance.getEnum('tone', { aqua: 'aqua', lemon: 'lemon', lilac: 'lilac' })
const title = instance.getString('title')
const copy = instance.getString('copy')
const link = instance.getString('link')
export default {
  example: figma.code`<CardStory
  tone="${tone}"
  title="${title}"
  copy="${copy}"
  link="${link}"
  href="#"
  image="/images/story.jpg"
/>`,
  imports: ["import { CardStory } from '@/components'"],
  id: 'card-story',
  metadata: { nestable: true },
}
