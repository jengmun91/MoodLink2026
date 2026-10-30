import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PractitionerCard from './PractitionerCard.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/practitioner-card',
  component: PractitionerCard,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('practitioner-card', '6193:540') },
  args: {"name": "Dr Aisyah Rahman", "jobTitle": "Clinical Psychologist", "hospital": "Moodlink Care Centre", "grade": "MMC 12345", "department": "Mental health", "summary": "Supports adults with stress, anxiety and burnout.", "tags": ["Anxiety", "Stress", "Burnout"]},
  render: (args) => ({
    components: { PractitionerCard },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><PractitionerCard v-bind="args" /></div>',
  }),
} satisfies Meta<typeof PractitionerCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
