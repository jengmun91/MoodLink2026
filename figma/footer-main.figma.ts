// url=https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6044-3355
// source=https://github.com/jengmun91/MoodLink2026/blob/main/src/components/composites/FooterMain.vue
// component=FooterMain
import figma from 'figma'


export default {
  example: figma.code`<!-- One component for desktop and mobile; columns wrap on small screens -->
<FooterMain :columns="footerColumns" email="hello@moodlink.asia" />`,
  imports: ["import { FooterMain } from '@/components'"],
  id: 'footer-main',
}
