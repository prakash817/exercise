import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getTestimonials } from "../../config/siteConfig";

const AUTO_SCROLL_MS = 3500;

function StarRating({ rating }) {
  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`testimonial-stars__star${index < rating ? " is-filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialSectionHeading() {
  return (
    <div className="section-head">
      <div className="kicker">Client Stories</div>
      <h2>What Our Customers Say</h2>
      <p>
        Real feedback from families who trusted us for insurance planning, claim
        support, and long-term financial guidance.
      </p>
    </div>
  );
}

function TestimonialComment({ comment, isExpanded, onToggle, isActive }) {
  const contentRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useLayoutEffect(() => {
    const node = contentRef.current;
    if (!node || isExpanded) {
      setShowMore(false);
      return undefined;
    }

    const checkOverflow = () => {
      setShowMore(node.scrollHeight > node.clientHeight + 1);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(node);

    return () => observer.disconnect();
  }, [comment, isExpanded, isActive]);

  return (
    <div
      className={`testimonial-card__comment-wrap${isExpanded ? " is-expanded" : ""}`}
    >
      <div
        ref={contentRef}
        className="testimonial-card__comment"
        tabIndex={isExpanded ? 0 : undefined}
      >
        {comment}
      </div>

      {showMore && !isExpanded ? (
        <button
          type="button"
          className="testimonial-card__more"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
        >
          ...more
        </button>
      ) : null}

      {isExpanded ? (
        <button
          type="button"
          className="testimonial-card__more"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
        >
          less
        </button>
      ) : null}
    </div>
  );
}

export default function TestimonialSection() {
  const testimonials = getTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [cardStep, setCardStep] = useState(324);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const isPaused = isHovered || expandedIndex !== null;

  useEffect(() => {
    const measureCardStep = () => {
      if (!cardRef.current) return;

      const cardWidth = cardRef.current.offsetWidth;
      const gap =
        Number.parseFloat(
          getComputedStyle(cardRef.current.parentElement).gap,
        ) || 24;
      setCardStep(cardWidth + gap);
    };

    measureCardStep();
    window.addEventListener("resize", measureCardStep);
    return () => window.removeEventListener("resize", measureCardStep);
  }, []);

  useEffect(() => {
    setExpandedIndex(null);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const toggleExpanded = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container">
        <TestimonialSectionHeading />

        <div
          className="testimonial-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(calc(50% - ${cardStep / 2}px - ${activeIndex * cardStep}px))`,
            }}
          >
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                ref={index === 0 ? cardRef : null}
                className={`testimonial-card${index === activeIndex ? " is-active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="testimonial-card__quote" aria-hidden="true">
                  "
                </div>
                <StarRating rating={item.rating} />
                <TestimonialComment
                  comment={item.comment}
                  isExpanded={expandedIndex === index}
                  onToggle={() => toggleExpanded(index)}
                  isActive={index === activeIndex}
                />
                <div className="testimonial-card__profile">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className="testimonial-dots"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                className={`testimonial-dots__dot${index === activeIndex ? " is-active" : ""}`}
                aria-selected={index === activeIndex}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
