export function StatCard({ value, label, valueClassName = "text-2xl font-bold text-[var(--p-text)]", }) {
    return (<div className="rounded-xl border border-[var(--p-border)] bg-[var(--p-surface)] p-4 text-center">
      <p className={valueClassName}>{value}</p>
      <p className="mt-1 text-xs text-[var(--p-text-muted)]">{label}</p>
    </div>);
}
