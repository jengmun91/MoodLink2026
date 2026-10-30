import type { Meta, StoryObj } from '@storybook/vue3-vite'
import HeroBanner from './HeroBanner.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/hero-banner',
  component: HeroBanner,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('hero-banner', '6186:597') },
  args: {"tagline": "New this month", "title": "Moodlink EAP", "heading": "Talk to someone today", "slides": 3, "current": 1},
  render: (args) => ({
    components: { HeroBanner },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><HeroBanner v-bind="args" /></div>',
  }),
} satisfies Meta<typeof HeroBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
