import type { Meta, StoryObj } from '@storybook/vue3-vite'
import HeaderMain from './HeaderMain.vue'
import NavMenuMobile from './NavMenuMobile.vue'
import FooterMain from './FooterMain.vue'
import CardFeature from './CardFeature.vue'
import { figmaUrl } from '../../stories/figma'

const meta = {
  title: 'Composites',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          `[header-main](${figmaUrl('6044:3242')})`,
          `[nav-menu-mobile](${figmaUrl('6071:9311')})`,
          `[footer-main](${figmaUrl('6044:3355')})`,
          `[card-feature](${figmaUrl('6044:3399')})`,
          'Switch the viewport to Mobile 375 to see the mobile header and footer (proposals).',
        ].join(' · '),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  render: () => ({ components: { HeaderMain }, template: '<HeaderMain />' }),
}

export const HeaderMobile: Story = {
  name: 'Header (mobile 375)',
  globals: { viewport: { value: 'mobile375' } },
  render: () => ({ components: { HeaderMain }, template: '<HeaderMain />' }),
}

const navItems = [
  { label: 'Approach', href: '#approach', active: true },
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

export const MobileMenu: Story = {
  name: 'Mobile menu (open)',
  globals: { viewport: { value: 'mobile375' } },
  render: () => ({
    components: { NavMenuMobile },
    setup: () => ({ navItems }),
    template: '<NavMenuMobile :items="navItems" />',
  }),
}

export const MobileMenuLanguages: Story = {
  name: 'Mobile menu (language open)',
  globals: { viewport: { value: 'mobile375' } },
  render: () => ({
    components: { NavMenuMobile },
    setup: () => ({ navItems }),
    template: '<NavMenuMobile :items="navItems" language-open />',
  }),
}

export const Footer: Story = {
  render: () => ({ components: { FooterMain }, template: '<FooterMain />' }),
}

export const FeatureCards: Story = {
  name: 'Card feature (insight / people / platform)',
  parameters: { layout: 'padded' },
  render: () => ({
    components: { CardFeature },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;align-items:start">
        <CardFeature type="insight" title="A more connected approach" copy="Practical ways to make support easier to find." />
        <CardFeature type="people" title="Meet our team" copy="People shaping the future of workplace wellbeing." />
        <div style="padding:16px;border-radius:24px;background:var(--color-surface-fresh)">
          <CardFeature type="platform" title="For people" copy="Accessible wellbeing and specialist support, designed around real lives." />
        </div>
      </div>`,
  }),
}
