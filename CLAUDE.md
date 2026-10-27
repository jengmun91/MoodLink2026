# MoodLink — instructions for AI coding assistants

This repository is the MoodLink design system starter (Vue 3 + Vite + Storybook). The rules below apply to every UI change.

## This repository

| Path | What it is |
|---|---|
| `src/styles/tokens.css` | All design tokens, generated from Figma variables. Do not edit by hand. |
| `src/styles/tokens.uni.css` | Same tokens in rpx for uni-app (`npm run tokens:uniapp`). |
| `src/styles/base.css` | Fonts, reset and `.ml-text-<token>` text classes. |
| `src/components/primitives/` | Primitive components (one file per Figma component). |
| `src/components/composites/` | Composite components. |
| `src/components/index.ts` | Import everything from `@/components`. |
| `*.stories.ts` | Storybook stories (`npm run storybook`). |
| `figma/*.figma.ts` | Code Connect templates mapped to Figma node IDs. |

Not built yet: the `feature-block` page sections and the `pattern-*` layouts. Build them from the primitives and composites above, following the Figma Key screens.

---

Generated 27 Oct 2026 from the Figma file **GOO001P – MoodLink MobileApp – Client V2.0**.

## 1. Source of truth

- Design: Figma file `Eo3tD5Lo2odmoWGf0Mfndz`. Start at the handover page:
  https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=6059-6722
- Tokens: Figma variables in five collections named `MoodLink DS / …`. Every variable has Web code syntax, so Dev Mode and the Figma MCP server return names such as `var(--color-text-primary)`.
- If code and Figma disagree, Figma wins. Report the mismatch; do not invent a value.
- The client-approved page (node `4278:10159`) is a visual reference only. Build from the Key screens and components.

## 2. Stack

| Product | Stack | Units |
|---|---|---|
| Website | Vue 3 + Vite | px (or rem), CSS custom properties |
| H5 / EAP | uni-app + Vue 3 + Sass | rpx: design base 375px, so **1px = 2rpx** |

## 3. Workflow when given a Figma link

1. Read the node with the Figma MCP server (`get_design_context`, plus `get_variable_defs` for tokens).
2. Map every layer to an existing component in section 6 before writing new markup. Component instances in Figma always mean "use that component".
3. Use the token named in Figma for every value. Never copy the hex or px value.
4. Read the node's Dev Mode annotation: it holds behaviour, accessibility and motion rules.
5. Check the responsive and language rules (sections 7 and 8) before finishing.

## 4. Tokens

### Naming → CSS

Figma variable `color/text/primary` → CSS `var(--color-text-primary)`. Slashes become hyphens.

### Collections

| Collection | Use in code | Modes |
|---|---|---|
| 1 Primitives (`colour/*`) | **Never use directly.** Only referenced by Semantic tokens. | — |
| 2 Semantic (`color/*`) | All colours | Light |
| 3 Responsive | Font size, line height, letter spacing, spacing, grid, button / input height | 320, 360, 375, 390, 480, 1440 |
| 4 Static | Radius, border width, breakpoints, icon sizes, elevation, font family / weight, motion, `space/scale/*` | — |
| 5 Language | Font family, weight, line height, letter spacing per language | en, ms, zh-Hans |

### Breakpoints

Mobile values apply from 320 to 480px. Desktop values apply at 1440px. 481–1439px is not designed yet: use the desktop layout with fluid widths.

```css
:root { /* mobile values (320–480) */ }
@media (min-width: 481px) { :root { /* desktop values */ } }
```

### Key colour tokens (Semantic)

