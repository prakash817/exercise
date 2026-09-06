import { SectionHeader } from "./SectionHeader";
import { SECTION_CONTAINER_CLASS } from "./constants";
export function BenefitsSection({ policy }) {
    return (<section className="py-20">
      <div className={SECTION_CONTAINER_CLASS}>
        <SectionHeader eyebrow={`💝 ${policy.benefitsSubtitle}`} title={policy.benefitsTitle}/>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policy.benefits.map((benefit) => (<div key={benefit.title} className="rounded-2xl border border-[var(--p-border)] bg-[var(--p-surface)] p-6 transition hover:border-[var(--p-border-strong)] hover:bg-[var(--p-surface-hover)]">
              <h3 className="text-lg font-semibold text-[var(--p-text)]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--p-text-muted)]">
                {benefit.description}
              </p>
            </div>))}
        </div>
      </div>
    </section>);
}
