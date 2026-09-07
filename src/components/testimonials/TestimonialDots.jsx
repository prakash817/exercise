export default function TestimonialDots({
  testimonials,
  activeIndex,
  onSelect,
}) {
  return (
    <div
      className="testimonial-dots"
      role="tablist"
      aria-label="Testimonial slides"
    >
      {testimonials.map((item, index) => (
        <button
          key={`dot-${item.id ?? item.name}`}
          type="button"
          role="tab"
          className={`testimonial-dots__dot${index === activeIndex ? " is-active" : ""}`}
          aria-selected={index === activeIndex}
          aria-label={`Show testimonial from ${item.name}`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
