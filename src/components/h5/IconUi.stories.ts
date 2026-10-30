import type { Meta, StoryObj } from '@storybook/vue3-vite'
import IconUi from './IconUi.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/icon-ui',
  component: IconUi,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('icon-ui', '6170:446') },
  args: {"name": "home"},
  render: (args) => ({
    components: { IconUi },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><IconUi v-bind="args" /></div>',
  }),
} satisfies Meta<typeof IconUi>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
