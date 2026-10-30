import type { Meta, StoryObj } from '@storybook/vue3-vite'
import IconMentalHealth from './IconMentalHealth.vue'
import { figmaDocs } from '../../stories/figma'

const names = ['acceptance', 'anxiety', 'awareness', 'balance', 'connection', 'coping', 'courage', 'depression', 'emotions', 'empowerment', 'gratitude', 'healing', 'hope', 'inspiration', 'meditation', 'mind', 'recovery', 'renewal', 'resilience', 'self-care', 'strength', 'stress', 'support', 'therapy', 'wellness'] as const
const variants = ['flat', 'solid', 'outline', 'outline-color', 'outline-color-dark'] as const

const meta = {
  title: 'Primitives/icon-mental-health',
  component: IconMentalHealth,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('Mental Health / <Style> / <Concept>', '6042:2638', 'Dashed boxes mean the SVG has not been synced yet: run `FIGMA_ACCESS_TOKEN=… npm run figma:icons`.') },
  argTypes: {
    name: { control: 'select', options: names },
    variant: { control: 'inline-radio', options: variants },
  },
  args: { name: 'acceptance', variant: 'outline-color', size: 40 },
  render: (args) => ({ components: { IconMentalHealth }, setup: () => ({ args }), template: '<IconMentalHealth v-bind="args" />' }),
} satisfies Meta<typeof IconMentalHealth>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const AllIcons: Story = {
  name: 'All icons (25 × 5)',
  render: () => ({
    components: { IconMentalHealth },
    setup: () => ({ names, variants }),
    template: `
      <div style="display:grid;gap:24px">
        <section v-for="v in variants" :key="v" :style="v === 'outline-color-dark' ? 'padding:16px;border-radius:20px;background:var(--color-surface-inverse);color:var(--color-text-inverse)' : ''">
          <h3 class="ml-text-title" style="margin:0 0 12px">{{ v }}</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:12px">
            <figure v-for="n in names" :key="n" style="margin:0;display:flex;flex-direction:column;align-items:center;gap:6px">
              <IconMentalHealth :name="n" :variant="v" :size="40" />
              <figcaption class="ml-text-caption">{{ n }}</figcaption>
            </figure>
          </div>
        </section>
      </div>`,
  }),
}
