import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CheckoutBar from './CheckoutBar.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/checkout-bar',
  component: CheckoutBar,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('checkout-bar', '6196:697') },
  args: {"price": "RM1.00"},
  render: (args) => ({
    components: { CheckoutBar },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><CheckoutBar v-bind="args" /></div>',
  }),
} satisfies Meta<typeof CheckoutBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
