# MoodLink Design System · v2.0

Vue 3 components, design tokens and Storybook for the MoodLink website (Vue 3 + Vite) and H5 / EAP (uni-app), built from the Figma file **GOO001P – MoodLink MobileApp – Client V2.0**.

- Figma handover page: https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=6059-6722
- Rules for developers and AI coding assistants: [`CLAUDE.md`](./CLAUDE.md)
- What changed since v1: [`CHANGELOG.md`](./CHANGELOG.md)

## Quick start

Requires Node.js 20 or later.

```bash
npm install
npm run storybook   # component library at http://localhost:6006
npm run dev         # demo page at http://localhost:5173
npm run build       # type-check + production build
```

## What's inside

| Path | Contents |
|---|---|
| `tokens/figma-variables.json` | Snapshot of the five `MoodLink DS / …` Figma variable collections (265 variables). |
| `src/styles/tokens.css` | Generated from the snapshot: Primitives, Semantic, Responsive (320 · 360 · 375 · 390 · 480 · 1440), Static and Language (en · ms · zh-Hans). Mobile values by default, desktop from 481px, Simplified Chinese overrides under `:lang(zh-Hans)`. |
| `src/styles/tokens.uni.css` | The same tokens in rpx for uni-app (design base 390px: rpx = px × 750 / 390). |
| `src/styles/base.css` | Self-hosted fonts (Plus Jakarta Sans for English and Malay, Noto Sans SC for Simplified Chinese), reset and `.ml-text-*` text classes. |
| `src/components/` | 21 components with the same names and props as Figma. |
| `src/assets/` | Logo, icon and illustration SVGs exported from Figma. |
| `figma/` | Code Connect templates, one per Figma component. |
| `scripts/` | Token generators and the Figma variable export script. |
| `.storybook/` | Storybook config: language toolbar and 320 / 360 / 375 / 390 / 480 / 1440 viewports. |
| `.github/workflows/storybook-pages.yml` | Publishes Storybook to GitHub Pages on every push to `main`. |

> The folders starting with a dot (`.storybook`, `.github`, `.cursor`, `.vscode`) are hidden on macOS. Press **Cmd + Shift + .** in Finder to see them, and make sure they are committed.

### Components

| Figma | Vue | Figma | Vue |
|---|---|---|---|
| `button` | `AppButton` | `card-story` | `CardStory` |
| `nav-link` | `NavLink` | `stat-block` | `StatBlock` |
| `footer-link` | `FooterLink` | `spinner` | `AppSpinner` |
| `language-selector` | `LanguageSelector` | `skeleton` | `AppSkeleton` |
| `menu-button` | `MenuButton` | `input-field` | `InputField` |
| `nav-item-mobile` | `NavItemMobile` | `alert` | `AppAlert` |
| `divider` | `AppDivider` | `toast` | `AppToast` |
| `logo` | `AppLogo` | `empty-illustration` | `EmptyIllustration` |
| `icon` | `AppIcon` | `header-main` | `HeaderMain` |
| `card-feature` | `CardFeature` | `nav-menu-mobile` | `NavMenuMobile` |
| | | `footer-main` | `FooterMain` |

```vue
<script setup lang="ts">
import { AppButton, StatBlock } from '@/components'
</script>

<template>
  <AppButton label="Explore Moodlink" />
  <StatBlock value="13M+" label="people within reach" icon-name="awareness" />
</template>
```

Props use the Figma property names. The one exception is `alert` › `style`, which is the `variant` prop because `style` is reserved in Vue.

Not built yet: the 10 `feature-block` page sections and the `pattern-*` state layouts. Build them from these components following the Figma Key screens.

## Languages

Set the language on `<html>`: `lang="en"`, `lang="ms"` or `lang="zh-Hans"`. Fonts, line heights and letter spacing switch automatically. In Storybook, use the **Language** menu in the toolbar.

## Publish Storybook (GitHub Pages)

