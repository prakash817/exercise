import { useEffect } from "react";
import { Link } from "react-router-dom";
import { featurePage } from "../config/siteConfig";

function formatFeatureName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function FeaturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="calculator-page feature-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Feature Pages</div>
          <h2>Explore our policy feature pages</h2>
          <p>
            Select a feature page below to open it in a new tab and learn more
            about our insurance and investment offerings.
          </p>
          <Link to="/" className="calculator-page__back">
            ← Back to Home
          </Link>
        </div>

        <ul className="feature-page__list">
          {featurePage.map((item) => (
            <li key={item.featurePageName}>
              <a
                href={item.featurePageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-page__link"
              >
                <span className="feature-page__name">
                  {formatFeatureName(item.featurePageName)}
                </span>
                <span className="feature-page__open" aria-hidden="true">
                  Open ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
