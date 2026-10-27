import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppButton from './AppButton.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/button',
  component: AppButton,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('button', '6044:2667', 'Hover and focus are CSS states (`:hover`, `:focus-visible`), not props.') },
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary'] } },
  args: { label: 'Explore Moodlink', variant: 'primary', disabled: false, loading: false },
  render: (args) => ({
    components: { AppButton },
    setup: () => ({ args }),
    template: '<AppButton v-bind="args" />',
  }),
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = {
  args: { variant: 'secondary' },
  decorators: [() => ({ template: '<div style="padding:24px;background:var(--color-surface-accent)"><story /></div>' })],
}
export const Disabled: Story = { args: { disabled: true } }
export const Loading: Story = { args: { loading: true } }

export const LongLabel: Story = {
  name: 'Long label wraps to two lines',
  render: () => ({
    components: { AppButton },
    template: `
      <div lang="ms" style="max-width:375px"><AppButton label="Tempah sesi konsultasi kesejahteraan percuma" /></div>`,
  }),
}
