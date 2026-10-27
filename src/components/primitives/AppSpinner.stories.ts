import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppSpinner from './AppSpinner.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/spinner',
  component: AppSpinner,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('spinner', '6051:4913', 'Appears after the 300ms loading delay. Hidden when `prefers-reduced-motion` is set (shows a static ring).') },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }, tone: { control: 'inline-radio', options: ['default', 'on-dark'] } },
  args: { size: 'md', tone: 'default' },
  render: (args) => ({
    components: { AppSpinner },
    setup: () => ({ args }),
    template: '<AppSpinner v-bind="args" />',
  }),
} satisfies Meta<typeof AppSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const OnDark: Story = {
  args: { tone: 'on-dark' },
  decorators: [() => ({ template: '<div style="padding:16px;background:var(--color-surface-inverse)"><story /></div>' })],
}
