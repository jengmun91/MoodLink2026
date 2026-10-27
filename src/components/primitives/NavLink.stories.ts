import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavLink from './NavLink.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/nav-link',
  component: NavLink,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('nav-link', '6044:2683', 'Hover and focus are CSS states.') },
  args: { label: 'Approach', href: '#', active: false, disabled: false },
  render: (args) => ({
    components: { NavLink },
    setup: () => ({ args }),
    template: '<NavLink v-bind="args" />',
  }),
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Active: Story = { args: { active: true } }
export const Disabled: Story = { args: { disabled: true } }

export const InNavigation: Story = {
  name: 'In a navigation bar',
  render: () => ({
    components: { NavLink },
    template: `
      <nav aria-label="Example" style="display:flex;gap:12px;flex-wrap:wrap">
        <NavLink label="Approach" active />
        <NavLink label="Platform" />
        <NavLink label="Solutions" />
        <NavLink label="Penyelesaian untuk organisasi" />
      </nav>`,
  }),
}
