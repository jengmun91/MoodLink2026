import type { Meta, StoryObj } from '@storybook/vue3-vite'
import TabItem from './TabItem.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/tab-item',
  component: TabItem,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('tab-item', '6171:449') },
  args: {"label": "Home", "icon": "home", "active": true},
  render: (args) => ({
    components: { TabItem },
    setup: () => ({ args }),
    template: '<div style="display:flex;width:96px"><TabItem v-bind="args" /></div>',
  }),
} satisfies Meta<typeof TabItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