| Token | Value | Use |
|---|---|---|
| `color-text-primary` | #0D1F4D | Default text, headings |
| `color-text-secondary` | #433B63 | Supporting text |
| `color-text-accent` | #7567A8 | Eyebrows, accent words |
| `color-text-inverse` | #FFFFFF | Text on dark |
| `color-text-on-dark-accent` | #AEDADC | Accent text on dark |
| `color-text-emphasis` | #F26A21 | Strong emphasis links |
| `color-surface-base` | #FFFFFF | Page, cards |
| `color-surface-subtle` | #F7F7FA | Off-white panels |
| `color-surface-calm` / `-calm-tint` | #D9D2EC / #F2EDFA | Lilac panels |
| `color-surface-fresh` / `-fresh-tint` | #AEDADC / #E8F7F7 | Aqua panels |
| `color-surface-optimistic` / `-optimistic-tint` | #F7E8A7 / #FFF7D6 | Lemon panels |
| `color-surface-accent` | #0097A7 | Teal blocks |
| `color-surface-inverse` | #0D1F4D | Dark sections, footer |
| `color-border-default` | #E0E0E8 | Dividers, card outlines (1.5px) |
| `color-border-focus` | #0097A7 | Focus ring (3px) |
| `color-action-primary-bg` / `-bg-hover` | #0D1F4D / #433B63 | Primary button |
| `color-action-secondary-bg` / `-bg-hover` | #FFFFFF / #F2EDFA | Secondary button |
| `color-status-success` / `-warning` / `-error` / `-info` | #0097A7 / #D8A83E / #F26A21 / #7567A8 | Status; each has a `-bg` tint |
| `color-surface-disabled` / `color-text-disabled` | #E2E8F0 / #98A2B3 | Disabled controls |

The full list is in Figma (Variables page, 1.Colour section).

### Spacing (Responsive: mobile → desktop, px)

| Token | Mobile | Desktop |
|---|---|---|
| `space-page-margin` | 16 | 44 |
| `space-section-padding-y` | 32 | 48 |
| `space-section-gap` | 40 | 48 |
| `space-grid-gap` / `-sm` | 16 / 12 | 24 / 12 |
| `space-card-padding` / `-lg` | 20 / 24 | 28 / 36 |
| `space-stack-2xs` · `xs` · `sm` · `md` · `lg` · `xl` | 4 · 8 · 12 · 16 · 24 · 32 | 4 · 8 · 16 · 24 · 36 · 48 |
| `grid-columns` / `grid-gutter` / `grid-margin` | 4 / 16 / 16 | 12 / 24 / 44 |
| `button-height` / `input-height` | 48 | 54 |

Use named tokens first. `space-scale-{2…96}` (Static) is for one-off component spacing only.

### Radius and borders (Static, px)

`radius-xs` 4 · `radius-md` 20 · `radius-lg` 24 · `radius-card` 26 · `radius-xl` 28 · `radius-2xl` 30 · `radius-3xl` 32 · `radius-pill` 999.
`border-width-thin` 1 · `border-width-default` 1.5 · `border-width-focus` 3 · `border-width-accent` 5.

### Elevation

| Level | Shadow |
|---|---|
| low | `0 2px 8px var(--color-shadow-low)` (plum 8%) |
| medium | `0 6px 18px var(--color-shadow-medium)` (plum 10%) — card hover |
| high | `0 12px 32px var(--color-shadow-high)` (plum 14%) — toast, modal |
| floating | `0 5px 14px var(--color-shadow-floating)` (navy 24%) — floating CTA |

### Motion (Static)

`motion-duration-fast` 150ms (hover, focus) · `-base` 200ms · `-slow` 300ms · `-shimmer` 1500ms · `-spin` 800ms · `-toast` 5000ms · `motion-delay-loading` 300ms.
Easing: `standard` cubic-bezier(0.2, 0, 0, 1) · `enter` cubic-bezier(0, 0, 0.2, 1) · `exit` cubic-bezier(0.4, 0, 1, 1).
Respect `prefers-reduced-motion`: no shimmer, no spin, no slide.

### Typography

Font families (via Language collection):

| Language | `lang` | Headings and body | Weights |
|---|---|---|---|
| English | `en` | Plus Jakarta Sans | 400, 500, 600, 700 |
| Malay | `ms` | Plus Jakarta Sans | 400, 500, 600, 700 |
| Simplified Chinese | `zh-Hans` | Noto Sans SC | 400, 500, 700 (SemiBold renders as Medium) |

Type scale, size / line height in px. One scale for every language; Chinese only changes line height and letter spacing.

