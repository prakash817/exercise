"use client";

import { useState } from "react";
import useScrollToHash from "@/hooks/useScrollToHash";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/testimonials";
import PlansSection from "@/components/sections/PlansSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import Lightbox from "@/components/Lightbox";

export default function HomePage() {
  useScrollToHash();
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        {/* <PlansSection planType="core" category="Popular LIC Core Plans" /> */}
        <PlansSection
          planType="conceptual"
          category="Popular LIC Conceptual Plans"
        />
        <ServicesSection />
        <LeadFormSection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
