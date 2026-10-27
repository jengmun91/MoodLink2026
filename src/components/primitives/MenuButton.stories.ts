import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MenuButton from './MenuButton.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/menu-button',
  component: MenuButton,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('menu-button', '6070:9196', 'Sets `aria-expanded` and `aria-controls`. Emits `toggle`.') },
  args: { open: false },
  render: (args) => ({
    components: { MenuButton },
    setup: () => ({ args }),
    template: '<MenuButton v-bind="args" />',
  }),
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {}
export const Open: Story = { args: { open: true } }
