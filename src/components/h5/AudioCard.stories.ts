import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AudioCard from './AudioCard.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/audio-card',
  component: AudioCard,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('audio-card', '6186:576') },
  args: {"title": "Breathing for calm", "meta": "10 min · Audio"},
  render: (args) => ({
    components: { AudioCard },
    setup: () => ({ args }),
    template: '<div style="width:170px"><AudioCard v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AudioCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
