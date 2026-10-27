import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import AppSpinner from './AppSpinner.vue'
import AppSkeleton from './AppSkeleton.vue'
import InputField from './InputField.vue'
import AppAlert from './AppAlert.vue'
import AppToast from './AppToast.vue'
import { figmaUrl } from '../../stories/figma'

const meta = {
  title: 'Primitives/Feedback & forms',
  parameters: {
    docs: {
      description: {
        component: [
          `[spinner](${figmaUrl('6051:4913')})`,
          `[skeleton](${figmaUrl('6051:4919')})`,
          `[input-field](${figmaUrl('6051:4940')})`,
          `[alert](${figmaUrl('6051:4989')})`,
          `[toast](${figmaUrl('6051:5005')})`,
          'These states are proposals pending client sign-off.',
        ].join(' · '),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Spinners: Story = {
  render: () => ({
    components: { AppSpinner },
    template: `
      <div style="display:flex;gap:24px;align-items:center">
        <AppSpinner size="sm" /><AppSpinner /><AppSpinner size="lg" />
        <span style="display:flex;gap:16px;padding:16px;border-radius:12px;background:var(--color-surface-inverse)">
          <AppSpinner tone="on-dark" size="sm" /><AppSpinner tone="on-dark" />
        </span>
      </div>`,
  }),
}

export const Skeletons: Story = {
  render: () => ({
    components: { AppSkeleton },
    template: `
      <div aria-busy="true" style="display:flex;flex-direction:column;gap:16px;max-width:430px">
        <AppSkeleton shape="image" />
        <AppSkeleton shape="heading" />
        <AppSkeleton shape="text" width="100%" />
        <AppSkeleton shape="text" />
        <div style="display:flex;gap:16px;align-items:center"><AppSkeleton shape="circle" /><AppSkeleton shape="button" /></div>
      </div>`,
  }),
}

export const InputFields: Story = {
  name: 'Input field',
  render: () => ({
    components: { InputField },
    setup: () => ({ a: ref(''), b: ref('name@company') }),
    template: `
      <div style="display:grid;gap:24px;max-width:360px">
        <InputField v-model="a" label="Work email" placeholder="name@company.com" helper="We’ll only use this to reply to you." />
        <InputField v-model="b" label="Work email" error="Enter a valid email address, e.g. name@company.com" />
        <InputField label="Work email" placeholder="name@company.com" disabled />
      </div>`,
  }),
}

export const Alerts: Story = {
  render: () => ({
    components: { AppAlert },
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:560px">
        <AppAlert type="info" title="Heads up" message="Some resources are only available in English for now." />
        <AppAlert type="success" title="Message sent" message="Thanks — our team will reply within 2 working days." />
        <AppAlert type="warning" title="You’re offline" message="Check your connection. We’ll reload when you’re back online." />
        <AppAlert type="error" title="Something went wrong" message="We couldn’t load this content. Please try again." />
        <AppAlert type="warning" variant="banner" title="You’re offline" message="Check your connection." />
      </div>`,
  }),
}

export const Toasts: Story = {
  render: () => ({
    components: { AppToast },
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start">
        <AppToast type="success" message="Message sent. We’ll be in touch soon." :duration="0" />
        <AppToast type="error" message="Couldn’t send. Please try again." :duration="0" />
        <AppToast type="info" message="Language changed to English." :duration="0" />
      </div>`,
  }),
}
