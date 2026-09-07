import { getFeatureLandings } from "@/lib/landing";
import BackButton from "@/components/common/BackButton";

function formatFeatureName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function FeaturePage() {
  const listings = getFeatureLandings();

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
          <BackButton />
        </div>

        <ul className="feature-page__list">
          {listings.map((item) => (
            <li key={`${item.policyId}-${item.userId}`}>
              <a
                href={item.href}
                className="feature-page__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="feature-page__name">
                  {formatFeatureName(item.versionLabel)}
                </span>
                <span className="feature-page__open" aria-hidden="true">
                  Open →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
