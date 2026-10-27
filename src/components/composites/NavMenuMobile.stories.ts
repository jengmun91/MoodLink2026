import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NavMenuMobile from './NavMenuMobile.vue'
import { figmaDocs } from '../../stories/figma'

const navItems = [
  { label: 'Approach', href: '#approach', active: true },
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

const meta = {
  title: 'Composites/nav-menu-mobile',
  component: NavMenuMobile,
  tags: ['autodocs'],
  globals: { viewport: { value: 'mobile375' } },
  parameters: { ...figmaDocs('nav-menu-mobile', '6071:9311', '`role="dialog"`, focus trapped, Esc closes. Emits `close` and `selectLanguage`.'),
    layout: 'fullscreen' },
  args: { items: navItems, languageOpen: false },
  render: (args) => ({
    components: { NavMenuMobile },
    setup: () => ({ args }),
    template: '<NavMenuMobile v-bind="args" />',
  }),
} satisfies Meta<typeof NavMenuMobile>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {}
export const LanguageOpen: Story = { name: 'Language open', args: { languageOpen: true } }
