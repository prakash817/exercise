import { POLICY_STYLES } from "@/lib/db/seed/policy-styles";
export const DEFAULT_POLICY_STYLES = POLICY_STYLES.warmAmber;
export function resolvePolicyStyles(styles) {
    return styles ?? DEFAULT_POLICY_STYLES;
}
export function withPolicyStyles(policy) {
    return {
        ...policy,
        styles: resolvePolicyStyles(policy.styles),
    };
}
export function policyStylesToCssVars(styles) {
    return {
        "--p-bg-from": styles.bgFrom,
        "--p-bg-via": styles.bgVia,
        "--p-bg-to": styles.bgTo,
        "--p-header-bg": styles.headerBg,
        "--p-primary": styles.primary,
        "--p-primary-hover": styles.primaryHover,
        "--p-primary-muted": styles.primaryMuted,
        "--p-primary-subtle": styles.primarySubtle,
        "--p-secondary": styles.secondary,
        "--p-secondary-muted": styles.secondaryMuted,
        "--p-accent": styles.accent,
        "--p-success": styles.success,
        "--p-success-subtle": styles.successSubtle,
        "--p-danger": styles.danger,
        "--p-danger-subtle": styles.dangerSubtle,
        "--p-surface": styles.surface,
        "--p-surface-hover": styles.surfaceHover,
        "--p-border": styles.border,
        "--p-border-strong": styles.borderStrong,
        "--p-text": styles.text,
        "--p-text-secondary": styles.textSecondary,
        "--p-text-muted": styles.textMuted,
        "--p-text-dim": styles.textDim,
        "--p-on-primary": styles.onPrimary,
        "--p-hero-glow": styles.heroGlow,
        "--p-avatar-bg": styles.avatarBg,
        "--p-avatar-text": styles.avatarText,
    };
}
