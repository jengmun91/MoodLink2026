import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppLogo from './AppLogo.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/logo',
  component: AppLogo,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('logo', '6044:2803', '') },
  argTypes: { theme: { control: 'inline-radio', options: ['default', 'on-dark'] }, size: { control: 'inline-radio', options: ['lg', 'md', 'sm'] } },
  args: { theme: 'default', size: 'md' },
  render: (args) => ({
    components: { AppLogo },
    setup: () => ({ args }),
    template: '<AppLogo v-bind="args" />',
  }),
} satisfies Meta<typeof AppLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const OnDark: Story = {
  args: { theme: 'on-dark' },
  decorators: [() => ({ template: '<div style="padding:24px;background:var(--color-surface-inverse)"><story /></div>' })],
}
export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    components: { AppLogo },
    template: `
      <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap">
        <AppLogo size="lg" /><AppLogo size="md" /><AppLogo size="sm" />
      </div>`,
  }),
}
