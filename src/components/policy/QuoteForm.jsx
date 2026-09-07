"use client";
import { useEffect, useState } from "react";
import { buildQuoteWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
async function fetchAdvisor(userId) {
    const response = await fetch(`/api/advisors/${userId}`);
    if (!response.ok) {
        throw new Error("Advisor not found");
    }
    return response.json();
}
export function QuoteForm({ formId = "quote-form", title, subtitle, ageRanges, coverageOptions, submitButtonText, trustBadge, policyId, policyName, userId, }) {
    const [age, setAge] = useState("");
    const [coverage, setCoverage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loadingAdvisor, setLoadingAdvisor] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [advisor, setAdvisor] = useState(null);
    useEffect(() => {
        let cancelled = false;
        async function loadAdvisor() {
            setLoadingAdvisor(true);
            setError(null);
            try {
                const advisorData = await fetchAdvisor(userId);
                if (!cancelled) {
                    setAdvisor(advisorData);
                }
            }
            catch {
                if (!cancelled) {
                    setAdvisor(null);
                    setError("Could not find advisor. Please check the link and try again.");
                }
            }
            finally {
                if (!cancelled) {
                    setLoadingAdvisor(false);
                }
            }
        }
        loadAdvisor();
        return () => {
            cancelled = true;
        };
    }, [userId]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!advisor) {
            setError("Advisor details are not available. Please refresh and try again.");
            return;
        }
        setSubmitting(true);
        setError(null);
        const ageLabel = ageRanges.find((range) => range.value === age)?.label ?? age;
        const coverageLabel = coverageOptions.find((option) => option.value === coverage)?.label ??
            coverage;
        const message = buildQuoteWhatsAppMessage({
            advisorName: advisor.name,
            policyId,
            policyName,
            userId: advisor.id,
            ageLabel,
            coverageLabel,
            pageUrl: window.location.href,
        });
        const whatsappUrl = buildWhatsAppUrl(advisor.phone, message);
        const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!whatsappWindow) {
            window.location.href = whatsappUrl;
        }
        setSubmitted(true);
        setSubmitting(false);
    };
    if (submitted && advisor) {
        return (<div id={formId} className="rounded-2xl border p-8 text-center" style={{
                borderColor: `color-mix(in srgb, var(--p-success) 35%, transparent)`,
                backgroundColor: "var(--p-success-subtle)",
            }}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl" style={{ backgroundColor: "var(--p-success-subtle)" }}>
          ✓
        </div>
        <h3 className="text-xl font-semibold text-[var(--p-text)]">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-[var(--p-text-secondary)]">
          WhatsApp opened with your details for {advisor.name}. Tap send to
          complete your request.
        </p>
      </div>);
    }
    const isDisabled = loadingAdvisor || submitting || !advisor;
    return (<div id={formId} className="rounded-2xl border border-[var(--p-border)] bg-[var(--p-surface)] p-6 backdrop-blur-sm sm:p-8">
      <h3 className="text-xl font-semibold text-[var(--p-text)]">{title}</h3>
      <p className="mt-1 text-sm text-[var(--p-accent)]">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <input type="hidden" name="policyId" value={policyId}/>
        <input type="hidden" name="userId" value={userId}/>

        <fieldset disabled={isDisabled}>
          <legend className="mb-3 text-sm font-medium text-[var(--p-text-secondary)]">
            Age?
          </legend>
          <div className="flex flex-wrap gap-2">
            {ageRanges.map((range) => (<label key={range.value} className="cursor-pointer">
                <input type="radio" name={`${formId}-age`} value={range.value} checked={age === range.value} onChange={() => setAge(range.value)} className="peer sr-only" required/>
                <span className="inline-block rounded-full border border-[var(--p-border)] px-4 py-2 text-sm text-[var(--p-text-secondary)] transition peer-checked:border-[var(--p-primary)] peer-checked:bg-[var(--p-primary-subtle)] peer-checked:text-[var(--p-primary-muted)]">
                  {range.label}
                </span>
              </label>))}
          </div>
        </fieldset>

        <fieldset disabled={isDisabled}>
          <legend className="mb-3 text-sm font-medium text-[var(--p-text-secondary)]">
            Coverage needed?
          </legend>
          <div className="flex flex-wrap gap-2">
            {coverageOptions.map((option) => (<label key={option.value} className="cursor-pointer">
                <input type="radio" name={`${formId}-coverage`} value={option.value} checked={coverage === option.value} onChange={() => setCoverage(option.value)} className="peer sr-only" required/>
                <span className="inline-block rounded-full border border-[var(--p-border)] px-4 py-2 text-sm text-[var(--p-text-secondary)] transition peer-checked:border-[var(--p-primary)] peer-checked:bg-[var(--p-primary-subtle)] peer-checked:text-[var(--p-primary-muted)]">
                  {option.label}
                </span>
              </label>))}
          </div>
        </fieldset>

        {error && (<p className="rounded-lg border px-4 py-3 text-sm" style={{
                borderColor: `color-mix(in srgb, var(--p-danger) 35%, transparent)`,
                backgroundColor: "var(--p-danger-subtle)",
                color: "var(--p-danger)",
            }}>
            {error}
          </p>)}

        <button type="submit" disabled={isDisabled} className="w-full rounded-xl bg-gradient-to-r from-[var(--p-primary)] to-[var(--p-primary-hover)] px-6 py-4 text-base font-semibold text-[var(--p-on-primary)] shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--p-primary)_40%,transparent)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
          {loadingAdvisor
            ? "Loading advisor..."
            : submitting
                ? "Opening WhatsApp..."
                : submitButtonText}
        </button>

        <p className="text-center text-xs text-[var(--p-text-muted)]">
          {trustBadge}
        </p>
      </form>
    </div>);
}
