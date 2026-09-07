import { useState } from "react";
import { getServicesContent } from "../../config/siteConfig";
import LanguageToggle, { LANGUAGES } from "../common/toggle/LanguageToggle";

function ServiceList({ title, items, variant }) {
  return (
    <div className={`services-panel services-panel--${variant}`}>
      <h3 className="services-panel__title">{title}</h3>
      <ol className="services-panel__list">
        {items.map((item, index) => (
          <li key={index} className="services-panel__item">
            <span className="services-panel__num">{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ServicesContentPanel({ language, isVisible }) {
  const content = getServicesContent(language);

  return (
    <div
      className={`services-content${isVisible ? "" : " services-content--hidden"}`}
      aria-hidden={!isVisible}
    >
      <div className="services-grid">
        <ServiceList
          title={content.primaryTitle}
          items={content.primaryItems}
          variant="primary"
        />
        <ServiceList
          title={content.supportTitle}
          items={content.supportItems}
          variant="support"
        />
      </div>
    </div>
  );
}

function SectionHeadPanel({ language, isVisible }) {
  const content = getServicesContent(language);

  return (
    <div
      className={`section-head__panel${isVisible ? "" : " section-head__panel--hidden"}`}
      aria-hidden={!isVisible}
    >
      <div className="kicker">{content.sectionKicker}</div>
      <h2>{content.sectionTitle}</h2>
      <p>{content.sectionDescription}</p>
    </div>
  );
}

export default function ServicesSection() {
  const [language, setLanguage] = useState("hi");

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-head section-head--stacked">
          <div className="section-head__stack">
            {LANGUAGES.map((lang) => (
              <SectionHeadPanel
                key={lang}
                language={lang}
                isVisible={language === lang}
              />
            ))}
          </div>
        </div>

        <article className="services-card">
          <div className="services-card__toolbar">
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>

          <div className="services-content-stack">
            {LANGUAGES.map((lang) => (
              <ServicesContentPanel
                key={lang}
                language={lang}
                isVisible={language === lang}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
