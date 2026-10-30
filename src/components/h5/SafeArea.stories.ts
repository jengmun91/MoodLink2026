import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SafeArea from './SafeArea.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/safe-area',
  component: SafeArea,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('safe-area', '6171:475') },
  args: {"edge": "top"},
  render: (args) => ({
    components: { SafeArea },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><SafeArea v-bind="args" /></div>',
  }),
} satisfies Meta<typeof SafeArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
