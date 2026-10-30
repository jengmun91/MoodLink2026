import type { Meta, StoryObj } from '@storybook/vue3-vite'
import WellbeingTile from './WellbeingTile.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/wellbeing-tile',
  component: WellbeingTile,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('wellbeing-tile', '6185:580') },
  args: {"title": "Mood check-in", "subtitle": "2 min", "tone": "aqua"},
  render: (args) => ({
    components: { WellbeingTile },
    setup: () => ({ args }),
    template: '<div style="width:170px"><WellbeingTile v-bind="args" /></div>',
  }),
} satisfies Meta<typeof WellbeingTile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Lemon: Story = { args: { tone: 'lemon' } }
