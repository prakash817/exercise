import { PolicyButton } from "./PolicyButton";
import { SectionHeader } from "./SectionHeader";
import { FORM_SECTION_ID, SECTION_CONTAINER_CLASS } from "./constants";
export function RisksSection({ policy, styles }) {
    return (<section className="border-y border-[var(--p-border)] py-20" style={{ backgroundColor: styles.headerBg }}>
      <div className={SECTION_CONTAINER_CLASS}>
        <SectionHeader eyebrow="Without Term Insurance" title={policy.risksTitle} eyebrowClassName="text-center text-sm font-medium uppercase tracking-widest text-[var(--p-danger)]"/>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {policy.risks.map((risk) => (<div key={risk.title} className="rounded-2xl border p-6" style={{
                borderColor: `color-mix(in srgb, ${styles.danger} 25%, transparent)`,
                backgroundColor: styles.dangerSubtle,
            }}>
              <p className="text-3xl font-bold text-[var(--p-danger)]">
                {risk.amount}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--p-text)]">
                {risk.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--p-text-muted)]">
                {risk.description}
              </p>
            </div>))}
        </div>

        <div className="mt-10 text-center">
          <PolicyButton href={FORM_SECTION_ID} variant="outline" borderColor={styles.borderStrong}>
            Protect Them Now
          </PolicyButton>
        </div>
      </div>
    </section>);
}
