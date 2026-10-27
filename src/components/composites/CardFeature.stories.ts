import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CardFeature from './CardFeature.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Composites/card-feature',
  component: CardFeature,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('card-feature', '6044:3399', 'Hover is a CSS state.') },
  argTypes: { type: { control: 'inline-radio', options: ['insight', 'people', 'platform'] } },
  args: { type: 'insight', title: 'A more connected approach', copy: 'Practical ways to make support easier to find.' },
  render: (args) => ({
    components: { CardFeature },
    setup: () => ({ args }),
    template: '<div style="max-width:420px"><CardFeature v-bind="args" /></div>',
  }),
} satisfies Meta<typeof CardFeature>

export default meta
type Story = StoryObj<typeof meta>

export const Insight: Story = {}
export const People: Story = { args: { type: 'people', title: 'Meet our team', copy: 'People shaping the future of workplace wellbeing.' } }
export const Platform: Story = {
  args: { type: 'platform', title: 'For people', copy: 'Accessible wellbeing and specialist support, designed around real lives.' },
  decorators: [() => ({ template: '<div style="padding:16px;border-radius:24px;background:var(--color-surface-fresh)"><story /></div>' })],
}
