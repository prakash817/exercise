import { useEffect, useState } from 'react'
import { siteConfig } from '../config/siteConfig'

const OFFER_DURATION_MS = siteConfig.offerDurationMs
const STORAGE_KEY = 'shubh_insurance_limited_offer_end'

function getOfferEndTime() {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const end = Number(stored)
    if (!Number.isNaN(end) && end > Date.now()) return end
  }

  const end = Date.now() + OFFER_DURATION_MS
  window.localStorage.setItem(STORAGE_KEY, String(end))
  return end
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':')
}

export default function LimitedTimeOfferBadge({ className = '' }) {
  const [endTime] = useState(getOfferEndTime)
  const [timeLeft, setTimeLeft] = useState(() => formatCountdown(endTime - Date.now()))

  useEffect(() => {
    const tick = () => setTimeLeft(formatCountdown(endTime - Date.now()))
    tick()

    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [endTime])

  return (
    <div className={`limited-offer-badge ${className}`.trim()} aria-live="polite">
      <span className="limited-offer-badge__ring" aria-hidden="true" />
      <span className="limited-offer-badge__shine" aria-hidden="true" />

      <div className="limited-offer-badge__row limited-offer-badge__row--main">
        <span className="limited-offer-badge__dot" aria-hidden="true" />
        <span className="limited-offer-badge__icon" aria-hidden="true">
          ✨
        </span>
        <span className="limited-offer-badge__text">Free Consultation</span>
      </div>

      <div className="limited-offer-badge__row limited-offer-badge__row--offer">
        <span className="limited-offer-badge__label">Limited Time Offer</span>
        <span className="limited-offer-badge__timer" aria-label={`Offer ends in ${timeLeft}`}>
          {timeLeft}
        </span>
      </div>
    </div>
  )
}
