"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_SCROLL_MS = 2500;

export default function useTestimonialCarousel(testimonials) {
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
  }, [testimonials.length]);

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

  return {
    activeIndex,
    setActiveIndex,
    expandedIndex,
    cardStep,
    cardRef,
    setIsHovered,
    toggleExpanded,
  };
}
