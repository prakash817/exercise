import { useState } from "react";
import { getAdvisorIntro } from "../../config/siteConfig";
import Link from "next/link";

const LANGUAGES = ["hi", "en"];

function AdvisorIntroPanel({ language, isVisible }) {
  const intro = getAdvisorIntro(language);

  return (
    <div
      className={`advisor-intro__content${isVisible ? "" : " advisor-intro__content--hidden"}`}
      aria-hidden={!isVisible}
    >
      <p className="advisor-intro__thank-you">{intro.thankYou}</p>

      {intro.paragraphs.map((paragraph, index) => (
        <p key={index} className="advisor-intro__paragraph">
          {paragraph}
        </p>
      ))}

      <p className="advisor-intro__planning-title">{intro.planningTitle}</p>
      <ol className="advisor-intro__planning-list">
        {intro.planningItems.map((item, index) => (
          <li key={item.url} style={{ '--planning-delay': `${index * 0.15}s` }}>
            <Link href={item.url} className="planning-link">
              <span className="planning-link__name">{item.name}</span>
              <span className="planning-link__cta">
                <span className="planning-link__cta-text">
                  {language === "hi" ? "यहाँ क्लिक करें" : "Click Here"}
                </span>
                <span className="planning-link__cta-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="advisor-intro__customers">{intro.customers}</p>
    </div>
  );
}

function SectionHeadPanel({ language, isVisible }) {
  const intro = getAdvisorIntro(language);

  return (
    <div
      className={`section-head__panel${isVisible ? "" : " section-head__panel--hidden"}`}
      aria-hidden={!isVisible}
    >
      <div className="kicker">{intro.sectionKicker}</div>
      <h2>{intro.sectionTitle}</h2>
      <p>{intro.sectionDescription}</p>
    </div>
  );
}

export default function AboutSection() {
  const [language, setLanguage] = useState("hi");

  return (
    <section id="about">
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

        <article className="advisor-intro">
          <div className="advisor-intro__toolbar">
            <div
              className="language-toggle"
              role="group"
              aria-label="Choose language"
            >
              <button
                type="button"
                className={`language-toggle__btn${language === "hi" ? " is-active" : ""}`}
                onClick={() => setLanguage("hi")}
                aria-pressed={language === "hi"}
              >
                हिंदी
              </button>
              <button
                type="button"
                className={`language-toggle__btn${language === "en" ? " is-active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                English
              </button>
            </div>
          </div>

          <div className="advisor-intro__content-stack">
            {LANGUAGES.map((lang) => (
              <AdvisorIntroPanel
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
