import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LanguageSelector from './LanguageSelector.vue'
import { figmaDocs } from '../../stories/figma'

const meta = {
  title: 'Primitives/language-selector',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: { ...figmaDocs('language-selector', '6044:2699', 'Emits `toggle`; the language list lives in nav-menu-mobile.') },
  args: { label: 'EN', expanded: false },
  render: (args) => ({
    components: { LanguageSelector },
    setup: () => ({ args }),
    template: '<LanguageSelector v-bind="args" />',
  }),
} satisfies Meta<typeof LanguageSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Expanded: Story = { args: { expanded: true } }
