"use client";

import { useEffect } from "react";
import Link from "next/link";
import { featurePage } from "@/config/siteConfig";
import { getPolicyHref } from "@/helpers/policyPages";

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
            Select a feature page below to open its policy version and learn more
            about our insurance and investment offerings.
          </p>
          <Link href="/" className="calculator-page__back">
            ← Back to Home
          </Link>
        </div>

        <ul className="feature-page__list">
          {featurePage.map((item) => (
            <li key={item.featurePageName}>
              <Link href={getPolicyHref(item)} className="feature-page__link">
                <span className="feature-page__name">
                  {formatFeatureName(item.featurePageName)}
                </span>
                <span className="feature-page__open" aria-hidden="true">
                  Open →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
