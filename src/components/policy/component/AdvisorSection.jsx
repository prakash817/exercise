import { AdvisorAvatar } from "./AdvisorAvatar";
import { SECTION_CONTAINER_CLASS } from "./constants";
export function AdvisorSection({ policy, advisor, styles }) {
    return (<section className="border-y border-[var(--p-border)] py-20" style={{ backgroundColor: styles.headerBg }}>
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div className="rounded-2xl border border-[var(--p-border)] bg-[var(--p-surface)] p-8">
            <AdvisorAvatar initials={advisor.avatarInitials} styles={styles} size="lg"/>
            <h3 className="mt-4 text-xl font-bold text-[var(--p-text)]">
              {advisor.name}
            </h3>
            <p className="text-sm text-[var(--p-primary)]">{advisor.title}</p>
            <p className="mt-1 text-sm text-[var(--p-text-muted)]">
              {advisor.company}
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-[var(--p-text-dim)]">License</dt>
                <dd className="text-[var(--p-text-secondary)]">
                  {advisor.licenseNumber}
                </dd>
              </div>
              <div>
                <dt className="text-[var(--p-text-dim)]">Experience</dt>
                <dd className="text-[var(--p-text-secondary)]">
                  {advisor.experienceYears} years
                </dd>
              </div>
              <div>
                <dt className="text-[var(--p-text-dim)]">Families Served</dt>
                <dd className="text-[var(--p-text-secondary)]">
                  {advisor.clientsServed.toLocaleString("en-IN")}+
                </dd>
              </div>
              <div>
                <dt className="text-[var(--p-text-dim)]">Contact</dt>
                <dd className="text-[var(--p-text-secondary)]">
                  {advisor.phone}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[var(--p-text)] sm:text-4xl">
              {policy.advisorSectionTitle}
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {policy.advisorFeatures.map((feature) => (<div key={feature.title} className="rounded-xl border border-[var(--p-border)] bg-[var(--p-surface)] p-5">
                  <h3 className="font-semibold text-[var(--p-text)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--p-text-muted)]">
                    {feature.description}
                  </p>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
