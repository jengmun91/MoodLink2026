import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BottomTabBar from './BottomTabBar.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/bottom-tab-bar',
  component: BottomTabBar,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('bottom-tab-bar', '6172:565') },
  args: {"active": "home"},
  render: (args) => ({
    components: { BottomTabBar },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><BottomTabBar v-bind="args" /></div>',
  }),
} satisfies Meta<typeof BottomTabBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Care: Story = { args: { active: 'care' } }
