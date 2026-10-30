import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PatternH5 from './PatternH5.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/pattern-h5',
  component: PatternH5,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('pattern-h5', '6313:2768') },
  args: {"state": "empty"},
  render: (args) => ({
    components: { PatternH5 },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><PatternH5 v-bind="args" /></div>',
  }),
} satisfies Meta<typeof PatternH5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Loading: Story = { args: { state: 'loading' } }
export const ErrorState: Story = { args: { state: 'error' } }
export const Offline: Story = { args: { state: 'offline' } }
