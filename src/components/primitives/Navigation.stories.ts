import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavLink from './NavLink.vue'
import FooterLink from './FooterLink.vue'
import LanguageSelector from './LanguageSelector.vue'
import MenuButton from './MenuButton.vue'
import NavItemMobile from './NavItemMobile.vue'
import { figmaUrl } from '../../stories/figma'

const meta = {
  title: 'Primitives/Navigation',
  parameters: {
    docs: {
      description: {
        component: [
          `[nav-link](${figmaUrl('6044:2683')})`,
          `[footer-link](${figmaUrl('6044:2692')})`,
          `[language-selector](${figmaUrl('6044:2699')})`,
          `[menu-button](${figmaUrl('6070:9196')})`,
          `[nav-item-mobile](${figmaUrl('6071:9208')})`,
        ].join(' · '),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const NavLinks: Story = {
  render: () => ({
    components: { NavLink },
    template: `
      <nav aria-label="Example" style="display:flex;gap:12px;flex-wrap:wrap">
        <NavLink active>Approach</NavLink>
        <NavLink>Platform</NavLink>
        <NavLink>Solutions</NavLink>
        <NavLink disabled>Impact</NavLink>
      </nav>`,
  }),
}

export const FooterLinks: Story = {
  render: () => ({
    components: { FooterLink },
    template: `
      <div style="display:flex;flex-direction:column;gap:4px;padding:24px;background:var(--color-surface-inverse)">
        <FooterLink>Approach</FooterLink>
        <FooterLink>Platform</FooterLink>
        <FooterLink disabled>Careers</FooterLink>
      </div>`,
  }),
}

export const LanguageSelectorButton: Story = {
  name: 'Language selector',
  render: () => ({ components: { LanguageSelector }, template: '<LanguageSelector label="EN" />' }),
}

export const MenuButtons: Story = {
  name: 'Menu button',
  render: () => ({
    components: { MenuButton },
    template: '<div style="display:flex;gap:16px"><MenuButton /><MenuButton open /></div>',
  }),
}

export const NavItemsMobile: Story = {
  name: 'Nav item (mobile)',
  render: () => ({
    components: { NavItemMobile },
    template: `
      <div style="display:flex;flex-direction:column;gap:4px;max-width:343px">
        <NavItemMobile active>Approach</NavItemMobile>
        <NavItemMobile>Platform</NavItemMobile>
        <NavItemMobile>Tentang Kami dan rakan kongsi serantau kami</NavItemMobile>
      </div>`,
  }),
}
