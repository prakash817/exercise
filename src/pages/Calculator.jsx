import { useEffect } from "react";
import { Link } from "react-router-dom";
import { calculatorCards } from "../data/calculators";

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
          <Link to="/" className="calculator-page__back">
            ← Back to Home
          </Link>
        </div>

        <div className="calculator-hub">
          {calculatorCards.map((calculator) => (
            <Link
              key={calculator.id}
              to={calculator.path}
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
