import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppTag from './AppTag.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/tag',
  component: AppTag,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('tag', '6192:567') },
  args: {"label": "Anxiety"},
  render: (args) => ({
    components: { AppTag },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppTag v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
