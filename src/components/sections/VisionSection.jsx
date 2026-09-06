import { useState } from 'react'
import { getVisionContent } from '../../config/siteConfig'
import LanguageToggle, { LANGUAGES } from '../LanguageToggle'

function VisionContentPanel({ language, isVisible }) {
  const content = getVisionContent(language)

  return (
    <div
      className={`vision-content${isVisible ? '' : ' vision-content--hidden'}`}
      aria-hidden={!isVisible}
    >
      <div className="vision-highlights">
        {content.highlights.map((item, index) => (
          <article
            key={index}
            className={`vision-highlight${item.stat ? ' vision-highlight--stat' : ''}`}
          >
            <span className="vision-highlight__icon" aria-hidden="true">
              {item.stat ? '📊' : '✓'}
            </span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function SectionHeadPanel({ language, isVisible }) {
  const content = getVisionContent(language)

  return (
    <div
      className={`section-head__panel${isVisible ? '' : ' section-head__panel--hidden'}`}
      aria-hidden={!isVisible}
    >
      <div className="kicker">{content.sectionKicker}</div>
      <h2>{content.sectionTitle}</h2>
      <p>{content.sectionDescription}</p>
    </div>
  )
}

export default function VisionSection() {
  const [language, setLanguage] = useState('hi')

  return (
    <section id="vision" className="vision-section">
      <div className="container">
        <div className="section-head section-head--stacked">
          <div className="section-head__stack">
            {LANGUAGES.map((lang) => (
              <SectionHeadPanel key={lang} language={lang} isVisible={language === lang} />
            ))}
          </div>
        </div>

        <article className="vision-card">
          <div className="vision-card__toolbar">
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>

          <div className="vision-content-stack">
            {LANGUAGES.map((lang) => (
              <VisionContentPanel key={lang} language={lang} isVisible={language === lang} />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
