import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FooterLink from './FooterLink.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/footer-link',
  component: FooterLink,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('footer-link', '6044:2692', 'Use on the dark footer surface. Hover and focus are CSS states.'),
    backgrounds: { disable: true } },
  args: { label: 'Approach', href: '#', disabled: false },
  render: (args) => ({
    components: { FooterLink },
    setup: () => ({ args }),
    template: '<div style="padding:24px;background:var(--color-surface-inverse)"><FooterLink v-bind="args" /></div>',
  }),
} satisfies Meta<typeof FooterLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
