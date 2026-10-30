import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppCheckbox from './AppCheckbox.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/checkbox',
  component: AppCheckbox,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('checkbox', '6227:605') },
  args: {"modelValue": false, "error": false, "disabled": false},
  render: (args) => ({
    components: { AppCheckbox },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppCheckbox v-bind="args" v-model="args.modelValue" /></div>',
  }),
} satisfies Meta<typeof AppCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Checked: Story = { args: { modelValue: true } }
export const WithError: Story = { args: { error: true } }
export const Disabled: Story = { args: { disabled: true, modelValue: true } }
