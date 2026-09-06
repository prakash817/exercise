export default function FreeConsultationBadge({ className = '' }) {
  return (
    <span className={`free-consultation-badge ${className}`.trim()} aria-label="Free Consultation">
      <span className="free-consultation-badge__ring" aria-hidden="true" />
      <span className="free-consultation-badge__dot" aria-hidden="true" />
      <span className="free-consultation-badge__icon" aria-hidden="true">
        ✨
      </span>
      <span className="free-consultation-badge__text">Free Consultation</span>
      <span className="free-consultation-badge__shine" aria-hidden="true" />
    </span>
  )
}
