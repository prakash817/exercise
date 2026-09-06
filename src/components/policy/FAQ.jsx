"use client";
import { useState } from "react";
export function FAQ({ title, items }) {
    const [openIndex, setOpenIndex] = useState(0);
    return (<section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[var(--p-text)] sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 divide-y divide-[var(--p-border)] rounded-2xl border border-[var(--p-border)] bg-[var(--p-surface)]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (<div key={item.question}>
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                  <span className="font-medium text-[var(--p-text)]">
                    {item.question}
                  </span>
                  <span className={`shrink-0 text-[var(--p-primary)] transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (<div className="px-6 pb-5 text-sm leading-relaxed text-[var(--p-text-secondary)]">
                    {item.answer}
                  </div>)}
              </div>);
        })}
        </div>
      </div>
    </section>);
}
