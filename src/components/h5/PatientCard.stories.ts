import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PatientCard from './PatientCard.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/patient-card',
  component: PatientCard,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('patient-card', '6196:634') },
  args: {"name": "Tan Wei Ling", "details": "Female · 32", "phone": "+60 12-*** 4567"},
  render: (args) => ({
    components: { PatientCard },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><PatientCard v-bind="args" /></div>',
  }),
} satisfies Meta<typeof PatientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
