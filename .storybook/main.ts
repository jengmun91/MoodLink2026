import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  framework: { name: '@storybook/vue3-vite', options: {} },
  docs: { defaultName: 'Docs' },
}

export default config
