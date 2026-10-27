// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-3399
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/composites/CardFeature.vue
// component=CardFeature
import figma from 'figma'

const instance = figma.selectedInstance

const type = instance.getEnum('type', { insight: 'insight', people: 'people', platform: 'platform' })
const title = instance.getString('title')
const copy = instance.getString('copy')
export default {
  example: figma.code`<CardFeature
  type="${type}"
  title="${title}"
  copy="${copy}"
  href="#"
  image="/images/feature.jpg"
/>`,
  imports: ["import { CardFeature } from '@/components'"],
  id: 'card-feature',
  metadata: { nestable: true },
}
