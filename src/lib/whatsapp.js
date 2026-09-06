export function formatWhatsAppPhone(phone) {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) {
        return `91${digits}`;
    }
    return digits;
}
export function buildQuoteWhatsAppMessage({ advisorName, policyId, policyName, userId, ageLabel, coverageLabel, pageUrl, }) {
    return [
        `Hi ${advisorName},`,
        "",
        `I'm interested in *${policyName}*.`,
        "",
        "*Lead Details:*",
        `• Policy ID: ${policyId}`,
        `• Advisor ID: ${userId}`,
        `• Age / Selection 1: ${ageLabel}`,
        `• Coverage / Selection 2: ${coverageLabel}`,
        `• Page: ${pageUrl}`,
    ].join("\n");
}
export function buildWhatsAppUrl(phone, message) {
    return `https://wa.me/${formatWhatsAppPhone(phone)}?text=${encodeURIComponent(message)}`;
}
