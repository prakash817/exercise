"use client";

import TestimonialCard from "./TestimonialCard";
import TestimonialDots from "./TestimonialDots";
import useTestimonialCarousel from "./useTestimonialCarousel";

export default function TestimonialCarousel({ testimonials }) {
  const {
    activeIndex,
    setActiveIndex,
    expandedIndex,
    cardStep,
    cardRef,
    setIsHovered,
    toggleExpanded,
  } = useTestimonialCarousel(testimonials);

  return (
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
          <TestimonialCard
            key={item.id ?? item.name}
            item={item}
            isActive={index === activeIndex}
            isExpanded={expandedIndex === index}
            onToggleComment={() => toggleExpanded(index)}
            cardRef={index === 0 ? cardRef : null}
          />
        ))}
      </div>

      <TestimonialDots
        testimonials={testimonials}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}
