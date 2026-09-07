import { QuoteForm } from "@/components/policy/QuoteForm";
import { PolicyButton } from "./PolicyButton";
import { StatCard } from "./StatCard";
import { FORM_BOTTOM_ID, FORM_HERO_ID, SECTION_CONTAINER_CLASS } from "./constants";
export function HeroSection({ policy, advisor, formProps, }) {
    return (<section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--p-hero-glow)] via-transparent to-transparent"/>
      <div className={`relative ${SECTION_CONTAINER_CLASS} grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24`}>
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--p-primary)]">
            {policy.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[var(--p-text)] sm:text-5xl">
            {policy.heroTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--p-text-secondary)]">
            {policy.heroSubtitle}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <StatCard value={policy.monthlyPremium} label="/Month" valueClassName="text-2xl font-bold text-[var(--p-primary)]"/>
            <StatCard value={policy.coverAmount} label="Cover"/>
            <StatCard value={policy.claimSettlementRate} label="Claims Paid" valueClassName="text-2xl font-bold text-[var(--p-secondary)]"/>
          </div>

          <PolicyButton href={FORM_BOTTOM_ID} className="mt-8">
            {policy.ctaText}
          </PolicyButton>

          <p className="mt-6 text-sm italic text-[var(--p-text-muted)]">
            &ldquo;{advisor.greeting}&rdquo; — {advisor.name},{" "}
            {advisor.experienceYears}+ years experience
          </p>
        </div>

        <div className="hidden lg:block">
          <QuoteForm {...formProps} formId={FORM_HERO_ID}/>
        </div>
      </div>
    </section>);
}
