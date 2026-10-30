import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SectionTitle from './SectionTitle.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/section-title',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('section-title', '6185:601') },
  args: {"title": "Wellbeing"},
  render: (args) => ({
    components: { SectionTitle },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><SectionTitle v-bind="args" /></div>',
  }),
} satisfies Meta<typeof SectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
