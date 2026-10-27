import type { Meta, StoryObj } from '@storybook/vue3-vite'
import EmptyIllustration from './EmptyIllustration.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/empty-illustration',
  component: EmptyIllustration,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('empty-illustration', '6051:5027', 'Decorative (`aria-hidden`). Used by the pattern-empty-state and pattern-error layouts.') },
  argTypes: { name: { control: 'inline-radio', options: ['no-results', 'no-content', 'offline'] } },
  args: { name: 'no-content' },
  render: (args) => ({
    components: { EmptyIllustration },
    setup: () => ({ args }),
    template: '<EmptyIllustration v-bind="args" />',
  }),
} satisfies Meta<typeof EmptyIllustration>

export default meta
type Story = StoryObj<typeof meta>

export const NoContent: Story = {}
export const NoResults: Story = { args: { name: 'no-results' } }
export const Offline: Story = { args: { name: 'offline' } }
