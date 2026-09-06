import { SECTION_CONTAINER_CLASS } from "./constants";
export function TestimonialsSection({ policy, styles }) {
    return (<section className="py-20">
      <div className={SECTION_CONTAINER_CLASS}>
        <h2 className="text-center text-3xl font-bold text-[var(--p-text)] sm:text-4xl">
          {policy.testimonialsTitle}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {policy.testimonials.map((testimonial) => (<blockquote key={testimonial.name} className="flex flex-col rounded-2xl border border-[var(--p-border)] bg-[var(--p-surface)] p-6">
              <span className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium" style={{
                backgroundColor: styles.successSubtle,
                color: styles.success,
            }}>
                ✓ {testimonial.badge}
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--p-text-secondary)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-[var(--p-border)] pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[var(--p-text)]" style={{ backgroundColor: styles.avatarBg }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-medium text-[var(--p-text)]">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs text-[var(--p-text-muted)]">
                    {testimonial.location}
                  </p>
                </div>
              </footer>
            </blockquote>))}
        </div>
      </div>
    </section>);
}
