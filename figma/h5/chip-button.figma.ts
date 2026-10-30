// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6192-595
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/ChipButton.vue
// component=ChipButton
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
export default {
  example: figma.code`<ChipButton label="${label}" />`,
  imports: ["import { ChipButton } from '@/components'"],
  id: 'chip-button',
  metadata: { nestable: true },
}
