// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-2667
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/AppButton.vue
// component=AppButton
import figma from 'figma'

const instance = figma.selectedInstance

const variant = instance.getEnum('variant', { primary: 'primary', secondary: 'secondary' })
const state = instance.getEnum('state', { default: '', hover: '', focus: '', disabled: ' disabled', loading: ' loading' })
const label = instance.getString('label')
const size = instance.getEnum('size', { md: '', sm: ' size="sm"' })
const variantAttr = variant === 'primary' ? '' : ` variant="${variant}"`
export default {
  example: figma.code`<AppButton label="${label}"${variantAttr}${size}${state} />`,
  imports: ["import { AppButton } from '@/components'"],
  id: 'button',
  metadata: { nestable: true },
}
