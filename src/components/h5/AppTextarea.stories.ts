import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppTextarea from './AppTextarea.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/textarea',
  component: AppTextarea,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('textarea', '6196:613') },
  args: {"label": "Describe your concern", "helper": "Do not include your IC number.", "modelValue": ""},
  render: (args) => ({
    components: { AppTextarea },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppTextarea v-bind="args" v-model="args.modelValue" /></div>',
  }),
} satisfies Meta<typeof AppTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithError: Story = { args: { error: 'Tell us a little about your concern.' } }
export const Disabled: Story = { args: { disabled: true } }
