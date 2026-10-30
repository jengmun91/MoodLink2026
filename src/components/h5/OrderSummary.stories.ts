import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OrderSummary from './OrderSummary.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/order-summary',
  component: OrderSummary,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('order-summary', '6196:661') },
  args: {"title": "Chat consultation", "price": "RM1.00", "validity": "Valid for 24 hours", "details": [{"term": "Order no.", "value": "ML-0012"}, {"term": "Date", "value": "30 Oct 2026"}, {"term": "Payment", "value": "Company-paid"}]},
  render: (args) => ({
    components: { OrderSummary },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><OrderSummary v-bind="args" /></div>',
  }),
} satisfies Meta<typeof OrderSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
