# Code Connect · readiness and runbook

Figma file: **GOO001P – MoodLink Final For Dev** (`Eo3tD5Lo2odmoWGf0Mfndz`). Checked 29 Oct 2026.

## 1. Is the Figma file ready?

| Area | Ready? | Notes |
|---|---|---|
| 22 component sets (Components page) | ✅ Yes | Names, variants and properties match the Vue props. 21 templates in `figma/`. |
| `feature-block` (10 layouts) | ⚠️ Partly | Template maps the set; the 10 section components are not built in Vue yet. |
| 4 patterns (Patterns page) | ➖ Not mapped | Layout examples, not components. No Code Connect needed. |
| Mental health icon library (125) | ⚠️ Needs sync | Separate components, not one set. `npm run figma:icons` downloads the SVGs and writes 125 templates. |
| H5 mobile screens (Mobile page) | ❌ No | Built from one-off frames, no components → nothing to map. Needs H5 components first (see §4). |
| Plan / seat | ❌ Blocker | Code Connect publish needs an **Organization or Enterprise** plan and a Full or Dev seat. The file's team is on Professional. |

## 2. Component map

All links: `https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-Final-For-Dev?node-id=<node with - instead of :>`

| Figma | Node | Vue (`@/components`) | Template |
|---|---|---|---|
| button | 6044:2667 | AppButton | `figma/button.figma.ts` |
| nav-link | 6044:2683 | NavLink | `figma/nav-link.figma.ts` |
| footer-link | 6044:2692 | FooterLink | `figma/footer-link.figma.ts` |
| language-selector | 6044:2699 | LanguageSelector | `figma/language-selector.figma.ts` |
| menu-button | 6070:9196 | MenuButton | `figma/menu-button.figma.ts` |
| nav-item-mobile | 6071:9208 | NavItemMobile | `figma/nav-item-mobile.figma.ts` |
| divider | 6044:2706 | AppDivider | `figma/divider.figma.ts` |
| logo | 6044:2803 | AppLogo | `figma/logo.figma.ts` |
| icon | 6044:2930 | AppIcon | `figma/icon.figma.ts` |
| card-story | 6044:3131 | CardStory | `figma/card-story.figma.ts` |
| stat-block | 6044:3174 | StatBlock | `figma/stat-block.figma.ts` |
| spinner | 6051:4913 | AppSpinner | `figma/spinner.figma.ts` |
| skeleton | 6051:4919 | AppSkeleton | `figma/skeleton.figma.ts` |
| input-field | 6051:4940 | InputField | `figma/input-field.figma.ts` |
| alert | 6051:4989 | AppAlert | `figma/alert.figma.ts` |
| toast | 6051:5005 | AppToast | `figma/toast.figma.ts` |
| empty-illustration | 6051:5027 | EmptyIllustration | `figma/empty-illustration.figma.ts` |
| header-main | 6044:3242 | HeaderMain | `figma/header-main.figma.ts` |
| nav-menu-mobile | 6071:9311 | NavMenuMobile | `figma/nav-menu-mobile.figma.ts` |
| footer-main | 6044:3355 | FooterMain | `figma/footer-main.figma.ts` |
| card-feature | 6044:3399 | CardFeature | `figma/card-feature.figma.ts` |
| Mental Health / ‹Style› / ‹Concept› ×125 | under 6042:2638 | IconMentalHealth | `figma/mental-health/*.figma.ts` (generated) |

`feature-block` (6059:5971) has no template yet: add one per layout when its Vue section exists.

### H5 app components (v2.0) · `figma/h5/*.figma.ts`

31 templates, one per component set on `02 · Components` sections 6–9 (and `logo-mark` on `01 · Foundations › 8. App assets`): app-top-bar 6172:596 · bottom-tab-bar 6172:565 · tab-item 6171:449 · safe-area 6171:475 · icon-ui 6170:446 · icon-service 6186:1799 · service-shortcut 6185:546 · wellbeing-tile 6185:580 · section-title 6185:601 · section-header 6185:625 · media-card 6186:537 · audio-card 6186:576 · hero-banner 6186:597 · badge 6192:546 · tag 6192:567 · chip-button 6192:595 · checkbox 6227:605 · stepper 6195:584 · card-heading 6195:605 · field-label 6195:636 · detail-row 6195:657 · notice-block 6195:680 · consent-line 6195:705 · practitioner-card 6193:540 · consultation-row 6193:643 · textarea 6196:613 · patient-card 6196:634 · order-summary 6196:661 · checkout-bar 6196:697 · logo-mark 6313:3021 · pattern-h5 6313:2768.

Node IDs were read from the live file `Eo3tD5Lo2odmoWGf0Mfndz` on 30 Oct 2026. `npm run figma:verify` checks them all before publishing.

## 3. Runbook (once the plan allows it)

1. **Token:** Figma → Settings → Security → Personal access tokens. Scopes **Code Connect: Write** and **File content: Read**. Put it in `.env.local` (see `.env.example`) or a GitHub secret `FIGMA_ACCESS_TOKEN`. Never commit it.
2. **Icons:** `FIGMA_ACCESS_TOKEN=… npm run figma:icons`. It writes the SVGs to `src/assets/icons/mental-health/`, the manifest to `figma/mental-health-icons.json` and 125 templates. Commit all three.
3. **Check:** `npm run tokens:check` (tokens match the Figma snapshot), `npm run figma:check` (type-check plus parse of every template) and `FIGMA_ACCESS_TOKEN=… npm run figma:verify` (every template's node still exists in Figma with the expected name).
4. **Publish:** `FIGMA_ACCESS_TOKEN=… npm run figma:publish`, or GitHub → Actions → **Code Connect** → Run workflow.
5. **Verify:** in Dev Mode, select `button`. The code panel should show `<AppButton label="…" />` with a **View source** link to GitHub.
6. **Undo, if needed:** `npx figma connect unpublish`.

The icon sync works on any plan (it only reads the file), so step 2 can run today.

## 3b. Token rule (every time a Figma variable changes)

1. Refresh `tokens/figma-variables.json` by running `scripts/figma-export-variables.js` in Figma (needs edit access or a Dev Mode plugin run).
2. `npm run tokens` rebuilds `src/styles/tokens.css` and `tokens.uni.css`. Never edit those two files by hand.
3. `npm run tokens:check` must pass. CI runs it on every push and fails if the CSS doesn't match the snapshot.

Last snapshot: 27 Oct 2026. On 29 Oct the token documentation in Figma still matched it, but the variable values themselves couldn't be re-read (view-only access, Figma connection limit reached), so refresh the snapshot once edit access is back.

## 4. To finish in Figma before the next Code Connect round

- **H5 screens:** turn the repeated parts into components (bottom tab bar, service shortcut grid, wellbeing tile, audio card, practitioner card, consultation option row, progress stepper, checkout bar), named in kebab-case with variants. Then add Vue components and templates. Scope (prescriptions, paid consultations) needs client confirmation first.
- **Icon library:** ideally combine the 125 components into one component set `icon-mental-health` with properties `name` and `variant`. Then a single template replaces the 125. Fix the intro text ("100 · four treatments" → 125 · five).
- **toast:** the info variant still uses a text "i"; success and error use vector icons.
- **Layer hygiene:** rename new "Frame" / "Vector" layers (for example `icon-arrow`, `icon-chevron`); delete the stray "Rectangle 1" layers on Components, Variables and Key screens; flatten the nested `link-wrap` in card-story hover variants.
- **Text properties:** after the icon changes, check in Dev Mode that `card-story › link` is still bound to the `link` property in every variant.
