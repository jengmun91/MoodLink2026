import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppSkeleton from './AppSkeleton.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/skeleton',
  component: AppSkeleton,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('skeleton', '6051:4919', 'Skeletons are `aria-hidden`; put `aria-busy="true"` on the loading container.') },
  argTypes: { shape: { control: 'inline-radio', options: ['text', 'heading', 'image', 'button', 'circle'] } },
  args: { shape: 'text' },
  render: (args) => ({
    components: { AppSkeleton },
    setup: () => ({ args }),
    template: '<div aria-busy="true" style="max-width:430px"><AppSkeleton v-bind="args" /></div>',
  }),
} satisfies Meta<typeof AppSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const TextLine: Story = { name: 'Text' }
export const Heading: Story = { args: { shape: 'heading' } }
export const ImageBlock: Story = {
  name: 'Image', args: { shape: 'image' } }
export const ButtonShape: Story = {
  name: 'Button', args: { shape: 'button' } }
export const Circle: Story = { args: { shape: 'circle' } }
