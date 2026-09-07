export function SectionHeader({ eyebrow, title, eyebrowClassName = "text-center text-sm font-medium uppercase tracking-widest text-[var(--p-primary)]", titleClassName = "mt-3 text-center text-3xl font-bold text-[var(--p-text)] sm:text-4xl", className = "", }) {
    return (<div className={className}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      <h2 className={titleClassName}>{title}</h2>
    </div>);
}