| Token | Desktop | Mobile | ZH desktop | ZH mobile | Letter spacing (EN / MS, desktop · mobile) |
|---|---|---|---|---|---|
| display | 64/72 | 40/48 | 64/84 | 40/52 | −1.28px · −0.6px |
| display-sm | 56/64 | 36/44 | 56/72 | 36/46 | 0 |
| h1 | 48/56 | 32/40 | 48/62 | 32/42 | −0.72px · −0.32px |
| h2 | 36/44 | 28/36 | 36/50 | 28/40 | −0.36px · −0.14px |
| h3 | 28/36 | 24/32 | 28/40 | 24/34 | −0.14px · 0 |
| h4 | 24/32 | 20/28 | 24/34 | 20/28 | 0 |
| title | 18/24 | 18/24 | 18/28 | 18/28 | 0 |
| title-sm | 16/22 | 16/22 | 16/24 | 16/24 | 0 |
| body-lg | 18/28 | 18/28 | 18/32 | 18/32 | 0 |
| body | 16/26 | 16/26 | 16/28 | 16/28 | 0 |
| body-sm | 14/22 | 14/22 | 14/24 | 14/24 | 0 |
| label | 14/20 | 14/20 | 14/22 | 14/22 | 0 |
| button | 16/24 | 16/24 | 16/24 | 16/24 | 0 |
| caption | 12/18 | 12/18 | 12/20 | 12/20 | 0 |

Chinese letter spacing is always 0.

```css
:root {
  --font-family-heading: "Plus Jakarta Sans", sans-serif;
  --font-family-body: "Plus Jakarta Sans", sans-serif;
}
:lang(zh-Hans) {
  --font-family-heading: "Noto Sans SC", sans-serif;
  --font-family-body: "Noto Sans SC", sans-serif;
  --font-letter-spacing-display: 0;
  --font-letter-spacing-h1: 0;
  --font-letter-spacing-h2: 0;
  --font-letter-spacing-h3: 0;
  /* line heights: use the ZH columns above */
}
```

## 5. Component naming

- Figma names are lowercase kebab-case. Vue components use the PascalCase of the same name: `card-story` → `CardStory.vue`. Exception: `button` → `AppButton.vue`, to avoid the HTML element name. (Confirm the prefix convention with the team.)
- Figma variant and text properties map 1:1 to props with the same names: `variant`, `state`, `tone`, `type`, `size`, `label`, `title`, `copy`.
- `state=hover | focus | pressed` is CSS (`:hover`, `:focus-visible`, `:active`), not a prop. `disabled`, `loading`, `active`, `open` are props or attributes.
- `viewport=desktop | mobile` and `layout=…` describe responsive or structural versions; implement one component with responsive CSS where possible.

## 6. Components

Base link: `https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0?node-id=` + node id (replace `:` with `-`).

### Primitives

| Figma | Vue | Props (from Figma) | Node |
|---|---|---|---|
| `button` | AppButton | label; variant: primary · secondary; state: default · hover · focus · disabled · loading | 6044:2667 |
| `nav-link` | NavLink | label; state: default · hover · focus · active · disabled | 6044:2683 |
| `footer-link` | FooterLink | label; state: default · hover · focus · disabled | 6044:2692 |
| `language-selector` | LanguageSelector | state: default · hover · focus | 6044:2699 |
| `menu-button` | MenuButton | state: default · hover · focus · open | 6070:9196 |
| `nav-item-mobile` | NavItemMobile | label; state: default · pressed · active | 6071:9208 |
| `divider` | AppDivider | orientation: horizontal · vertical; tone: default · accent · on-dark | 6044:2706 |
| `logo` | AppLogo | theme: default · on-dark; size: lg · md · sm | 6044:2803 |
| `icon` | AppIcon | name: awareness · support · empowerment · connection; size: lg (96) · md (40) · sm (24) | 6044:2930 |
| `card-story` | CardStory | title, copy, link; tone: aqua · lemon · lilac; state: default · hover | 6044:3131 |
| `stat-block` | StatBlock | value, label; icon: yes · no; icon-name | 6044:3174 |
| `spinner` | AppSpinner | size: sm · md · lg; tone: default · on-dark | 6051:4913 |
| `skeleton` | AppSkeleton | shape: text · heading · image · button · circle | 6051:4919 |
| `input-field` | InputField | label; state: default · focus · error · disabled | 6051:4940 |
| `alert` | AppAlert | type: info · success · warning · error; style: inline · banner | 6051:4989 |
| `toast` | AppToast | type: success · error · info | 6051:5005 |
| `empty-illustration` | EmptyIllustration | name: no-results · no-content · offline | 6051:5027 |

