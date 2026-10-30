import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LogoMark from './LogoMark.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/logo-mark',
  component: LogoMark,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('logo-mark', '6313:3021') },
  args: {"theme": "default", "size": 48},
  render: (args) => ({
    components: { LogoMark },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><LogoMark v-bind="args" /></div>',
  }),
} satisfies Meta<typeof LogoMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const OnDark: Story = {
  args: { theme: 'on-dark' },
  decorators: [() => ({ template: '<div style="padding:16px;background:var(--color-surface-inverse)"><story /></div>' })],
}
