import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppToast from './AppToast.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/toast',
  component: AppToast,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('toast', '6051:5005', 'Auto-dismisses after `motion-duration-toast` (5s), paused on hover. `duration: 0` keeps it open.') },
  argTypes: { type: { control: 'inline-radio', options: ['success', 'error', 'info'] } },
  args: { type: 'success', message: 'Message sent. We’ll be in touch soon.', duration: 0 },
  render: (args) => ({
    components: { AppToast },
    setup: () => ({ args }),
    template: '<AppToast v-bind="args" />',
  }),
} satisfies Meta<typeof AppToast>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {}
export const ErrorState: Story = {
  name: 'Error', args: { type: 'error', message: 'Couldn’t send. Please try again.' } }
export const Info: Story = { args: { type: 'info', message: 'Language changed to English.' } }
