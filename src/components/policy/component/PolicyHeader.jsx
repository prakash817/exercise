import { AdvisorAvatar } from "./AdvisorAvatar";
import { SECTION_CONTAINER_CLASS } from "./constants";
export function PolicyHeader({ policy, advisor, styles }) {
    return (<header className="border-b border-[var(--p-border)] backdrop-blur-md" style={{ backgroundColor: styles.headerBg }}>
      <div className={`${SECTION_CONTAINER_CLASS} flex items-center justify-between py-3`}>
        <div className="flex items-center gap-3">
          <AdvisorAvatar initials={advisor.avatarInitials} styles={styles} size="sm"/>
          <div>
            <p className="text-sm font-semibold text-[var(--p-text)]">
              {advisor.name}
            </p>
            <p className="text-xs text-[var(--p-text-muted)]">{advisor.title}</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 text-xs text-[var(--p-text-muted)] sm:flex">
          <span className="rounded-full border px-3 py-1" style={{
            borderColor: `color-mix(in srgb, ${styles.secondary} 35%, transparent)`,
            backgroundColor: styles.successSubtle,
            color: styles.secondaryMuted,
        }}>
            IRDAI Licensed
          </span>
          <span>{policy.claimSettlementRate} Claim Settlement</span>
        </div>
      </div>
    </header>);
}
