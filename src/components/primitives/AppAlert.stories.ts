import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppAlert from './AppAlert.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/alert',
  component: AppAlert,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('alert', '6051:4989', 'Figma property `style` is the `variant` prop in code (`style` is reserved in Vue). Errors use `role="alert"`; others `role="status"`.') },
  argTypes: { type: { control: 'inline-radio', options: ['info', 'success', 'warning', 'error'] }, variant: { control: 'inline-radio', options: ['inline', 'banner'] } },
  args: { type: 'info', variant: 'inline', title: 'Heads up', message: 'Some resources are only available in English for now.' },
  render: (args) => ({
    components: { AppAlert },
    setup: () => ({ args }),
    template: '<div style="max-width:560px"><AppAlert v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}
export const Success: Story = { args: { type: 'success', title: 'Message sent', message: 'Thanks — our team will reply within 2 working days.' } }
export const Warning: Story = { args: { type: 'warning', title: 'You’re offline', message: 'Check your connection. We’ll reload when you’re back online.' } }
export const ErrorState: Story = {
  name: 'Error', args: { type: 'error', title: 'Something went wrong', message: 'We couldn’t load this content. Please try again.' } }
export const Banner: Story = { args: { type: 'warning', variant: 'banner', title: 'You’re offline', message: 'Check your connection.' } }