### Composites

| Figma | Vue | Props | Node |
|---|---|---|---|
| `header-main` | HeaderMain | viewport: desktop · mobile | 6044:3242 |
| `nav-menu-mobile` | NavMenuMobile | state: open · language-open | 6071:9311 |
| `footer-main` | FooterMain | viewport: desktop · mobile | 6044:3355 |
| `card-feature` | CardFeature | title, copy; type: insight · people · platform; state: default · hover | 6044:3399 |
| `feature-block` | one section component per layout | layout: hero · split-feature · platform-cards · editorial · statement-band · story-band · partner-stories · insights · trust-metrics · our-people | 6059:5971 |

### Patterns (states)

| Figma | Use | Node |
|---|---|---|
| `pattern-loading` | context: card-grid · section · page · button | 6051:5181 |
| `pattern-empty-state` | context: page · section · search | 6051:5232 |
| `pattern-error` | type: 404 · 500 · network · form-field | 6051:5364 |
| `pattern-feedback` | type: form-success · offline · toast | 6051:5435 |

State timing: show nothing for the first 300ms, then a skeleton (content) or spinner (small areas, buttons). After 10s, add "Still loading…" with Try again. Success with 0 items → empty state. Request failed → error. Device offline → warning banner under the header.

### Key screens

| Screen | Node |
|---|---|
| home-desktop-1440 | 6059:5973 |
| home-mobile-375 | 6059:6276 |
| menu-open-mobile-375 (en / ms / zh-Hans) | 6071:9355 · 6071:9403 · 6071:9451 |
| Text length EN / MS / ZH | 6059:6707 |
| Responsive notes | 6059:6711 |

## 7. Responsive rules

- Flex or grid with wrapping. No absolute positioning for layout, no fixed widths on text containers.
- Content width = viewport − 2 × `space-page-margin`; max content width 1352px, centred.
- Rows wrap: two-column rows stack below 2 × 343px + gap; three-column card rows stack below 3 × 280px; metrics go 4 → 2 → 1 (min 140px).
- Images keep their aspect ratio (`aspect-ratio`, `object-fit: cover`).
- Mobile touch targets at least 44 × 44px (88rpx).
- uni-app: multiply mobile px by 2 for rpx. Use `1px` literally for hairline borders.

## 8. Language rules

- Set `<html lang="en | ms | zh-Hans">`. All language differences come from `:lang()` overrides of the same tokens.
- Never set fixed heights on text. Malay runs 20–35% longer than English; Chinese about 30–50% shorter.
- Button and nav labels may wrap to two lines (button label max 256px, nav label max 200px). Do not truncate.
- Long Malay words: `hyphens: auto` with `lang="ms"` and `overflow-wrap: break-word`.
- Never hard-code line breaks in copy.

## 9. Accessibility

- Focus: 3px `color-border-focus` ring on `:focus-visible` only.
- Errors: `role="alert"`; info and success: `role="status"`. Never rely on colour alone.
- Inputs: `<label for>`, helper text linked with `aria-describedby`, `aria-invalid="true"` on error.
- Navigation: active link gets `aria-current="page"`. Menu button uses `aria-expanded` and `aria-controls`; the mobile menu is `role="dialog"` with focus trapped and Esc to close.
- Loading containers get `aria-busy="true"`; skeletons are `aria-hidden="true"`.
- Decorative icons and illustrations: `aria-hidden="true"`.

## 10. Do not

- Do not use hex, px or font values that are not tokens.
- Do not use `colour/*` primitives directly.
- Do not create a new component when an existing one matches; extend it with a prop instead.
- Do not add Figma's `state=hover/focus` as props.
- Do not use absolute positioning copied from the approved reference page.

## Status

Still pending client sign-off: hover, focus, disabled and loading states; mobile header, footer and menu; all patterns; the orange error tint (#FDEEE6). Code Connect and Storybook links are not set up yet.
