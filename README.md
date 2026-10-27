# MoodLink Design System

Vue 3 components, design tokens and Storybook for the MoodLink website (Vue 3 + Vite) and H5 / EAP (uni-app), built from the Figma file **GOO001P – MoodLink MobileApp – Client V2.0**.

- Figma handover page: https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6059-6722
- Rules for developers and AI coding assistants: [`CLAUDE.md`](./CLAUDE.md)

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
| `src/styles/tokens.css` | 200+ design tokens generated from the Figma variables: colours, type scale, spacing, radius, elevation, motion, breakpoints. Mobile values (320–480px) by default, desktop values from 481px, Simplified Chinese overrides under `:lang(zh-Hans)`. |
| `src/styles/tokens.uni.css` | The same tokens in rpx for uni-app (1px = 2rpx). Regenerate with `npm run tokens:uniapp`. |
| `src/styles/base.css` | Self-hosted fonts (Plus Jakarta Sans for English and Malay, Noto Sans SC for Simplified Chinese), reset and `.ml-text-*` text classes. |
| `src/components/` | 21 components with the same names and props as Figma. |
| `src/assets/` | Logo, icon and illustration SVGs exported from Figma. |
| `figma/` | Code Connect templates, one per Figma component. |
| `.github/workflows/storybook-pages.yml` | Publishes Storybook to GitHub Pages on every push to `main`. |

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

```ts
import { AppButton, CardStory } from '@/components'
```

Not built yet: the 10 `feature-block` page sections and the `pattern-*` state layouts. Build them from these components following the Figma Key screens.

## Languages

Set the language on `<html>`: `lang="en"`, `lang="ms"` or `lang="zh-Hans"`. Fonts, line heights and letter spacing switch automatically. In Storybook, use the **Language** menu in the toolbar.

## Publish Storybook (GitHub Pages)

1. Push this repository to GitHub.
2. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. Storybook appears at `https://<username>.github.io/<repo>/`.
4. Add each component's Storybook page link to Figma (Dev resources, or the component's documentation link).

## Code Connect (Figma Dev Mode shows this code)

The templates in `figma/` map each Figma component to its Vue component. Code Connect requires a Figma **Organization or Enterprise** plan with a Full or Dev seat.

1. Create a Figma personal access token with the **Code Connect: write** and **File content: read** scopes.
2. Check the templates: `npm run figma:check`
3. Publish: `FIGMA_ACCESS_TOKEN=<token> npm run figma:publish`
4. In Figma Dev Mode, select a component: the snippet shows `<AppButton …>` instead of generated code.

To remove the mappings: `npx figma connect unpublish`.

## Updating tokens

`src/styles/tokens.css` is generated from the Figma variables (5 collections: Primitives, Semantic, Responsive, Static, Language). When a variable changes in Figma, regenerate the file rather than editing it, then run `npm run tokens:uniapp`.

## Notes

- Mobile header, footer and menu, and all hover / focus / disabled / loading and pattern states, are proposals pending client sign-off.
- `npm audit` reports advisories in the `@figma/code-connect` command-line tool's dependencies. It is a development tool only and is not part of the website build.
- The production CSS is about 400 kB because Noto Sans SC ships many `unicode-range` blocks; browsers only download the font files for characters actually used.
