const defaultTrustBadge = "100% secure • No spam • No obligation";
export function policy(input) {
    return {
        ...input,
        trustBadge: input.trustBadge ?? defaultTrustBadge,
        stickyCtaText: input.stickyCtaText ?? input.ctaText,
    };
}
