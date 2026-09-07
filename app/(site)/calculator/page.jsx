"use client";

import { useEffect } from "react";
import Link from "next/link";
import { calculatorCards } from "@/data/calculators";
import BackButton from "@/components/common/BackButton";

export default function CalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="calculator-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Financial Calculators</div>
          <h2>Plan smarter with our financial tools</h2>
          <p>
            Choose a calculator below to estimate SIP growth, plan retirement
            corpus, and make informed financial decisions.
          </p>
          <BackButton />
        </div>

        <div className="calculator-hub">
          {calculatorCards.map((calculator) => (
            <Link
              key={calculator.id}
              href={calculator.path}
              className="calculator-hub__card"
            >
              <span className="calculator-hub__icon" aria-hidden="true">
                {calculator.icon}
              </span>
              <h3>{calculator.title}</h3>
              <p>{calculator.description}</p>
              <span className="calculator-hub__cta">{calculator.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
