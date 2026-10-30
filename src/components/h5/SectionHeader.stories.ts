import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SectionHeader from './SectionHeader.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/section-header',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('section-header', '6185:625') },
  args: {"label": "Articles", "link": "More", "showLink": true},
  render: (args) => ({
    components: { SectionHeader },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><SectionHeader v-bind="args" /></div>',
  }),
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
