import { CTA_BUTTON_CLASS, scrollToFormHref } from "./constants";
export function PolicyButton({ href, children, variant = "primary", borderColor, className = "", }) {
    if (variant === "outline") {
        return (<a href={scrollToFormHref(href)} className={`inline-flex rounded-xl border px-8 py-3 font-semibold text-[var(--p-primary)] transition hover:bg-[var(--p-primary-subtle)] ${className}`} style={borderColor ? { borderColor } : undefined}>
        {children}
      </a>);
    }
    return (<a href={scrollToFormHref(href)} className={`${CTA_BUTTON_CLASS} ${className}`}>
      {children}
    </a>);
}
