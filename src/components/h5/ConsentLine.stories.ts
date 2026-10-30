import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ConsentLine from './ConsentLine.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/consent-line',
  component: ConsentLine,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('consent-line', '6195:705') },
  args: {"modelValue": false, "showError": false},
  render: (args) => ({
    components: { ConsentLine },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><ConsentLine v-bind="args" v-model="args.modelValue" /></div>',
  }),
} satisfies Meta<typeof ConsentLine>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithError: Story = { args: { showError: true } }
