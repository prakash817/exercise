"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SipGrowthChart from "@/components/SipGrowthChart";
import { siteConfig } from "@/config/siteConfig";
import {
  SIP_YEAR_OPTIONS,
  calculateSipProjection,
  formatIndianCurrency,
} from "@/utils/sipCalculator";
import { whatsAppLink } from "@/utils/links";

const DEFAULT_MONTHLY = 5000;
const DEFAULT_YEARS = 10;
const DEFAULT_RATE = 12;

export default function SipCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(DEFAULT_MONTHLY);
  const [years, setYears] = useState(DEFAULT_YEARS);
  const [expectedReturn, setExpectedReturn] = useState(DEFAULT_RATE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projection = useMemo(
    () =>
      calculateSipProjection(
        Math.max(monthlyInvestment, 0),
        years,
        Math.max(expectedReturn, 0),
      ),
    [monthlyInvestment, years, expectedReturn],
  );

  const whatsAppMessage = `Hello ${siteConfig.name}, I want to start a SIP of ₹${formatIndianCurrency(monthlyInvestment)} per month for ${years} years. Please guide me.`;

  return (
    <main className="calculator-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">SIP Calculator</div>
          <h2>S.I.P. — Your smart way to create wealth systematically</h2>
          <p>
            Estimate how your monthly investments can grow over time with the
            power of compounding.
          </p>
          <Link href="/calculator" className="calculator-page__back">
            ← All Calculators
          </Link>
        </div>
        <div className="sip-calculator sip-calculator--stacked">
          <section className="sip-calculator__panel sip-calculator__numbers">
            <h3 className="sip-panel__title">Enter Values</h3>

            <div className="sip-input-grid">
              <label className="sip-field">
                <span>Monthly Investment (₹)</span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(event) =>
                    setMonthlyInvestment(Number(event.target.value))
                  }
                />
              </label>

              <label className="sip-field">
                <span>Investment Period</span>
                <select
                  value={years}
                  onChange={(event) => setYears(Number(event.target.value))}
                >
                  {SIP_YEAR_OPTIONS.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption} Years
                    </option>
                  ))}
                </select>
              </label>

              <label className="sip-field">
                <span>Expected Return (% p.a.)</span>
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(event) =>
                    setExpectedReturn(Number(event.target.value))
                  }
                />
              </label>
            </div>

            <div className="sip-numbers__divider" />

            <div className="sip-numbers__results">
              <article className="sip-value-card">
                <span>Total Investment</span>
                <strong>
                  ₹ {formatIndianCurrency(projection.totalInvestment)}
                </strong>
              </article>
              <article className="sip-value-card sip-value-card--highlight">
                <span>Future Value</span>
                <strong>
                  ₹ {formatIndianCurrency(projection.futureValue)}
                </strong>
              </article>
            </div>
          </section>

          <section className="sip-calculator__panel sip-calculator__chart">
            <h3 className="sip-panel__title">Wealth Growth Chart</h3>
            <p className="sip-chart__note">
              Interactive chart showing estimated future value and total
              investment at each stage of your SIP journey.
            </p>
            <SipGrowthChart yearlyValues={projection.yearlyValues} />
          </section>
        </div>

        <section className="sip-calculator__panel sip-calculator__table-panel">
          <h3>Value of your SIP in different stages of investment</h3>
          <div className="sip-table-wrap">
            <table className="sip-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Future Value (₹)</th>
                </tr>
              </thead>
              <tbody>
                {projection.yearlyValues.map((entry) => (
                  <tr key={entry.year}>
                    <td>{entry.year}</td>
                    <td>{formatIndianCurrency(entry.futureValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            className="btn btn-green sip-calculator__cta"
            href={`${whatsAppLink}?text=${encodeURIComponent(whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start SIP Now
          </a>

          <p className="sip-disclaimer">
            <b>Disclaimer:</b> This calculator is for illustrative purposes
            only. There is no assurance or guarantee that the future values
            shown would be achieved.
          </p>
        </section>
      </div>
    </main>
  );
}
