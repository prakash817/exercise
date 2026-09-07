import { PolicyButton } from "./PolicyButton";
import { FORM_SECTION_ID } from "./constants";
export function FinalCtaSection({ policy }) {
    return (<section className="border-t border-[var(--p-border)] py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-[var(--p-text)] sm:text-4xl">
          You Can&apos;t Be There Forever. But Your Promise Can.
        </h2>
        <p className="mt-4 text-lg text-[var(--p-text-secondary)]">
          {policy.monthlyPremium}/month. {policy.coverAmount} cover. Free quote
          in 2 minutes.
        </p>
        <PolicyButton href={FORM_SECTION_ID} className="mt-8 px-10 py-4 text-lg">
          {policy.ctaText}
        </PolicyButton>
      </div>
    </section>);
}
