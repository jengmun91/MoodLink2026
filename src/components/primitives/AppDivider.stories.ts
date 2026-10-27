import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppDivider from './AppDivider.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/divider',
  component: AppDivider,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('divider', '6044:2706', '') },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] }, tone: { control: 'inline-radio', options: ['default', 'accent', 'on-dark'] } },
  args: { orientation: 'horizontal', tone: 'default' },
  render: (args) => ({
    components: { AppDivider },
    setup: () => ({ args }),
    template: '<div style="max-width:480px"><AppDivider v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppDivider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Accent: Story = { args: { tone: 'accent' } }
export const OnDark: Story = {
  args: { tone: 'on-dark' },
  decorators: [() => ({ template: '<div style="padding:16px;background:var(--color-surface-inverse)"><story /></div>' })],
}
export const Vertical: Story = {
  render: () => ({
    components: { AppDivider },
    template: `
      <div style="display:flex;gap:24px;height:90px"><span>13M+</span><AppDivider orientation="vertical" /><span>80K+</span></div>`,
  }),
}
