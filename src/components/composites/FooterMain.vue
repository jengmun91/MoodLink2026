<script setup lang="ts">
// Figma: footer-main · node 6044:3355 · viewport = desktop | mobile
// One component: columns wrap on mobile. Mobile layout is a proposal.
import AppLogo from '../primitives/AppLogo.vue'
import FooterLink from '../primitives/FooterLink.vue'

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

withDefaults(
  defineProps<{
    eyebrow?: string
    headline?: string
    email?: string
    columns?: FooterColumn[]
  }>(),
  {
    eyebrow: 'LET’S BUILD A HEALTHIER WORKPLACE',
    headline: 'Wellbeing, in reach.',
    email: 'hello@moodlink.asia',
    columns: () => [
      {
        title: 'Explore',
        links: [
          { label: 'Approach', href: '#approach' },
          { label: 'Platform', href: '#platform' },
          { label: 'Solutions', href: '#solutions' },
          { label: 'Resources', href: '#resources' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Impact', href: '#impact' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Malaysia', href: '#malaysia' },
          { label: 'Singapore', href: '#singapore' },
          { label: 'Regional', href: '#regional' },
          { label: 'LinkedIn', href: '#linkedin' },
        ],
      },
    ],
  },
)
</script>

<template>
  <footer class="ml-footer">
    <div class="ml-footer__top">
      <div class="ml-footer__intro">
        <p class="ml-text-label ml-footer__eyebrow">{{ eyebrow }}</p>
        <p class="ml-text-display ml-footer__headline">{{ headline }}</p>
        <a class="ml-text-body-lg ml-footer__email" :href="`mailto:${email}`">{{ email }}</a>
      </div>
      <nav class="ml-footer__columns" aria-label="Footer">
        <div v-for="column in columns" :key="column.title" class="ml-footer__column">
          <p class="ml-text-title-sm ml-footer__heading">{{ column.title }}</p>
          <ul>
            <li v-for="link in column.links" :key="link.href">
              <FooterLink :href="link.href">{{ link.label }}</FooterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <AppLogo theme="on-dark" size="lg" class="ml-footer__logo" />
  </footer>
</template>

<style scoped>
.ml-footer {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-32);
  padding: var(--space-scale-48) var(--space-page-margin) var(--space-scale-32);
  background: var(--color-surface-inverse);
  color: var(--color-text-inverse);
}
.ml-footer__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-scale-32) var(--space-scale-48);
}
.ml-footer__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  flex: 1 1 320px;
  max-width: 720px;
}
.ml-footer__eyebrow,
.ml-footer__headline {
  margin: 0;
}
.ml-footer__eyebrow {
  color: var(--color-text-on-dark-accent);
}
.ml-footer__email {
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}
.ml-footer__email:hover {
  text-decoration: underline;
}
.ml-footer__email:focus-visible {
  outline: var(--border-width-focus) solid var(--color-border-focus);
  outline-offset: 2px;
}
.ml-footer__columns {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-scale-24) var(--space-scale-20);
}
.ml-footer__column {
  width: 170px;
}
.ml-footer__heading {
  margin: 0 0 var(--space-scale-12);
}
.ml-footer__column ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-scale-2);
  margin: 0;
  padding: 0;
  list-style: none;
}
.ml-footer__logo {
  width: 100% !important;
  max-width: 1256px;
  align-self: center;
}

@media (min-width: 481px) {
  .ml-footer {
    gap: var(--space-scale-96);
    padding: var(--space-scale-64) var(--space-page-margin) var(--space-scale-64);
  }
  .ml-footer__columns {
    padding-top: var(--space-scale-96);
  }
}
</style>
