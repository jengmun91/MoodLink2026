// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-3174
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/StatBlock.vue
// component=StatBlock
import figma from 'figma'

const instance = figma.selectedInstance

const value = instance.getString('value')
const label = instance.getString('label')
const hasIcon = instance.getEnum('icon', { yes: true, no: false })
// icon-name is an instance swap of the `icon` component; read its `name` variant.
const swapped = instance.getInstanceSwap('icon-name')
const iconName =
  swapped && swapped.type === 'INSTANCE'
    ? swapped.getEnum('name', {
        awareness: 'awareness',
        support: 'support',
        empowerment: 'empowerment',
        connection: 'connection',
      })
    : undefined
const iconAttr = hasIcon ? (iconName ? ` icon-name="${iconName}"` : '') : ' :icon="false"'
export default {
  example: figma.code`<StatBlock value="${value}" label="${label}"${iconAttr} />`,
  imports: ["import { StatBlock } from '@/components'"],
  id: 'stat-block',
  metadata: { nestable: true },
}
