import { heroChips } from "../data/content";

const marqueeItems = [...heroChips, ...heroChips];

export default function PolicyMarquee({ visibleHeading = true }) {
  return (
    <div className="policy-marquee-wrap">
      {visibleHeading && (
        <p className="policy-marquee__label">Popular LIC Plans</p>
      )}
      <div className="policy-marquee" aria-label="Popular LIC policy plans">
        <div
          className="policy-marquee__fade policy-marquee__fade--left"
          aria-hidden="true"
        />
        <div
          className="policy-marquee__fade policy-marquee__fade--right"
          aria-hidden="true"
        />
        <div className="policy-marquee__track">
          {marqueeItems.map((chip, index) => (
            <span key={`${chip}-${index}`} className="policy-marquee__chip">
              <span className="policy-marquee__dot" aria-hidden="true" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
