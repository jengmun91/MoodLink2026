# Changelog

## 2.0.0 · 30 Oct 2026

Release 2.0 brings together all the work below (27–30 Oct). Earlier internal drafts were numbered 2.1 and 2.2; they are now part of 2.0.

### 30 Oct · H5 app, 390 base, focus styles

- **Tokens refreshed** from Figma (30 Oct, 274 variables): new `color/icon/info`, `color/icon/success`, `color/surface/emphasis`, `color/surface/plum`, `color/surface/sand`, `color/text/muted`, `radius/sm` (8), `radius/card-sm` (12). Changed: `text/error` and `border/error` now orange-dark; `border/input` now neutral/500; body font is Noto Sans SC in every language; `radius/card` → lg (24); `radius/xl` and `radius/2xl` → 3xl (32).
- **390px mobile base:** `tokens.uni.css` now converts with rpx = px × 750 / 390. Storybook's default mobile viewport is 390. Key screens renamed `*-mobile-390` in Figma.
- **31 new H5 components** in `src/components/h5/` (stories under *H5/…*, Code Connect in `figma/h5/`): app shell (`AppTopBar`, `BottomTabBar`, `TabItem`, `SafeArea`), icons (`IconUi`, `IconService`, `LogoMark`), home feed, consultation, checkout, form controls (`AppCheckbox`, `AppTextarea`, `ConsentLine`) and `PatternH5` (loading · empty · error · offline page states).
- **Focus styles** to match the new Figma focus variants: `card-story` and `card-feature` use the Focus ring box-shadow; `nav-item-mobile` uses a 3px inside outline. Code Connect for `nav-item-mobile` accepts `state=focus`.
- **button:** new `size` prop (`md` default, `sm` for compact rows). Code Connect maps it.
- **App assets** in `public/`: favicon (SVG, 32, 16), apple-touch-icon, 192/512 and maskable icons, `og-image.jpg` (1200×630), `splash-390@2x.png`, `manifest.webmanifest`; linked from `index.html`.
- **pattern-h5 in Figma:** section 9 now uses the same Block layout as the other components (title, category, description, spec list, general annotation). The four H5 state screens are renamed `pattern-h5-loading` · `-empty` · `-error` · `-offline` and each has a full Development / Interaction / Accessibility / Content annotation. Handover Key screens links fixed (22 title links opened the wrong screen or a deleted node).
- **Figma file:** all links point to **GOO001P – MoodLink Final For Dev** (`Eo3tD5Lo2odmoWGf0Mfndz`). A comparison copy (`ZKAZAk56uCiFzg6YyOvqpI`) was checked on 30 Oct: same component node IDs and identical tokens; its extra Grid system and Patterns pages are not linked from this repo.
- Docs: CLAUDE.md, README and CODE-CONNECT updated; removed links to deleted Figma nodes (4278:10159, 6071:9355/9403/9451, 6059:6707/6711).

### 29 Oct · Code Connect kit

- Links point to the renamed Figma file **GOO001P – MoodLink Final For Dev** (same file key; old links still work).
- New `IconMentalHealth` component (+ Storybook page) for the 125-icon Mental health library (25 concepts × flat · solid · outline · outline-color · outline-color-dark).
- New `npm run figma:icons` (`scripts/figma-sync-icons.mjs`): with a Figma token it downloads the 125 SVGs, writes `figma/mental-health-icons.json` and generates one Code Connect template per icon.
- New `.github/workflows/code-connect.yml`: manual "Run workflow" button that syncs icons, checks and publishes Code Connect.
- New `npm run tokens:check`: fails if `tokens.css` / `tokens.uni.css` don't match `tokens/figma-variables.json`. Runs in both workflows.
- New `npm run figma:verify`: before publishing, checks every Code Connect node still exists in Figma with the expected name. Runs in the Code Connect workflow.
- New `.env.example` and `docs/CODE-CONNECT.md` (readiness check, component map, runbook, Figma to-dos).

### 27 Oct · Checked against Figma

Checked against the Figma file on 27 Oct 2026.

#### Unchanged in Figma since v1

- **Tokens:** all 265 variables in the five `MoodLink DS / …` collections have the same names and values as v1. `tokens.css` declares the same values.
- **Components:** the 22 component sets on the Components page and the 4 on the Patterns page have the same variants and properties as v1.
- **Node IDs:** all 36 node IDs used in this repository still exist and point to the same layers.
- **Assets:** the 9 icon, logo and illustration SVGs are byte-identical to today's Figma exports.

#### Changed to match Figma

- **toast:** the status icon is now centred in its circle, matching the fix made in Figma (`toast › status-icon`). The ✓, × and i glyphs, and the close ×, are now SVG instead of text characters, which sat low because of font metrics.
- **Props now use the Figma property names:**
  - `button`, `nav-link`, `footer-link`, `nav-item-mobile`: new `label` prop (Figma text property `label`). The default slot still works.
  - `card-story`: `linkLabel` → `link`.
  - `stat-block`: `icon="awareness"` → `icon` (boolean, Figma `icon = yes | no`) + `icon-name` (Figma instance swap).
  - `alert`: stays `variant` (Figma `style`), now documented as the one exception because `style` is reserved in Vue.

#### New

- `tokens/figma-variables.json` snapshot and `npm run tokens`, so `tokens.css` and `tokens.uni.css` are reproducible from Figma instead of assembled by hand. `scripts/figma-export-variables.js` refreshes the snapshot.
- Storybook: one page per component (21 pages, titled with the Figma name), so each Figma component can link to its own Storybook page in Dev resources. Added 360 and 390 viewports.
- Code Connect: every template links to its source file on GitHub (Dev Mode shows **View source**); `stat-block` reads the swapped icon; `button` and the link components output `label`.
- README: Storybook link table and refresh steps for tokens.

#### Removed

The grouped v1 story files were replaced by one file per component. Delete these if you copy v2 over v1:
`src/components/primitives/AppButton.stories.ts` (replaced by a new file of the same name), `Content.stories.ts`, `Feedback.stories.ts`, `Media.stories.ts`, `Navigation.stories.ts` and `src/components/composites/Composites.stories.ts`.

#### Migration from v1

| v1 | v2 |
|---|---|
| `<CardStory link-label="…" />` | `<CardStory link="…" />` |
| `<StatBlock icon="support" />` | `<StatBlock icon-name="support" />` |
| `<StatBlock />` (no icon) | `<StatBlock :icon="false" />` |
| `<AppButton>Explore</AppButton>` | `<AppButton label="Explore" />` (slot still works) |

## 1.0.0 · 27 Oct 2026

First version: tokens, 21 components, Storybook, Code Connect templates, `CLAUDE.md`.
