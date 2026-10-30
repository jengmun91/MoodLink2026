import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CardHeading from './CardHeading.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/card-heading',
  component: CardHeading,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('card-heading', '6195:605') },
  args: {"heading": "Patient", "action": "Change", "showAction": true},
  render: (args) => ({
    components: { CardHeading },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><CardHeading v-bind="args" /></div>',
  }),
} satisfies Meta<typeof CardHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
