import { faqItems } from '../../data/content'

export default function FAQSection() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq">
          {faqItems.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
