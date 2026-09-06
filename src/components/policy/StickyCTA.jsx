"use client";
export function StickyCTA({ text, targetId = "quote-form", }) {
    const scrollToForm = () => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    };
    return (<div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--p-border)] p-4 backdrop-blur-md md:hidden" style={{ backgroundColor: "var(--p-header-bg)" }}>
      <button type="button" onClick={scrollToForm} className="w-full rounded-xl bg-gradient-to-r from-[var(--p-primary)] to-[var(--p-primary-hover)] px-6 py-3.5 text-base font-semibold text-[var(--p-on-primary)] shadow-lg transition hover:brightness-110">
        {text}
      </button>
    </div>);
}
