// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6044-3242
// source=src/components/composites/HeaderMain.vue
// component=HeaderMain
import figma from 'figma'


export default {
  example: figma.code`<!-- One component for desktop and mobile; layout switches at 481px -->
<HeaderMain
  :items="navItems"
  :current-language="lang"
  @select-language="setLanguage"
/>`,
  imports: ["import { HeaderMain } from '@/components'"],
  id: 'header-main',
}
