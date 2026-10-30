import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FieldLabel from './FieldLabel.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/field-label',
  component: FieldLabel,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('field-label', '6195:636') },
  args: {"label": "Describe your concern", "required": true},
  render: (args) => ({
    components: { FieldLabel },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><FieldLabel v-bind="args" /></div>',
  }),
} satisfies Meta<typeof FieldLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
