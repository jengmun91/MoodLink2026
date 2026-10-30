// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6186-597
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/HeroBanner.vue
// component=HeroBanner
import figma from 'figma'

const instance = figma.selectedInstance

const tagline = instance.getString('tagline')
const title = instance.getString('title')
const heading = instance.getString('heading')
export default {
  example: figma.code`<HeroBanner tagline="${tagline}" title="${title}" heading="${heading}" image="" />`,
  imports: ["import { HeroBanner } from '@/components'"],
  id: 'hero-banner',
  metadata: { nestable: true },
}
