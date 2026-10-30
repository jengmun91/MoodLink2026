import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ServiceShortcut from './ServiceShortcut.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/service-shortcut',
  component: ServiceShortcut,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('service-shortcut', '6185:546') },
  args: {"label": "Therapy", "icon": "therapy"},
  render: (args) => ({
    components: { ServiceShortcut },
    setup: () => ({ args }),
    template: '<div style="width:80px"><ServiceShortcut v-bind="args" /></div>',
  }),
} satisfies Meta<typeof ServiceShortcut>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
