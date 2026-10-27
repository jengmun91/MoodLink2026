import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppIcon from './AppIcon.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/icon',
  component: AppIcon,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('icon', '6044:2930', 'Sizes: lg 96 · md 40 · sm 24. Decorative by default (`aria-hidden`); pass `label` when the icon carries meaning.') },
  argTypes: { name: { control: 'select', options: ['awareness', 'support', 'empowerment', 'connection'] }, size: { control: 'inline-radio', options: ['lg', 'md', 'sm'] } },
  args: { name: 'awareness', size: 'lg' },
  render: (args) => ({
    components: { AppIcon },
    setup: () => ({ args }),
    template: '<AppIcon v-bind="args" />',
  }),
} satisfies Meta<typeof AppIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllIcons: Story = {
  name: 'All icons and sizes',
  render: () => ({
    components: { AppIcon },
    setup: () => ({ names: ['awareness', 'support', 'empowerment', 'connection'] }),
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:24px">
        <figure v-for="n in names" :key="n" style="margin:0;display:flex;flex-direction:column;align-items:center;gap:12px">
          <AppIcon :name="n" size="lg" />
          <div style="display:flex;gap:12px;align-items:flex-end"><AppIcon :name="n" size="md" /><AppIcon :name="n" size="sm" /></div>
          <figcaption class="ml-text-label">{{ n }}</figcaption>
        </figure>
      </div>`,
  }),
}
