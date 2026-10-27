import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CardStory from './CardStory.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/card-story',
  component: CardStory,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('card-story', '6044:3131', 'The whole card is one link. Hover is a CSS state. The image area shows the skeleton colour until a photo is passed in.') },
  argTypes: { tone: { control: 'inline-radio', options: ['aqua', 'lemon', 'lilac'] } },
  args: { tone: 'aqua', title: 'A culture that cares', copy: 'How early support helped a regional team build trust.', link: 'Read the story →', href: '#' },
  render: (args) => ({
    components: { CardStory },
    setup: () => ({ args }),
    template: '<div style="max-width:420px"><CardStory v-bind="args" /></div>',
  }),
} satisfies Meta<typeof CardStory>

export default meta
type Story = StoryObj<typeof meta>

export const Aqua: Story = {}
export const Lemon: Story = { args: { tone: 'lemon', title: 'Support that reaches everyone', copy: 'Connecting people to practical help, wherever work happens.' } }
export const Lilac: Story = { args: { tone: 'lilac', title: 'A healthier way to grow', copy: 'Turning insight into meaningful, lasting change.' } }
