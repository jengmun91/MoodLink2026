import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MediaCard from './MediaCard.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/media-card',
  component: MediaCard,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('media-card', '6186:537') },
  args: {"title": "Managing stress at work", "meta": "5 min read"},
  render: (args) => ({
    components: { MediaCard },
    setup: () => ({ args }),
    template: '<div style="width:170px"><MediaCard v-bind="args" /></div>',
  }),
} satisfies Meta<typeof MediaCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
