// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6192-546
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/h5/AppBadge.vue
// component=AppBadge
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label')
const tone = instance.getEnum('tone', { success: 'success', info: 'info' })
const showIcon = instance.getBoolean('show-icon', { true: '', false: ' :show-icon="false"' })
export default {
  example: figma.code`<AppBadge label="${label}" tone="${tone}"${showIcon} />`,
  imports: ["import { AppBadge } from '@/components'"],
  id: 'badge',
  metadata: { nestable: true },
}
