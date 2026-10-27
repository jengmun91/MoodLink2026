import type { Meta, StoryObj } from '@storybook/vue3-vite'
import StatBlock from './StatBlock.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/stat-block',
  component: StatBlock,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('stat-block', '6044:3174', '`icon` maps to Figma `icon = yes | no`; `icon-name` maps to the Figma instance swap.') },
  argTypes: { iconName: { control: 'select', options: ['awareness', 'support', 'empowerment', 'connection'] } },
  args: { value: '13M+', label: 'people within reach', icon: true, iconName: 'awareness' },
  render: (args) => ({
    components: { StatBlock },
    setup: () => ({ args }),
    template: '<StatBlock v-bind="args" />',
  }),
} satisfies Meta<typeof StatBlock>

export default meta
type Story = StoryObj<typeof meta>

export const WithIcon: Story = {}
export const WithoutIcon: Story = { args: { icon: false } }

export const MetricsRow: Story = {
  name: 'Metrics row (4 → 2 → 1)',
  render: () => ({
    components: { StatBlock },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:24px">
        <StatBlock value="13M+" label="people within reach" icon-name="awareness" />
        <StatBlock value="80K+" label="employees supported" icon-name="support" />
        <StatBlock value="3M+" label="members enabled" icon-name="empowerment" />
        <StatBlock value="600+" label="organisations connected" icon-name="connection" />
      </div>`,
  }),
}
