// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6186-1799
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/IconService.vue
// component=IconService
import figma from 'figma'

const instance = figma.selectedInstance

const name = instance.getEnum('name', Object.fromEntries(["therapy", "awareness", "support", "mind", "resilience", "inspiration", "meditation", "wellness"].map((n) => [n, n])))
export default {
  example: figma.code`<IconService name="${name}" />`,
  imports: ["import { IconService } from '@/components'"],
  id: 'icon-service',
  metadata: { nestable: true },
}
