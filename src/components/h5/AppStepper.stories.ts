import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppStepper from './AppStepper.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/stepper',
  component: AppStepper,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('stepper', '6195:584') },
  args: {"current": 1},
  render: (args) => ({
    components: { AppStepper },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppStepper v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppStepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Step2: Story = { args: { current: 2 } }
