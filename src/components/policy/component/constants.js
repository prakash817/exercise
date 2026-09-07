export const FORM_SECTION_ID = "quote-form";
export const FORM_BOTTOM_ID = "quote-form-bottom";
export const FORM_HERO_ID = "quote-form-hero";
export const SECTION_CONTAINER_CLASS = "mx-auto max-w-6xl px-4 sm:px-6";
export const CTA_BUTTON_CLASS = "inline-flex rounded-xl bg-gradient-to-r from-[var(--p-primary)] to-[var(--p-primary-hover)] px-8 py-4 text-base font-semibold text-[var(--p-on-primary)] shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--p-primary)_40%,transparent)] transition hover:brightness-110";
export function scrollToFormHref(formId) {
    return `#${formId}`;
}
