import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CardStory from './CardStory.vue'
import StatBlock from './StatBlock.vue'
import { figmaUrl } from '../../stories/figma'

const meta = {
  title: 'Primitives/Cards & stats',
  parameters: {
    docs: {
      description: {
        component: `[card-story](${figmaUrl('6044:3131')}) · [stat-block](${figmaUrl('6044:3174')}). Image placeholders show the skeleton colour until real photos are passed in.`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const StoryCards: Story = {
  name: 'Card story (aqua / lemon / lilac)',
  render: () => ({
    components: { CardStory },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px">
        <CardStory tone="aqua" title="A culture that cares" copy="How early support helped a regional team build trust." />
        <CardStory tone="lemon" title="Support that reaches everyone" copy="Connecting people to practical help, wherever work happens." />
        <CardStory tone="lilac" title="A healthier way to grow" copy="Turning insight into meaningful, lasting change." />
      </div>`,
  }),
}

export const StatBlocks: Story = {
  name: 'Stat block',
  render: () => ({
    components: { StatBlock },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:24px">
        <StatBlock value="13M+" label="people within reach" icon="awareness" />
        <StatBlock value="80K+" label="employees supported" icon="support" />
        <StatBlock value="3M+" label="members enabled" icon="empowerment" />
        <StatBlock value="600+" label="organisations connected" />
      </div>`,
  }),
}
