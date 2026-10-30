import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ChipButton from './ChipButton.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'H5/chip-button',
  component: ChipButton,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('chip-button', '6192:595') },
  args: {"label": "See more"},
  render: (args) => ({
    components: { ChipButton },
    setup: () => ({ args }),
    template: '<div style="max-width:390px"><ChipButton v-bind="args" /></div>',
  }),
} satisfies Meta<typeof ChipButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
