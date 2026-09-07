import { QuoteForm } from "@/components/policy/QuoteForm";
import { FORM_BOTTOM_ID, FORM_SECTION_ID } from "./constants";
export function QuoteFormSection({ policy, styles, formProps, }) {
    return (<section id={FORM_SECTION_ID} className="border-t border-[var(--p-border)] py-20" style={{ backgroundColor: styles.headerBg }}>
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[var(--p-text)]">
          Your Family Deserves a Promise
        </h2>
        <p className="mt-3 text-center text-[var(--p-accent)]">
          {policy.coverAmount} cover • From {policy.monthlyPremium}/mo • Free
          quote
        </p>
        <div className="mt-8">
          <QuoteForm {...formProps} formId={FORM_BOTTOM_ID}/>
        </div>
      </div>
    </section>);
}
