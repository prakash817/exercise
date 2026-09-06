import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findPolicyPage,
  formatPolicyName,
  getPolicyStaticParams,
  parsePolicyVersion,
} from "@/helpers/policyPages";
import { siteConfig } from "@/config/siteConfig";
import { whatsAppLink } from "@/utils/links";

export async function generateStaticParams() {
  return getPolicyStaticParams();
}

export async function generateMetadata({ params }) {
  const { policy, code } = await params;
  const item = findPolicyPage(policy, code);

  if (!item) {
    return { title: "Policy not found" };
  }

  const { label } = parsePolicyVersion(policy);
  const name = formatPolicyName(policy);

  return {
    title: `${name} (${label}) | ${siteConfig.websiteName}`,
    description: `${name} ${label} for agent code ${code}.`,
  };
}

export default async function PolicyPage({ params }) {
  const { policy, code } = await params;
  const item = findPolicyPage(policy, code);

  if (!item) {
    notFound();
  }

  const { family, version, label } = parsePolicyVersion(policy);
  const name = formatPolicyName(policy);
  const whatsAppMessage = `Hello ${siteConfig.name}, I want details about ${name} (${label}), code ${code}.`;

  return (
    <main className="calculator-page feature-page">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Policy {label}</div>
          <h2>{name}</h2>
          <p>
            {name} {label.toLowerCase()} for advisor code {code}. Open the full
            policy feature page or continue on WhatsApp.
          </p>
          <Link href="/feature-page" className="calculator-page__back">
            ← All Feature Pages
          </Link>
        </div>

        <ul className="feature-page__list">
          <li>
            <span className="feature-page__link">
              <span className="feature-page__name">Policy family</span>
              <span className="feature-page__open">{family}</span>
            </span>
          </li>
          <li>
            <span className="feature-page__link">
              <span className="feature-page__name">Version</span>
              <span className="feature-page__open">{version}</span>
            </span>
          </li>
          <li>
            <span className="feature-page__link">
              <span className="feature-page__name">Advisor code</span>
              <span className="feature-page__open">{code}</span>
            </span>
          </li>
          <li>
            <a
              href={item.featurePageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-page__link"
            >
              <span className="feature-page__name">Full policy page</span>
              <span className="feature-page__open" aria-hidden="true">
                Open ↗
              </span>
            </a>
          </li>
          <li>
            <a
              href={`${whatsAppLink}?text=${encodeURIComponent(whatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-page__link"
            >
              <span className="feature-page__name">Enquire on WhatsApp</span>
              <span className="feature-page__open" aria-hidden="true">
                Chat ↗
              </span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
