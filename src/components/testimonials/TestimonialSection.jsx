"use client";

import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialSectionHeading from "./TestimonialSectionHeading";
import "./TestimonialSection.css";

export default function TestimonialSection() {
  const { testimonials } = useTestimonials();

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container">
        <TestimonialSectionHeading />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
