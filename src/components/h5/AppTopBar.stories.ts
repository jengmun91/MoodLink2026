import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppTopBar from './AppTopBar.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/app-top-bar',
  component: AppTopBar,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('app-top-bar', '6172:596') },
  args: {"title": "Consultation", "back": true},
  render: (args) => ({
    components: { AppTopBar },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><AppTopBar v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppTopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
