// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-2699
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/primitives/LanguageSelector.vue
// component=LanguageSelector
import figma from 'figma'


export default {
  example: figma.code`<LanguageSelector label="EN" @toggle="openLanguages" />`,
  imports: ["import { LanguageSelector } from '@/components'"],
  id: 'language-selector',
  metadata: { nestable: true },
}
