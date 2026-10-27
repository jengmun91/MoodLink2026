# Changelog

## 2.0.0 · 27 Oct 2026

Checked against the Figma file on 27 Oct 2026.

### Unchanged in Figma since v1

- **Tokens:** all 265 variables in the five `MoodLink DS / …` collections have the same names and values as v1. `tokens.css` declares the same values.
- **Components:** the 22 component sets on the Components page and the 4 on the Patterns page have the same variants and properties as v1.
- **Node IDs:** all 36 node IDs used in this repository still exist and point to the same layers.
- **Assets:** the 9 icon, logo and illustration SVGs are byte-identical to today's Figma exports.

### Changed to match Figma

- **toast:** the status icon is now centred in its circle, matching the fix made in Figma (`toast › status-icon`). The ✓, × and i glyphs, and the close ×, are now SVG instead of text characters, which sat low because of font metrics.
- **Props now use the Figma property names:**
  - `button`, `nav-link`, `footer-link`, `nav-item-mobile`: new `label` prop (Figma text property `label`). The default slot still works.
  - `card-story`: `linkLabel` → `link`.
  - `stat-block`: `icon="awareness"` → `icon` (boolean, Figma `icon = yes | no`) + `icon-name` (Figma instance swap).
  - `alert`: stays `variant` (Figma `style`), now documented as the one exception because `style` is reserved in Vue.

### New

- `tokens/figma-variables.json` snapshot and `npm run tokens`, so `tokens.css` and `tokens.uni.css` are reproducible from Figma instead of assembled by hand. `scripts/figma-export-variables.js` refreshes the snapshot.
- Storybook: one page per component (21 pages, titled with the Figma name), so each Figma component can link to its own Storybook page in Dev resources. Added 360 and 390 viewports.
- Code Connect: every template links to its source file on GitHub (Dev Mode shows **View source**); `stat-block` reads the swapped icon; `button` and the link components output `label`.
- README: Storybook link table and refresh steps for tokens.

### Removed

The grouped v1 story files were replaced by one file per component. Delete these if you copy v2 over v1:
`src/components/primitives/AppButton.stories.ts` (replaced by a new file of the same name), `Content.stories.ts`, `Feedback.stories.ts`, `Media.stories.ts`, `Navigation.stories.ts` and `src/components/composites/Composites.stories.ts`.

### Migration from v1

| v1 | v2 |
|---|---|
| `<CardStory link-label="…" />` | `<CardStory link="…" />` |
| `<StatBlock icon="support" />` | `<StatBlock icon-name="support" />` |
| `<StatBlock />` (no icon) | `<StatBlock :icon="false" />` |
| `<AppButton>Explore</AppButton>` | `<AppButton label="Explore" />` (slot still works) |

## 1.0.0 · 27 Oct 2026

First version: tokens, 21 components, Storybook, Code Connect templates, `CLAUDE.md`.
