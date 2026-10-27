import type { Meta, StoryObj } from '@storybook/vue3-vite'
import HeaderMain from './HeaderMain.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Composites/header-main',
  component: HeaderMain,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('header-main', '6044:3242', 'One component: the layout switches with CSS at 481px. Use the viewport toolbar to see mobile (proposal pending sign-off).'),
    layout: 'fullscreen' },
  render: (args) => ({
    components: { HeaderMain },
    setup: () => ({ args }),
    template: '<HeaderMain v-bind="args" />',
  }),
} satisfies Meta<typeof HeaderMain>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}
export const Mobile: Story = { globals: { viewport: { value: 'mobile375' } } }
