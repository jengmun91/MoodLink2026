// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6195-680
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/NoticeBlock.vue
// component=NoticeBlock
import figma from 'figma'

const instance = figma.selectedInstance

const heading = instance.getString('heading')
const action = instance.getString('action')
const body = instance.getString('body')
export default {
  example: figma.code`<NoticeBlock heading="${heading}" action="${action}" body="${body}" />`,
  imports: ["import { NoticeBlock } from '@/components'"],
  id: 'notice-block',
  metadata: { nestable: true },
}
