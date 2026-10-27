import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FooterMain from './FooterMain.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Composites/footer-main',
  component: FooterMain,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('footer-main', '6044:3355', 'Layout switches with CSS at 481px (mobile is a proposal pending sign-off).'),
    layout: 'fullscreen' },
  render: (args) => ({
    components: { FooterMain },
    setup: () => ({ args }),
    template: '<FooterMain v-bind="args" />',
  }),
} satisfies Meta<typeof FooterMain>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}
export const Mobile: Story = { globals: { viewport: { value: 'mobile375' } } }
