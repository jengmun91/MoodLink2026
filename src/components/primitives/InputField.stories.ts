import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import InputField from './InputField.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/input-field',
  component: InputField,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('input-field', '6051:4940', 'Figma `state = error` is the `error` prop (the message); focus is a CSS state.') },
  args: { label: 'Work email', placeholder: 'name@company.com', helper: 'We’ll only use this to reply to you.', disabled: false },
  render: (args) => ({
    components: { InputField },
    setup: () => ({ args, value: ref('') }),
    template: '<div style="max-width:360px"><InputField v-model="value" v-bind="args" /></div>',
  }),
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ErrorState: Story = {
  name: 'Error', args: { error: 'Enter a valid email address, e.g. name@company.com' } }
export const Disabled: Story = { args: { disabled: true } }