1. Push this repository to GitHub, including the hidden folders.
2. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site, checks the Code Connect files and publishes Storybook to https://jengmun91.github.io/MoodLink2026/
4. Add each component's Storybook link to Figma: select the component set → Dev Mode → **Dev resources** → paste the link.

Each component has one Storybook page. Add the path below to `https://jengmun91.github.io/MoodLink2026/`:

| Figma component | Node | Storybook page |
|---|---|---|
| `card-feature` | 6044:3399 | `?path=/docs/composites-card-feature--docs` |
| `footer-main` | 6044:3355 | `?path=/docs/composites-footer-main--docs` |
| `header-main` | 6044:3242 | `?path=/docs/composites-header-main--docs` |
| `nav-menu-mobile` | 6071:9311 | `?path=/docs/composites-nav-menu-mobile--docs` |
| `alert` | 6051:4989 | `?path=/docs/primitives-alert--docs` |
| `button` | 6044:2667 | `?path=/docs/primitives-button--docs` |
| `card-story` | 6044:3131 | `?path=/docs/primitives-card-story--docs` |
| `divider` | 6044:2706 | `?path=/docs/primitives-divider--docs` |
| `empty-illustration` | 6051:5027 | `?path=/docs/primitives-empty-illustration--docs` |
| `footer-link` | 6044:2692 | `?path=/docs/primitives-footer-link--docs` |
| `icon` | 6044:2930 | `?path=/docs/primitives-icon--docs` |
| `input-field` | 6051:4940 | `?path=/docs/primitives-input-field--docs` |
| `language-selector` | 6044:2699 | `?path=/docs/primitives-language-selector--docs` |
| `logo` | 6044:2803 | `?path=/docs/primitives-logo--docs` |
| `menu-button` | 6070:9196 | `?path=/docs/primitives-menu-button--docs` |
| `nav-item-mobile` | 6071:9208 | `?path=/docs/primitives-nav-item-mobile--docs` |
| `nav-link` | 6044:2683 | `?path=/docs/primitives-nav-link--docs` |
| `skeleton` | 6051:4919 | `?path=/docs/primitives-skeleton--docs` |
| `spinner` | 6051:4913 | `?path=/docs/primitives-spinner--docs` |
| `stat-block` | 6044:3174 | `?path=/docs/primitives-stat-block--docs` |
| `toast` | 6051:5005 | `?path=/docs/primitives-toast--docs` |

## Code Connect (Figma Dev Mode shows this code)

The templates in `figma/` map each Figma component to its Vue component, and each one links to its source file on GitHub, so Dev Mode shows a **View source** link. Code Connect requires a Figma **Organization or Enterprise** plan with a Full or Dev seat on the team that owns the file.

1. In Figma, open **Settings → Security → Personal access tokens** and create a token with the **Code Connect: Write** and **File content: Read** scopes.
2. Check the templates: `npm run figma:check`
3. Publish: `FIGMA_ACCESS_TOKEN=<token> npm run figma:publish`
4. In Figma Dev Mode, select a component: the code panel shows `<AppButton label="…" />` instead of generated code.

To remove the mappings: `npx figma connect unpublish`.

## Updating tokens

`src/styles/tokens.css` is generated, so never edit it by hand. When a variable changes in Figma:

1. Refresh `tokens/figma-variables.json` by running `scripts/figma-export-variables.js` inside Figma (or ask Claude, with the Figma connector, to refresh the snapshot).
2. Run `npm run tokens`. It writes `tokens.css` and `tokens.uni.css`.
3. Run `npm run tokens:check`. It must pass (CI runs it too and fails on hand edits or a stale build).
4. Review the diff and commit.

## Notes

- Mobile header, footer and menu, and all hover / focus / disabled / loading and pattern states, are proposals pending client sign-off.
- `npm audit` reports advisories in the `@figma/code-connect` command-line tool's dependencies. It is a development tool only and is not part of the website build.
- The production CSS is about 400 kB because Noto Sans SC ships many `unicode-range` blocks; browsers only download the font files for characters actually used.
