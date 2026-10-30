import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/base.css'

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Language (sets <html lang>)',
      toolbar: {
        title: 'Language',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ms', title: 'Bahasa Melayu' },
          { value: 'zh-Hans', title: '简体中文' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { locale: 'en' },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute('lang', context.globals.locale ?? 'en')
      return story()
    },
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    viewport: {
      options: {
        mobile320: { name: 'Mobile 320', styles: { width: '320px', height: '700px' } },
        mobile360: { name: 'Mobile 360', styles: { width: '360px', height: '780px' } },
        mobile375: { name: 'Mobile 375', styles: { width: '375px', height: '812px' } },
        mobile390: { name: 'Mobile 390 (design base)', styles: { width: '390px', height: '844px' } },
        mobile480: { name: 'Mobile 480', styles: { width: '480px', height: '860px' } },
        desktop1440: { name: 'Desktop 1440', styles: { width: '1440px', height: '900px' } },
      },
    },
  },
}

export default preview
