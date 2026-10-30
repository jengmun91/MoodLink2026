import type { Meta, StoryObj } from '@storybook/vue3-vite'
import IconService from './IconService.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/icon-service',
  component: IconService,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('icon-service', '6186:1799') },
  args: {"name": "therapy"},
  render: (args) => ({
    components: { IconService },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><IconService v-bind="args" /></div>',
  }),
} satisfies Meta<typeof IconService>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
