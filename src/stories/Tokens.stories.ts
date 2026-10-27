import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { figmaUrl } from './figma'

const meta = {
  title: 'Foundations/Tokens',
  parameters: {
    docs: {
      description: {
        component: `Generated from the Figma variables — [Variables page](${figmaUrl('6032:1023')}). Switch Language in the toolbar to see the Simplified Chinese font, line heights and letter spacing.`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const colours = [
  'text-primary', 'text-secondary', 'text-accent', 'text-emphasis',
  'surface-base', 'surface-subtle', 'surface-calm', 'surface-calm-tint', 'surface-fresh', 'surface-fresh-tint',
  'surface-optimistic', 'surface-optimistic-tint', 'surface-accent', 'surface-brand', 'surface-inverse',
  'border-default', 'border-focus', 'action-primary-bg', 'action-primary-bg-hover', 'action-secondary-bg-hover',
  'status-success', 'status-warning', 'status-error', 'status-info',
]

export const Colours: Story = {
  render: () => ({
    setup: () => ({ colours }),
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px">
        <figure v-for="c in colours" :key="c" style="margin:0;border:1.5px solid var(--color-border-default);border-radius:16px;overflow:hidden">
          <div :style="{ height: '72px', background: 'var(--color-' + c + ')' }" />
          <figcaption class="ml-text-caption" style="padding:10px 12px">--color-{{ c }}</figcaption>
        </figure>
      </div>`,
  }),
}

const scale = ['display', 'display-sm', 'h1', 'h2', 'h3', 'h4', 'title', 'title-sm', 'body-lg', 'body', 'body-sm', 'label', 'caption']

export const Typography: Story = {
  render: () => ({
    setup: () => ({ scale }),
    template: `
      <div style="display:flex;flex-direction:column;gap:20px">
        <div v-for="t in scale" :key="t" style="display:grid;grid-template-columns:120px 1fr;gap:16px;align-items:baseline">
          <code class="ml-text-caption">{{ t }}</code>
          <span :class="'ml-text-' + t">A more human way to wellbeing · 以更人性化的方式关爱身心健康</span>
        </div>
      </div>`,
  }),
}
