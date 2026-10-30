// MoodLink Design System — component entry point.
// Names match the Figma components (kebab-case in Figma, PascalCase here).

// Primitives
export { default as AppButton } from './primitives/AppButton.vue' // button
export { default as NavLink } from './primitives/NavLink.vue' // nav-link
export { default as FooterLink } from './primitives/FooterLink.vue' // footer-link
export { default as LanguageSelector } from './primitives/LanguageSelector.vue' // language-selector
export { default as MenuButton } from './primitives/MenuButton.vue' // menu-button
export { default as NavItemMobile } from './primitives/NavItemMobile.vue' // nav-item-mobile
export { default as AppDivider } from './primitives/AppDivider.vue' // divider
export { default as AppLogo } from './primitives/AppLogo.vue' // logo
export { default as AppIcon } from './primitives/AppIcon.vue' // icon
export { default as CardStory } from './primitives/CardStory.vue' // card-story
export { default as StatBlock } from './primitives/StatBlock.vue' // stat-block
export { default as AppSpinner } from './primitives/AppSpinner.vue' // spinner
export { default as AppSkeleton } from './primitives/AppSkeleton.vue' // skeleton
export { default as InputField } from './primitives/InputField.vue' // input-field
export { default as AppAlert } from './primitives/AppAlert.vue' // alert
export { default as AppToast } from './primitives/AppToast.vue' // toast
export { default as EmptyIllustration } from './primitives/EmptyIllustration.vue' // empty-illustration

export { default as IconMentalHealth } from './primitives/IconMentalHealth.vue' // Mental Health / <style> / <concept>
export type { MentalHealthIconName, MentalHealthIconVariant } from './primitives/IconMentalHealth.vue'

// Composites
export { default as HeaderMain } from './composites/HeaderMain.vue' // header-main
export { default as NavMenuMobile } from './composites/NavMenuMobile.vue' // nav-menu-mobile
export { default as FooterMain } from './composites/FooterMain.vue' // footer-main
export { default as CardFeature } from './composites/CardFeature.vue' // card-feature

// H5 app (uni-app / mobile web) — Figma 02 · Components › 6–9
export { default as IconUi } from './h5/IconUi.vue' // icon-ui
export { default as IconService } from './h5/IconService.vue' // icon-service
export { default as LogoMark } from './h5/LogoMark.vue' // logo-mark
export { default as SafeArea } from './h5/SafeArea.vue' // safe-area
export { default as TabItem } from './h5/TabItem.vue' // tab-item
export { default as BottomTabBar } from './h5/BottomTabBar.vue' // bottom-tab-bar
export { default as AppTopBar } from './h5/AppTopBar.vue' // app-top-bar
export { default as ServiceShortcut } from './h5/ServiceShortcut.vue' // service-shortcut
export { default as WellbeingTile } from './h5/WellbeingTile.vue' // wellbeing-tile
export { default as SectionTitle } from './h5/SectionTitle.vue' // section-title
export { default as SectionHeader } from './h5/SectionHeader.vue' // section-header
export { default as MediaCard } from './h5/MediaCard.vue' // media-card
export { default as AudioCard } from './h5/AudioCard.vue' // audio-card
export { default as HeroBanner } from './h5/HeroBanner.vue' // hero-banner
export { default as AppBadge } from './h5/AppBadge.vue' // badge
export { default as AppTag } from './h5/AppTag.vue' // tag
export { default as ChipButton } from './h5/ChipButton.vue' // chip-button
export { default as AppCheckbox } from './h5/AppCheckbox.vue' // checkbox
export { default as AppStepper } from './h5/AppStepper.vue' // stepper
export { default as CardHeading } from './h5/CardHeading.vue' // card-heading
export { default as FieldLabel } from './h5/FieldLabel.vue' // field-label
export { default as DetailRow } from './h5/DetailRow.vue' // detail-row
export { default as NoticeBlock } from './h5/NoticeBlock.vue' // notice-block
export { default as ConsentLine } from './h5/ConsentLine.vue' // consent-line
export { default as PractitionerCard } from './h5/PractitionerCard.vue' // practitioner-card
export { default as ConsultationRow } from './h5/ConsultationRow.vue' // consultation-row
export { default as AppTextarea } from './h5/AppTextarea.vue' // textarea
export { default as PatientCard } from './h5/PatientCard.vue' // patient-card
export { default as OrderSummary } from './h5/OrderSummary.vue' // order-summary
export { default as CheckoutBar } from './h5/CheckoutBar.vue' // checkout-bar
export { default as PatternH5 } from './h5/PatternH5.vue' // pattern-h5
export type { IconUiName } from './h5/IconUi.vue'
export type { IconServiceName } from './h5/IconService.vue'
export type { TabKey, TabDef } from './h5/BottomTabBar.vue'
