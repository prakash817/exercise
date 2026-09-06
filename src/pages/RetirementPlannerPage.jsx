import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RetirementAccumulationChart from "../components/RetirementAccumulationChart";
import { siteConfig } from "../config/siteConfig";
import { formatIndianCurrency } from "../utils/sipCalculator";
import {
  INCOME_PATTERNS,
  RISK_PROFILES,
  calculateRetirementPlan,
  createAgeOptions,
} from "../utils/retirementCalculator";
import { whatsAppLink } from "../utils/links";

const PRESENT_AGE_OPTIONS = createAgeOptions(25, 55);
const RETIREMENT_AGE_OPTIONS = createAgeOptions(50, 70);
const INCOME_TILL_OPTIONS = createAgeOptions(75, 95);

export default function RetirementPlannerPage() {
  const [presentAge, setPresentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(60);
  const [incomeNeededTill, setIncomeNeededTill] = useState(85);
  const [presentMonthlyNeeds, setPresentMonthlyNeeds] = useState(50000);
  const [inflationPercent, setInflationPercent] = useState(6);
  const [riskAppetite, setRiskAppetite] = useState("moderate");
  const [retirementRiskAppetite, setRetirementRiskAppetite] = useState("moderate");
  const [incomePattern, setIncomePattern] = useState("growing");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plan = useMemo(
    () =>
      calculateRetirementPlan({
        presentAge,
        retirementAge: Math.max(retirementAge, presentAge + 1),
        incomeNeededTill: Math.max(incomeNeededTill, retirementAge + 1),
        presentMonthlyNeeds: Math.max(presentMonthlyNeeds, 0),
        inflationPercent: Math.max(inflationPercent, 0),
        riskAppetite,
        retirementRiskAppetite,
        incomePattern,
      }),
    [
      presentAge,
      retirementAge,
      incomeNeededTill,
      presentMonthlyNeeds,
      inflationPercent,
      riskAppetite,
      retirementRiskAppetite,
      incomePattern,
    ],
  );

  const whatsAppMessage = `Hello ${siteConfig.name}, I need help with retirement planning. Present age ${presentAge}, retirement age ${retirementAge}, monthly need today ₹${formatIndianCurrency(presentMonthlyNeeds)}, estimated corpus ₹${formatIndianCurrency(plan.totalCorpus)}, suggested SIP ₹${formatIndianCurrency(plan.monthlySipNeeded)}/month.`;

  return (
    <main className="calculator-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Retirement Planner</div>
          <h2>Plan your retirement corpus with confidence</h2>
          <p>
            Estimate the corpus required at retirement and the monthly SIP needed
            to reach your goal, based on inflation and risk profile.
          </p>
          <Link to="/calculator" className="calculator-page__back">
            ← All Calculators
          </Link>
        </div>

        <div className="sip-calculator sip-calculator--stacked">
          <section className="sip-calculator__panel sip-calculator__numbers">
            <h3 className="sip-panel__title">Enter Values</h3>

            <div className="sip-input-grid">
              <label className="sip-field">
                <span>Present Age</span>
                <select
                  value={presentAge}
                  onChange={(event) => setPresentAge(Number(event.target.value))}
                >
                  {PRESENT_AGE_OPTIONS.map((age) => (
                    <option key={age} value={age}>
                      {age} Years
                    </option>
                  ))}
                </select>
              </label>

              <label className="sip-field">
                <span>Retirement Age</span>
                <select
                  value={retirementAge}
                  onChange={(event) => setRetirementAge(Number(event.target.value))}
                >
                  {RETIREMENT_AGE_OPTIONS.filter((age) => age > presentAge).map((age) => (
                    <option key={age} value={age}>
                      {age} Years
                    </option>
                  ))}
                </select>
              </label>

              <label className="sip-field">
                <span>Income Needed Till</span>
                <select
                  value={incomeNeededTill}
                  onChange={(event) => setIncomeNeededTill(Number(event.target.value))}
                >
                  {INCOME_TILL_OPTIONS.filter((age) => age > retirementAge).map((age) => (
                    <option key={age} value={age}>
                      {age} Years
                    </option>
                  ))}
                </select>
              </label>

              <label className="sip-field">
                <span>Present Monthly Needs (₹)</span>
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  value={presentMonthlyNeeds}
                  onChange={(event) =>
                    setPresentMonthlyNeeds(Number(event.target.value))
                  }
                />
              </label>

              <label className="sip-field">
                <span>Inflation (% p.a.)</span>
                <input
                  type="number"
                  min="1"
                  max="15"
                  step="0.5"
                  value={inflationPercent}
                  onChange={(event) =>
                    setInflationPercent(Number(event.target.value))
                  }
                />
              </label>
            </div>

            <div className="sip-options-grid">
              <fieldset className="sip-field sip-field--group">
                <legend>Your Risk Appetite (Savings Period)</legend>
                <div className="option-pills">
                  {Object.entries(RISK_PROFILES).map(([key, profile]) => (
                    <button
                      key={key}
                      type="button"
                      className={`option-pill${riskAppetite === key ? " is-active" : ""}`}
                      onClick={() => setRiskAppetite(key)}
                    >
                      {profile.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="sip-field sip-field--group">
                <legend>Income Pattern</legend>
                <div className="option-pills">
                  {Object.values(INCOME_PATTERNS).map((pattern) => (
                    <button
                      key={pattern.value}
                      type="button"
                      className={`option-pill${incomePattern === pattern.value ? " is-active" : ""}`}
                      onClick={() => setIncomePattern(pattern.value)}
                    >
                      {pattern.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="sip-field sip-field--group">
                <legend>Risk Appetite on Retirement</legend>
                <div className="option-pills">
                  {Object.entries(RISK_PROFILES).map(([key, profile]) => (
                    <button
                      key={key}
                      type="button"
                      className={`option-pill${retirementRiskAppetite === key ? " is-active" : ""}`}
                      onClick={() => setRetirementRiskAppetite(key)}
                    >
                      {profile.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="sip-numbers__divider" />

            <div className="sip-numbers__results sip-numbers__results--retirement">
              <article className="sip-value-card">
                <span>Savings Period</span>
                <strong>{plan.yearsToRetirement} Years</strong>
              </article>
              <article className="sip-value-card">
                <span>Monthly Needs at Retirement</span>
                <strong>₹ {formatIndianCurrency(plan.monthlyNeedsAtRetirement)}</strong>
              </article>
              <article className="sip-value-card sip-value-card--highlight">
                <span>Total Corpus Required</span>
                <strong>₹ {formatIndianCurrency(plan.totalCorpus)}</strong>
              </article>
              <article className="sip-value-card sip-value-card--highlight">
                <span>Monthly SIP Needed</span>
                <strong>₹ {formatIndianCurrency(plan.monthlySipNeeded)}</strong>
              </article>
              <article className="sip-value-card">
                <span>Lumpsum at Retirement</span>
                <strong>₹ {formatIndianCurrency(plan.lumpsumAtRetirement)}</strong>
              </article>
            </div>
          </section>

          <section className="sip-calculator__panel sip-calculator__chart">
            <h3 className="sip-panel__title">Retirement Savings Projection</h3>
            <p className="sip-chart__note">
              Projected savings path based on the suggested monthly SIP and your
              selected pre-retirement risk profile ({plan.preRetirementReturn}%
              p.a.).
            </p>
            <RetirementAccumulationChart yearlyProjection={plan.yearlyProjection} />
          </section>
        </div>

        <section className="sip-calculator__panel sip-calculator__table-panel">
          <h3>Savings projection by age</h3>
          <div className="sip-table-wrap">
            <table className="sip-table">
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Projected Savings (₹)</th>
                  <th>Target Corpus (₹)</th>
                </tr>
              </thead>
              <tbody>
                {plan.yearlyProjection.map((entry) => (
                  <tr key={entry.age}>
                    <td>{entry.age}</td>
                    <td>{formatIndianCurrency(entry.accumulated)}</td>
                    <td>{formatIndianCurrency(entry.targetCorpus)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="sip-assumption">
            Assumptions: pre-retirement returns of{" "}
            {RISK_PROFILES.conservative.preRetirementReturn}% (Conservative),{" "}
            {RISK_PROFILES.moderate.preRetirementReturn}% (Moderate),{" "}
            {RISK_PROFILES.aggressive.preRetirementReturn}% (Aggressive). Post-retirement
            returns used for corpus calculation are{" "}
            {RISK_PROFILES.conservative.postRetirementReturn}%,{" "}
            {RISK_PROFILES.moderate.postRetirementReturn}%, and{" "}
            {RISK_PROFILES.aggressive.postRetirementReturn}% respectively.
          </p>

          <a
            className="btn btn-green sip-calculator__cta"
            href={`${whatsAppLink}?text=${encodeURIComponent(whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss Retirement Plan
          </a>

          <p className="sip-disclaimer">
            <b>Disclaimer:</b> This retirement planner is for illustrative
            purposes only. Actual returns, inflation, and corpus requirements may
            differ. Please consult your advisor before making investment decisions.
          </p>
        </section>
      </div>
    </main>
  );
}
