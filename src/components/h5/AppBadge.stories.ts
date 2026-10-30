import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppBadge from './AppBadge.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/badge',
  component: AppBadge,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('badge', '6192:546') },
  args: {"label": "Verified", "tone": "success", "showIcon": true},
  render: (args) => ({
    components: { AppBadge },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppBadge v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Info: Story = { args: { tone: 'info', label: 'New' } }
