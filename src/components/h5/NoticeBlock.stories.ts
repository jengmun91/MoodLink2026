import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NoticeBlock from './NoticeBlock.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/notice-block',
  component: NoticeBlock,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('notice-block', '6195:680') },
  args: {"heading": "Before you start", "action": "Read more", "body": "Consultations are private. Your employer never sees what you discuss."},
  render: (args) => ({
    components: { NoticeBlock },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><NoticeBlock v-bind="args" /></div>',
  }),
} satisfies Meta<typeof NoticeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
