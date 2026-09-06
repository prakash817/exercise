import { useState } from 'react'

export default function LanguageToggle({ language, onChange }) {
  return (
    <div className="language-toggle" role="group" aria-label="Choose language">
      <button
        type="button"
        className={`language-toggle__btn${language === 'hi' ? ' is-active' : ''}`}
        onClick={() => onChange('hi')}
        aria-pressed={language === 'hi'}
      >
        हिंदी
      </button>
      <button
        type="button"
        className={`language-toggle__btn${language === 'en' ? ' is-active' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
      >
        English
      </button>
    </div>
  )
}

export const LANGUAGES = ['hi', 'en']

export function useLanguage(defaultLanguage = 'hi') {
  return useState(defaultLanguage)
}
