import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ConsultationRow from './ConsultationRow.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/consultation-row',
  component: ConsultationRow,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('consultation-row', '6193:643') },
  args: {"title": "Chat consultation", "price": "RM1.00", "icon": "message-circle", "tone": "teal", "divider": true},
  render: (args) => ({
    components: { ConsultationRow },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><ConsultationRow v-bind="args" /></div>',
  }),
} satisfies Meta<typeof ConsultationRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Violet: Story = { args: { tone: 'violet', icon: 'video', title: 'Video consultation' } }
export const Orange: Story = { args: { tone: 'orange', icon: 'phone', title: 'Voice consultation', divider: false } }
