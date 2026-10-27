import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AppLogo from './AppLogo.vue'
import AppIcon from './AppIcon.vue'
import AppDivider from './AppDivider.vue'
import EmptyIllustration from './EmptyIllustration.vue'
import { figmaUrl } from '../../stories/figma'

const meta = {
  title: 'Primitives/Brand & media',
  parameters: {
    docs: {
      description: {
        component: [
          `[logo](${figmaUrl('6044:2803')})`,
          `[icon](${figmaUrl('6044:2930')})`,
          `[divider](${figmaUrl('6044:2706')})`,
          `[empty-illustration](${figmaUrl('6051:5027')})`,
        ].join(' · '),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Logo: Story = {
  render: () => ({
    components: { AppLogo },
    template: `
      <div style="display:flex;flex-direction:column;gap:24px">
        <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap">
          <AppLogo size="lg" /><AppLogo size="md" /><AppLogo size="sm" />
        </div>
        <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;padding:24px;border-radius:20px;background:var(--color-surface-inverse)">
          <AppLogo theme="on-dark" size="md" /><AppLogo theme="on-dark" size="sm" />
        </div>
      </div>`,
  }),
}

export const Icons: Story = {
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

export const Dividers: Story = {
  render: () => ({
    components: { AppDivider },
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;max-width:480px">
        <AppDivider />
        <AppDivider tone="accent" />
        <div style="display:flex;gap:24px;height:90px"><span>13M+</span><AppDivider orientation="vertical" /><span>80K+</span></div>
        <div style="padding:16px;background:var(--color-surface-inverse)"><AppDivider tone="on-dark" /></div>
      </div>`,
  }),
}

export const EmptyIllustrations: Story = {
  render: () => ({
    components: { EmptyIllustration },
    template:
      '<div style="display:flex;gap:24px;flex-wrap:wrap"><EmptyIllustration name="no-results" /><EmptyIllustration name="no-content" /><EmptyIllustration name="offline" /></div>',
  }),
}
