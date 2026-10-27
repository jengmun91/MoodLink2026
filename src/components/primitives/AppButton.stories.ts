import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppButton from './AppButton.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/Button',
  component: AppButton,
  parameters: figmaDocs('button', '6044:2667', 'Hover and focus are CSS states (`:hover`, `:focus-visible`).'),
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
  },
  args: { variant: 'primary', disabled: false, loading: false },
  render: (args) => ({
    components: { AppButton },
    setup: () => ({ args }),
    template: '<AppButton v-bind="args">Explore Moodlink</AppButton>',
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

export const LongMalayLabel: Story = {
  name: 'Long label wraps to two lines',
  render: () => ({
    components: { AppButton },
    template:
      '<div lang="ms" style="max-width:375px"><AppButton>Tempah sesi konsultasi kesejahteraan percuma</AppButton></div>',
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { AppButton },
    template: `
      <div style="display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
        <AppButton>Primary</AppButton>
        <AppButton disabled>Primary disabled</AppButton>
        <AppButton loading>Primary</AppButton>
        <div style="display:flex;gap:16px;flex-wrap:wrap;grid-column:1/-1;padding:24px;border-radius:20px;background:var(--color-surface-accent)">
          <AppButton variant="secondary">Secondary</AppButton>
          <AppButton variant="secondary" disabled>Secondary disabled</AppButton>
          <AppButton variant="secondary" loading>Secondary</AppButton>
        </div>
      </div>`,
  }),
}
