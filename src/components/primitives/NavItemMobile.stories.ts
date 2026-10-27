import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavItemMobile from './NavItemMobile.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/nav-item-mobile',
  component: NavItemMobile,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('nav-item-mobile', '6071:9208', '`pressed` is the CSS `:active` state.') },
  args: { label: 'Approach', href: '#', active: false },
  render: (args) => ({
    components: { NavItemMobile },
    setup: () => ({ args }),
    template: '<div style="max-width:343px"><NavItemMobile v-bind="args" /></div>',
  }),
} satisfies Meta<typeof NavItemMobile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Active: Story = { args: { active: true } }
export const LongMalayLabel: Story = {
  name: 'Long label wraps',
  args: { label: 'Tentang Kami dan rakan kongsi serantau kami' },
}
