<script setup lang="ts">
// Demo page: shows the components together. Run `npm run dev`.
// Feature-block sections (hero, platform cards, …) are not built yet — see README.
import { ref, watchEffect } from 'vue'
import {
  AppAlert,
  AppButton,
  CardStory,
  FooterMain,
  HeaderMain,
  StatBlock,
} from './components'

const lang = ref<'en' | 'ms' | 'zh-Hans'>('en')
watchEffect(() => document.documentElement.setAttribute('lang', lang.value))
</script>

<template>
  <HeaderMain
    :current-language="lang"
    :language-short="lang === 'zh-Hans' ? '中文' : lang.toUpperCase()"
    @select-language="(code) => (lang = code)"
  />

  <main class="demo">
    <section class="demo__intro">
      <p class="ml-text-label demo__eyebrow">WELLBEING, BUILT AROUND PEOPLE</p>
      <h1 class="ml-text-display">A more human way to wellbeing.</h1>
      <p class="ml-text-body-lg">
        Everyday support, specialist care and healthier work—connected around your people.
      </p>
      <div class="demo__actions">
        <AppButton>Explore Moodlink</AppButton>
      </div>
    </section>

    <section class="demo__stats" aria-label="Impact">
      <StatBlock value="13M+" label="people within reach" icon-name="awareness" />
      <StatBlock value="80K+" label="employees supported" icon-name="support" />
      <StatBlock value="3M+" label="members enabled" icon-name="empowerment" />
      <StatBlock value="600+" label="organisations connected" icon-name="connection" />
    </section>

    <section class="demo__cards" aria-label="Partner stories">
      <CardStory
        tone="aqua"
        title="A culture that cares"
        copy="How early support helped a regional team build trust."
      />
      <CardStory
        tone="lemon"
        title="Support that reaches everyone"
        copy="Connecting people to practical help, wherever work happens."
      />
      <CardStory
        tone="lilac"
        title="A healthier way to grow"
        copy="Turning insight into meaningful, lasting change."
      />
    </section>

    <AppAlert
      type="info"
      title="Starter project"
      message="Built from the MoodLink Figma design system. See Storybook for every state."
    />
  </main>

  <FooterMain />
</template>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: var(--space-section-gap);
  max-width: var(--grid-container);
  margin: 0 auto;
  padding: var(--space-section-padding-y) var(--space-page-margin);
}
.demo__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-stack-sm);
  max-width: 860px;
}
.demo__intro p {
  margin: 0;
}
.demo__eyebrow {
  color: var(--color-text-accent);
}
.demo__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-stack-sm);
  padding-top: var(--space-stack-xs);
}
.demo__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--space-grid-gap);
}
.demo__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-grid-gap);
}
</style>
