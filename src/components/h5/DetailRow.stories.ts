import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DetailRow from './DetailRow.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/detail-row',
  component: DetailRow,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('detail-row', '6195:657') },
  args: {"term": "Order no.", "value": "ML-20261030-0012"},
  render: (args) => ({
    components: { DetailRow },
    setup: () => ({ args }),
    template: '<dl style="margin:0"><DetailRow v-bind="args" /></dl>',
  }),
} satisfies Meta<typeof DetailRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
